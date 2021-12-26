const COVIDTestModel = require("../Models/COVIDTestModel");

/**
 * Classe de acesso aos repositório da tabela COVIDTest.
 */
class COVIDTestRepository
{
	/**
	 * Insere um tipo de teste na base de dados.
 	 * @param {COVIDTestModel} covidTestModel Objeto do tipo COVIDTestModel para persistência em base de dados. 
	 */
	async Insert(covidTestModel)
	{
		try
		{
			// Abre o pooling de conexão.
			const dbConnection = await require("../DatabaseHandler").OpenConnection();

			// Inicia a query de inserção de dados.
			const sql = "INSERT INTO covidapp.covidtests (Name) VALUES (?);";
			
			// Configura os parâmetros para evitar SQL Injection.
			const values = [covidTestModel.name];
			
			// Executa a query e retorna o Id do elemento inserido.
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
            const sql = "SELECT * FROM covidapp.covidtests;";

            // Executa a query.
            const [response] = await dbConnection.query(sql);
            return response;
        }
        catch(error)
        {
            console.log(error);
        }
    }

	async SelectTest(test)
    {
        try
        {
            // Abre o pooling de conexão.
            const dbConnection = await require("../DatabaseHandler").OpenConnection();

            // Inicia a query de inserção de dados.
            const sql = "SELECT * FROM covidapp.covidtests WHERE Name = ?";
			const values = [test];

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
	 * Atualiza um tipo de teste na base de dados.
	 * @param {COVIDTestModel} covidTestModel Objeto do tipo COVIDTestModel para persistência em base de dados. 
	 */
	async UpdateById(id, covidTestModel)
	{
		try
		{
			// Abre o pooling de conexão.
			const dbConnection = await require("../DatabaseHandler").OpenConnection();

			// Inicia a query de inserção de dados.
			const sql = "UPDATE covidapp.covidtests SET Name=? WHERE Id=?;";
			
			// Configura os parâmetros para evitar SQL Injection.
			const values = [covidTestModel.name, id];
			
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
	
module.exports = COVIDTestRepository;