const AgeRangeModel = require("../Models/AgeRangeModel").AgeRangeModel;

/**
 * Classe de acesso aos repositório da tabela AgeRange.
 */
class AgeRangeRepository
{
	/**
	 * Insere uma faixa etária na base de dados.
	 * @param {AgeRangeModel} ageRangeModel Objeto do tipo AgeRangeModel para persistência em base de dados. 
	 */
	async Insert(ageRangeModel)
	{
		try
		{
			// Abre o pooling de conexão.
			const dbConnection = await require("../DatabaseHandler").OpenConnection();

			// Inicia a query de inserção de dados.
			const sql = "INSERT INTO covidapp.agerange (Age) VALUES (?);";

			// Configura os parâmetros para evitar SQL Injection.
			const values = [ageRangeModel.age];

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
            const sql = "SELECT * FROM covidapp.agerange;";

            // Executa a query.
            const [response] = await dbConnection.query(sql);
            return response;
        }
        catch(error)
        {
            console.log(error);
        }
    }

	async SelectAge(ageRange)
    {
        try
        {
            // Abre o pooling de conexão.
            const dbConnection = await require("../DatabaseHandler").OpenConnection();

            // Inicia a query de inserção de dados.
            const sql = "SELECT * FROM covidapp.agerange WHERE Age = ?";
			const values = [ageRange];

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
	 * Atualiza uma faixa etária na base de dados.
	 * @param {Number} id Id da faixa etária a ser atualizada.
	 * @param {AgeRangeModel} ageRangeModel Objeto do tipo AgeRangeModel para persistência em base de dados. 
	 */
	async UpdateById(id, ageRangeModel)
	{
		try
		{
			// Abre o pooling de conexão.
			const dbConnection = await require("../DatabaseHandler").OpenConnection();

			// Inicia a query de inserção de dados.
			const sql = "UPDATE covidapp.faixasetarias SET Faixa=? WHERE Id=?;";

			// Configura os parâmetros para evitar SQL Injection.
			const values = [ageRangeModel.age, id];

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
	AgeRangeRepository
}