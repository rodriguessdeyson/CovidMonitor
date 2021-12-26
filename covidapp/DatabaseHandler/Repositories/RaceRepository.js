const RaceModel = require("../Models/RaceModel").RaceModel;

/**
 * Classe de acesso aos repositório da tabela Race.
 */
class RaceRepository
{
	/**
	 * Insere uma raça na base de dados.
	 * @param {RaceModel} raceModel Objeto do tipo RaceModel para persistência em base de dados. 
	 */
	async Insert(raceModel)
	{
		try
		{
			// Abre o pooling de conexão.
			const dbConnection = await require("../DatabaseHandler").OpenConnection();

			// Inicia a query de inserção de dados.
			const sql = "INSERT INTO covidapp.race (Race) VALUES (?);";
			
			// Configura os parâmetros para evitar SQL Injection.
			const values = [raceModel.race];
			
			// Executa a query.
			const response = await dbConnection.query(sql, values);
			return response;
		}
		catch (error)
		{
			console.log(error);
		}
	}

	async SelectAll()
    {
        try
        {
            // Abre o pooling de conexão.
            const dbConnection = await require("../DatabaseHandler").OpenConnection();

            // Inicia a query de inserção de dados.
            const sql = "SELECT * FROM covidapp.race;";

            // Executa a query.
            const [response] = await dbConnection.query(sql);
            return response;
        }
        catch(error)
        {
            console.log(error);
        }
    }
	
	async SelectRace(race)
    {
        try
        {
            // Abre o pooling de conexão.
            const dbConnection = await require("../DatabaseHandler").OpenConnection();

            // Inicia a query de inserção de dados.
            const sql = "SELECT * FROM covidapp.race WHERE Race = ?";
			const values = [race];

            // Executa a query.
            const [response] = await dbConnection.query(sql, values);
            return response;
        }
        catch(error)
        {
            console.log(error);
        }
    }

	/**
	 * Atualiza uma raça na base de dados.
	 * @param {Id} id Id da raça na base de dados.
	 * @param {RaceModel} raceModel Objeto do tipo RaceModel para persistência em base de dados. 
	 */
	async UpdateById(id, raceModel)
	{
		try
		{
			// Abre o pooling de conexão.
			const dbConnection = await require("../DatabaseHandler").OpenConnection();

			// Inicia a query de atualização de dados.
			const sql = "UPDATE covidapp.race SET Race=? WHERE Id=?;";
			
			// Configura os parâmetros para evitar SQL Injection.
			const values = [raceModel.race, id];
			
			// Executa a query.
			const response = await dbConnection.query(sql, values);
			return response;
		}
		catch (error)
		{
		 console.log(error);
		}
	}
}
	
module.exports = 
{
	RaceRepository,
}