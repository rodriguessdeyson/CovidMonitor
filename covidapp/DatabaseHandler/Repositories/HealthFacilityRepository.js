const HealthFacility = require("../Models/HealthFacilityModel");

/**
 * Classe de acesso aos repositório da tabela HealthFacilities.
 */
class HealthFacilityRepository
{
	/**
	 * Insere um centro de saúde na base de dados.
	 * @param {HealthFacility} healthFacility Objeto do tipo HealthFacility para persistência em base de dados. 
	 */
	async Insert(healthFacility)
	{
		try
		{
			// Abre o pooling de conexão.
			const dbConnection = await require("../DatabaseHandler").OpenConnection();

			// Inicia a query de inserção de dados.
			const sql = "INSERT INTO covidapp.healthfacilities (Name, Neighborhood_Id) VALUES (?,?);";
			
			// Configura os parâmetros para evitar SQL Injection.
			const values = [healthFacility.name, healthFacility.neighborhood_Id];
			
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
            const sql = "SELECT * FROM covidapp.healthfacilities;";

            // Executa a query.
            const [response] = await dbConnection.query(sql);
            return response;
        }
        catch(error)
        {
            console.log(error);
        }
    }

	async SelectHealthFacility(hf)
    {
        try
        {
            // Abre o pooling de conexão.
            const dbConnection = await require("../DatabaseHandler").OpenConnection();

            // Inicia a query de inserção de dados.
            const sql = "SELECT * FROM covidapp.HealthFacilities WHERE Name = ?";
			const values = [hf];

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
	 * Atualiza um centro de saúde na base de dados a partir do Id.
	 * @param {HealthFacility} healthFacility Objeto do tipo HealthFacility para persistência em base de dados. 
	 */
	async UpdateById(id, healthFacility)
	{
		try
		{
			// Abre o pooling de conexão.
			const dbConnection = await require("../DatabaseHandler").OpenConnection();

			// Inicia a query de atualização de dados.
			const sql = "UPDATE covidapp.centrosdesaude SET Nome=?, Bairro_Id=? WHERE Id=?;";
			
			// Configura os parâmetros para evitar SQL Injection.
			const values = [healthFacility.name, healthFacility.neighborhood_Id, id];
			
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

module.exports = HealthFacilityRepository;