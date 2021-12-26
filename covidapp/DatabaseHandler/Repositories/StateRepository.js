const StateModel = require("../Models/StateModel");

/**
 * Classe de acesso aos repositório da tabela States.
 */
class StateRepository
{
	/**
	 * Insere uma unidade federativa na base de dados.
	 * @param {StateModel} stateModel Objeto do tipo StateModel para persistência em base de dados. 
	*/
	async Insert(stateModel)
	{
		try
		{
			// Abre o pooling de conexão.
			const dbConnection = await require("../DatabaseHandler").OpenConnection();

			// Inicia a query de inserção de dados.
			const sql = "INSERT INTO covidapp.states (Name) VALUES (?);";
			
			// Configura os parâmetros para evitar SQL Injection.
			const values = [stateModel.name];
			
			// Executa a query e retorna o Id do elemento inserido.
			const response = await dbConnection.query(sql, values);
			return response;
		}
		catch (error)
		{
			console.log(error);
		}
	}

	/**
	 * Atualiza uma unidade federativa na base de dados.
	 * @param {Number} id Id da unidade federativa a ser atualizado.
	 * @param {Object} stateModel Objeto do tipo StateModel para persistência em base de dados. 
	 */
	async UpdateById(id, stateModel)
	{
		try
		{
			// Abre o pooling de conexão.
			const dbConnection = await require("../DatabaseHandler").OpenConnection();

			// Inicia a query de inserção de dados.
			const sql = "UPDATE covidapp.states SET Name=? WHERE Id=?;";
			
			// Configura os parâmetros para evitar SQL Injection.
			const values = [stateModel.name, id];
			
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

module.exports = StateRepository;