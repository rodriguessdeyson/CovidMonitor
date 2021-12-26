require("dotenv").config();

const express = require("express");
const multer = require('multer');
const cors = require('cors');
const { NotificationStatusModel } = require("./DatabaseHandler/Models/NotificationStatusModel");
const app = express();
app.use(cors())
app.use(express.static(__dirname + '/public'));

// #region Consultas de Configurações
app.get("/api/cities", (request, resp) => {
	const CityRepository = require("./DatabaseHandler/Repositories/CitiesRepository");
	const cities = new CityRepository();
	cities.SelectAll().then(result => {
		resp.send(result);
	});
});

app.get("/api/neighborhoods", (request, resp) => {
	const NeighborhoodRepository = require("./DatabaseHandler/Repositories/NeighborhoodRepository");
	const neighborhoods = new NeighborhoodRepository();
	neighborhoods.SelectAll().then(result => {
		resp.send(result);
	});
});

app.get("/api/ages", (request, resp) => {
	const AgeRangeRepository = require("./DatabaseHandler/Repositories/AgeRangeRepository").AgeRangeRepository;
	const ageRange = new AgeRangeRepository();
	ageRange.SelectAll().then(result => {
		resp.send(result);
	});
});

app.get("/api/healthfacilities", (request, resp) => {
	const HealthFacilityRepository = require("./DatabaseHandler/Repositories/HealthFacilityRepository");
	const healthFacilities = new HealthFacilityRepository();
	healthFacilities.SelectAll().then(result => {
		resp.send(result);
	});
});

app.get("/api/covidtests", (request, resp) => {
	const COVIDTestsRepository = require("./DatabaseHandler/Repositories/COVIDTestRepository");
	const covidTests = new COVIDTestsRepository();
	covidTests.SelectAll().then(result => {
		resp.send(result);
	});
});

app.get("/api/genders", (request, resp) => {
	const GenderRepository = require("./DatabaseHandler/Repositories/GenderRepository").GenderRepository;
	const gender = new GenderRepository();
	gender.SelectAll().then(result => {
		resp.send(result);
	});
});

app.get("/api/races", (request, resp) => {
	const RaceRepository = require("./DatabaseHandler/Repositories/RaceRepository").RaceRepository;
	const race = new RaceRepository();
	race.SelectAll().then(result => {
		resp.send(result);
	});
});

//#endregion

//#region Inserção de Casos

let storage = multer.diskStorage({
	destination: function (req, file, cb) {
			cb(null, "./storage")
	},
	filename: function (req, file, cb) {
			cb(null, file.fieldname + '-' + Date.now() + '.csv')
	}
});

const upload = multer({ storage }).single('covidData');
app.post("/api/covid/bulkinsert", upload, (req, res) => {
	// req.file is the name of your file in the form above, here 'uploaded_file'
	// req.body will hold the text fields, if there were any
	console.log("Arquivo:", req.file);
	let dataArr = [];
	const csv = require('fast-csv');
	csv.parseFile(req.file.path, {headers: true})
		.on("data", data => {
			dataArr.push(data);
		})
		.on("end", () => {
			console.log(dataArr.length);
			BulkInsert(dataArr);
		});
});

async function BulkInsert (data) {
	const AgeRangeModel = require("./DatabaseHandler/Models/AgeRangeModel").AgeRangeModel;
	const CityModel = require("./DatabaseHandler/Models/CityModel").CityModel;
	const ClinicalInformationModel = require("./DatabaseHandler/Models/ClinicalInformationModel");
	const COVIDTestModel = require("./DatabaseHandler/Models/COVIDTestModel");
	const GenderModel = require("./DatabaseHandler/Models/GenderModel").GenderModel;
	const HealthFacilityModel = require("./DatabaseHandler/Models/HealthFacilityModel");
	const NeighborhoodModel = require("./DatabaseHandler/Models/NeighborhoodModel");
	const NotificationClosingDateModel = require("./DatabaseHandler/Models/NotificationClosingDateModel");
	const NotificationModel = require("./DatabaseHandler/Models/NotificationModel").NotificationModel;
	const NotificationOpeningDateModel = require("./DatabaseHandler/Models/NotificationOpeningDateModel");
	const NotificationStatusModel = require("./DatabaseHandler/Models/NotificationStatusModel").NotificationStatusModel;
	const RaceModel = require("./DatabaseHandler/Models/RaceModel").RaceModel;
	const StateModel = require("./DatabaseHandler/Models/StateModel");
	const SymptomModel = require("./DatabaseHandler/Models/SymptomModel").SymptomModel;

	const AgeRangeRepository = require("./DatabaseHandler/Repositories/AgeRangeRepository").AgeRangeRepository;
	const CityRepository = require("./DatabaseHandler/Repositories/CitiesRepository");
	const ClinicalInformationRepository = require("./DatabaseHandler/Repositories/ClinicalInformationRepository");
	const COVIDTestRepository = require("./DatabaseHandler/Repositories/COVIDTestRepository");
	const GenderRepository = require("./DatabaseHandler/Repositories/GenderRepository").GenderRepository;
	const HealthFacilityRepository = require("./DatabaseHandler/Repositories/HealthFacilityRepository");
	const NeighborhoodRepository = require("./DatabaseHandler/Repositories/NeighborhoodRepository");
	const NotificationClosingDateRepository = require("./DatabaseHandler/Repositories/NotificationClosingDateRepository");
	const NotificationRepository = require("./DatabaseHandler/Repositories/NotificationRepository");
	const NotificationOpeningDateRepository = require("./DatabaseHandler/Repositories/NotificationOpeningDateRepository");
	const NotificationStatusRepository = require("./DatabaseHandler/Repositories/NotificationStatusRepository");
	const RaceRepository = require("./DatabaseHandler/Repositories/RaceRepository").RaceRepository;
	const StateRepository = require("./DatabaseHandler/Repositories/StateRepository");
	const SymptomRepository = require("./DatabaseHandler/Repositories/SymptomRepository");

	for (let csvRow = 0; csvRow < data.length; csvRow++)
	{
		const row = data[csvRow];
		
		const ageRangeRepo = new AgeRangeRepository();
		if (row.faixa_idade === "") continue;
		const age = await ageRangeRepo.SelectAge(row.faixa_idade);

		if (row.raca === "") continue;
		const raceRepo = new RaceRepository();
		const race = await raceRepo.SelectRace(row.raca);

		if (row.sexo === "") continue;
		const genderRepo = new GenderRepository();
		const gender = await genderRepo.SelectGender(row.sexo);

		if (row.tipo_teste === "") continue;
		const covidTestRepo = new COVIDTestRepository();
		let covidTest = await covidTestRepo.SelectTest(row.tipo_teste);

		if (covidTest.length === 0)
		{
			const covidTesteModel = new COVIDTestModel();
			covidTesteModel.name = row.tipo_teste;
			covidTest = await covidTestRepo.Insert(covidTesteModel);
		}

		if (row.bairro === "") continue;
		if (row.municipio_residencia === "") continue;
		const neighRepo = new NeighborhoodRepository();
		let neigh = await neighRepo.SelectNeighborhood(row.bairro);
		if (neigh.length === 0)
		{
			const cityRepo = new CityRepository();
			const city = await cityRepo.SelectCity(row.municipio_residencia);
			if (city.length === 0)
			{
				const cityModel = new CityModel();
				cityModel.name = row.municipio_residencia;
				cityModel.state_Id = 1;
				city = await cityRepo.Insert(cityModel);
				const neighModel = new NeighborhoodModel();
				neighModel.city_Id = city[0].insertId;
				neighModel.name = row.bairro;
				neigh = await neighRepo.Insert(neighModel);
			}
			else
			{
				const neighModel = new NeighborhoodModel();
				neighModel.city_Id = city[0].Id;
				neighModel.name = row.bairro;

				neigh = await neighRepo.Insert(neighModel);
			}
		}

		if (row.centro_saude === "") continue;
		const hfRepo = new HealthFacilityRepository();
		let hf = await hfRepo.SelectHealthFacility(row.centro_saude);
		if (hf.length === 0)
		{
			const hfModel = new HealthFacilityModel();
			hfModel.name = row.centro_saude;
			hfModel.neighborhood_Id = neigh[0].Id || neigh[0].insertId;

			hf = await hfRepo.Insert(hfModel);
		}

		const notificationModel = new NotificationModel();
		notificationModel.ageRange_Id = age[0].Id;
		notificationModel.race_Id = race[0].Id;
		notificationModel.gender_Id = gender[0].Id;
		notificationModel.healthFacility_Id = hf[0].Id || hf[0].insertId;
		notificationModel.neighborhood_Id = neigh[0].Id || neigh[0].insertId;
		const notiRepo = new NotificationRepository();
		const notification = await notiRepo.Insert(notificationModel);

		if (row.data_notificacao === "") continue;
		const notifiOpenRepo = new NotificationOpeningDateRepository();
		let notiOpen = await notifiOpenRepo.SelectOpenDate(row.data_notificacao);
		if (notiOpen.length === 0)
		{
			const notiOpenModel = new NotificationOpeningDateModel();
			notiOpenModel.date = row.data_notificacao;
			notiOpen = await notifiOpenRepo.Insert(notiOpenModel);
		}

		let notiClose = "";
		if (row.data_encerramento !== "")
		{
				const notifiCloseRepo = new NotificationClosingDateRepository();
				notiClose = await notifiCloseRepo.SelectCloseDate(row.data_encerramento)
				if (notiClose.length === 0)
				{
					const notiCloseModel = new NotificationClosingDateModel();
					notiCloseModel.date = row.data_encerramento;
					notiClose = await notifiCloseRepo.Insert(notiCloseModel);
				}
		}
			
		if (row.data_primeiros_sintomas === "" || row.data_teste === "") continue;
		const notiStatusModel = new NotificationStatusModel();
			notiStatusModel.notification_Id = notification[0].insertId;
      notiStatusModel.covidTest_Id = covidTest[0].Id || covidTest[0].insertId;
      notiStatusModel.notificationOpeningDate_Id = notiOpen[0].Id || notiOpen[0].insertId;
      notiStatusModel.notificationClosingDate_Id = notiClose === "" ? null: notiClose[0].Id || notiClose[0].insertId;
      notiStatusModel.firstSymptomDate = row.data_primeiros_sintomas === "" ? null : row.data_primeiros_sintomas;
      notiStatusModel.covidTestDate = row.data_teste === "" ? null : row.data_teste;
      notiStatusModel.deathDate = row.data_obito === "" ? null : row.data_obito;
      notiStatusModel.requested = row.solicitado === "SIM" ? 1 : 0;
      notiStatusModel.collected = row.coletado === "SIM" ? 1 : 0;
      notiStatusModel.concluded = row.concluido === "SIM" ? 1 : 0;
      notiStatusModel.canceled = row.cancelado === "SIM" ? 1 : 0;
      notiStatusModel.ignored = row.ignorado === "SIM" ? 1 : 0;
      notiStatusModel.death = row.obito === "SIM" ? 1 : 0;
      notiStatusModel.healed = row.cura === "SIM" ? 1 : 0;
      notiStatusModel.hospitalized = row.internado === "SIM" ? 1 : 0;
      notiStatusModel.icu = row.internado_uti === "SIM" ? 1 : 0;
      notiStatusModel.recoverAtHome = row.tratamento_domiciliar === "SIM" ? 1 : 0;
      notiStatusModel.finalClassification = row.classificacao_final;
		const notiStatusRepo = new NotificationStatusRepository();
		notiStatusRepo.Insert(notiStatusModel);
	}

};

//#endregion


//#region Consultas de KPIs
app.get("/api/covid/neighcases", (request, resp) => 
{
	// Abre o pooling de conexão.
	const dbConnection = require("./DatabaseHandler/DatabaseHandler").OpenConnection();

	// Inicia a query de inserção de dados.
	const sql = "SELECT Count(n.Neighborhood_Id) Count, nb.Name FROM covidapp.notifications n inner join covidapp.neighborhoods nb on n.Neighborhood_Id = nb.Id GROUP BY n.Neighborhood_Id ORDER BY Count DESC LIMIT 1;";

	// Executa a query.
	dbConnection.query(sql).then(ress => {
		resp.send([ress]);
	});
});

app.get("/api/covid/neighdeaths", (request, resp) => 
{
	// Abre o pooling de conexão.
	const dbConnection = require("./DatabaseHandler/DatabaseHandler").OpenConnection();

	// Inicia a query de inserção de dados.
	const sql = "SELECT Count(n.Neighborhood_Id) Count, nb.Name FROM covidapp.notifications n inner join covidapp.neighborhoods nb on n.Neighborhood_Id = nb.Id inner join covidapp.notificationsstatus ns on ns.notification_Id = n.Id where ns.Death = 1 GROUP BY n.Neighborhood_Id ORDER BY Count DESC LIMIT 1;";

	// Executa a query.
	dbConnection.query(sql).then(ress => {
		resp.send([ress]);
	});
});

app.get("/api/covid/notificationsdates", (request, resp) => 
{
	// Abre o pooling de conexão.
	const dbConnection = require("./DatabaseHandler/DatabaseHandler").OpenConnection();

	// Inicia a query de inserção de dados.
	const sql = "SELECT Count(ns.NotificationOpenningDate_Id) Notifications, od.Date FROM covidapp.notificationsstatus ns inner join covidapp.notificationopenningdates od on ns.NotificationOpenningDate_Id = od.Id GROUP BY od.Date order by od.Date";

	// Executa a query.
	dbConnection.query(sql).then(ress => {
		resp.send([ress]);
	});
});

//#endregion

app.get("/api/courses", (request, resp) => {
	resp.send([1, 2, 3]);
});

app.get("/api/covid/cases", (request, resp) => {
	const NotificationStatusRepository = require("./DatabaseHandler/Repositories/NotificationStatusRepository");
	const notificationStatus = new NotificationStatusRepository();
	notificationStatus.SelecNotifications().then( result => {
		resp.send(result);
	});
});

const apiPort = process.env.API_PORT || 3000;



app.listen(apiPort, () => {
	const databaseHandler = require("./DatabaseHandler/DatabaseHandler");
	databaseHandler.CreateDatabase();

	console.log(`Listening on port ${apiPort}...`);
});
