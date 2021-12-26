const NotificationClosingDateModel = require("../Models/NotificationClosingDateModel");

/**
 * Classe de acesso aos repositório da tabela NotificationClosingDates.
 */
class NotificationClosingDateRepository
{	
	/**
	 * Insere uma data de encerramento na base de dados.
	 * @param {NotificationClosingDateModel} notificationClosingDateModel Objeto do tipo NotificationClosingDateModel para persistência em base de dados. 
	 */
	async Insert(notificationClosingDateModel)
	{
		try
		{
			// Abre o pooling de conexão.
			const dbConnection = await require("../DatabaseHandler").OpenConnection();

			// Inicia a query de inserção de dados.
			const sql = "INSERT INTO covidapp.notificationclosingdates (Date) VALUES (?);";
			
			// Configura os parâmetros para evitar SQL Injection.
			const values = [notificationClosingDateModel.date];
			
			// Executa a query e retorna o Id do elemento inserido.
			const response = await dbConnection.query(sql, values);
			return response;
		}
		catch (error)
		{
			console.log(error);
		}
	}
	
	async SelectCloseDate(date)
    {
        try
        {
            // Abre o pooling de conexão.
            const dbConnection = await require("../DatabaseHandler").OpenConnection();

            // Inicia a query de inserção de dados.
            const sql = "SELECT * FROM covidapp.notificationclosingdates WHERE Date = ?";
			const values = [date];

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
	 * Atualiza uma data de Encerramento na base de dados.
	 * @param {NotificationClosingDateModel} notificationClosingDateModel Objeto do tipo NotificationClosingDateModel para persistência em base de dados. 
	 */
	async UpdateById(id, notificationClosingDateModel)
	{
		try
		{
			// Abre o pooling de conexão.
			const dbConnection = await require("../DatabaseHandler").OpenConnection();

			// Inicia a query de inserção de dados.
			const sql = "UPDATE covidapp.notificationclosingdates SET Date=? WHERE Id=?;";
			
			// Configura os parâmetros para evitar SQL Injection.
			const values = [notificationClosingDateModel.date, id];
			
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

module.exports = NotificationClosingDateRepository;