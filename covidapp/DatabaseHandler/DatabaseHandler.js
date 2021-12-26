const { Console } = require("console");
const { response } = require("express");

/**
 * Abre uma conexão com a base de dados.
 * @returns Objeto de conexão a ser compartilhado entre as queries.
 */
function OpenConnection()
{
	if (global.connection && global.connection.state !== 'disconnected')
		return global.connection;
 
	const mysql = require("mysql2/promise");
	try
	{
		const connection = mysql.createPool({
			host: process.env.DB_HOST,
			port: process.env.DB_PORT,
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			multipleStatements: true,
			waitForConnections: true,
			connectionLimit: 20,
			queueLimit: 0
		});
		console.log("Conectou no MySQL!");
		global.connection = connection;
		return connection;
	}
	catch (error)
	{
		Console.log(error);
	}
}

/**
 * Cria a estrutura inicial da base de dados do COVID App.
 * @param {object} connection Objeto com a conexão da base de dados.
 */
function CreateDatabase()
{
	const connection = OpenConnection();
	const fs = require('fs');
	const path = require('path'),
    filePath = path.join(__dirname, "DatabaseStructures\\coviddb.txt");
	fs.readFile(filePath, 'utf8', (error, data) =>
	{
		if (error)
		{
		  throw error;
		}
		
		// console.log(data)
		connection.query(data);
	});

	// Configura os elementos default.
	CreateAgeRegisters();
	CreateGenderRegisters();
	CreateRaceRegisters();

	function CreateAgeRegisters()
	{
		const AgeRangeRepository = require("./Repositories/AgeRangeRepository").AgeRangeRepository;
		const ageRange = new AgeRangeRepository();
		const AgeRangeModel = require("./Models/AgeRangeModel").AgeRangeModel;
		const AgeRangeEnum = require("./Models/AgeRangeModel").GetAgeRangeArray();

		for (let index = 0; index < AgeRangeEnum.length; index++)
		{
			const age = AgeRangeEnum[index];
			let ageModel = new AgeRangeModel();
			ageModel.age = age;
			ageRange.Insert(ageModel);
		}
	}

	function CreateGenderRegisters()
	{
		const GenderRepository = require("./Repositories/GenderRepository").GenderRepository;
		const GenderModel = require("./Models/GenderModel").GenderModel;
		const GenderEnum = require("./Models/GenderModel").GetGenderArray();

		for (let index = 0; index < GenderEnum.length; index++) {
			const gender = GenderEnum[index];
			let genderModel = new GenderModel();
			genderModel.gender = gender;
			let genderRepository = new GenderRepository();
			genderRepository.Insert(genderModel);
		}
	}

	function CreateRaceRegisters()
	{
		const RaceRepository = require("./Repositories/RaceRepository").RaceRepository;
		const raceRepository = new RaceRepository();
		const RaceModel = require("./Models/RaceModel").RaceModel;
		const RaceEnum = require("./Models/RaceModel").GetRaceArray();

		for (let index = 0; index < RaceEnum.length; index++)
		{
			const race = RaceEnum[index];
			let raceModel = new RaceModel();
			raceModel.race = race;
			raceRepository.Insert(raceModel);
		}
	}
}

module.exports = 
{
	OpenConnection,
	CreateDatabase
}