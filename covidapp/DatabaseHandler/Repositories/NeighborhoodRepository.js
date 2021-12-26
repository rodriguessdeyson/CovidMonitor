const NeighborhoodModel = require("../Models/NeighborhoodModel");

/**
 * Classe de acesso aos repositório da tabela Neighborhoods.
 */
class NeighborhoodRepository
{
	/**
	 * Insere um bairro na base de dados.
	 * @param {NeighborhoodModel} neighborhoodModel Objeto do tipo NeighborhoodModel para persistência em base de dados. 
	 */
	async Insert(neighborhoodModel)
	{
		try
		{
			// Abre o pooling de conexão.
			const dbConnection = await require("../DatabaseHandler").OpenConnection();

			// Inicia a query de inserção de dados.
			const sql = "INSERT INTO covidapp.neighborhoods (Name, City_Id) VALUES (?,?);";
			
			// Configura os parâmetros para evitar SQL Injection.
			const values = [neighborhoodModel.name, neighborhoodModel.city_Id];
			
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
            const sql = "SELECT * FROM covidapp.neighborhoods;";

            // Executa a query.
            const [response] = await dbConnection.query(sql);
            return response;
        }
        catch(error)
        {
            console.log(error);
        }
    }

	async SelectNeighborhood(neigh)
    {
        try
        {
            // Abre o pooling de conexão.
            const dbConnection = await require("../DatabaseHandler").OpenConnection();

            // Inicia a query de inserção de dados.
            const sql = "SELECT * FROM covidapp.neighborhoods WHERE Name = ?";
			const values = [neigh];

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
	 * Atualiza um bairro na base de dados a partir do Id.
	 * @param {NeighborhoodModel} neighborhoodModel Objeto do tipo NeighborhoodModel para persistência em base de dados. 
	 */
	async UpdateById(id, neighborhoodModel)
	{
		try
		{
			// Abre o pooling de conexão.
			const dbConnection = await require("../DatabaseHandler").OpenConnection();

			// Inicia a query de atualização de dados.
			const sql = "UPDATE covidapp.bairros SET Name=?, City_Id=? WHERE Id=?;";
			
			// Configura os parâmetros para evitar SQL Injection.
			const values = [neighborhoodModel.name, neighborhoodModel.city_Id, id];
			
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

module.exports = NeighborhoodRepository;