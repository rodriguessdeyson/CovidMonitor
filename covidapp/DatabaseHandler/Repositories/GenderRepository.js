const GenderModel = require("../Models/GenderModel").GenderModel;

/**
 * Classe de acesso aos repositório da tabela Gender.
 */
class GenderRepository
{
	/**
	 * Insere um sexo na base de dados.
	 * @param {GenderModel} genderModel Objeto do tipo SexoModel para persistência em base de dados. 
	 */
	async Insert(genderModel)
	{
		try
		{
			// Abre o pooling de conexão.
			const dbConnection = await require("../DatabaseHandler").OpenConnection();
			
			// Inicia a query de inserção de dados.
			const sql = "INSERT INTO covidapp.gender (Gender) VALUES (?);";
			
			// Configura os parâmetros para evitar SQL Injection.
			const values = [genderModel.gender];
			
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
            const sql = "SELECT * FROM covidapp.gender;";

            // Executa a query.
            const [response] = await dbConnection.query(sql);
            return response;
        }
        catch(error)
        {
            console.log(error);
        }
    }

	async SelectGender(gender)
    {
        try
        {
            // Abre o pooling de conexão.
            const dbConnection = require("../DatabaseHandler").OpenConnection();

            // Inicia a query de inserção de dados.
            const sql = "SELECT * FROM covidapp.gender WHERE Gender = ?";
			const values = [gender];

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
	 * Atualiza um sexo na base de dados.
	 * @param {GenderModel} genderModel Objeto do tipo GenderModel para persistência em base de dados. 
	 */
	async UpdateById(id, genderModel)
	{
	 try
	 {
		 // Abre o pooling de conexão.
		 const dbConnection = await require("../DatabaseHandler").OpenConnection();

		 // Inicia a query de inserção de dados.
		 const sql = "UPDATE covidapp.gender SET Gender=? WHERE Id=?;";
		 
		 // Configura os parâmetros para evitar SQL Injection.
		 const values = [genderModel.gender, id];
		 
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
	GenderRepository
}