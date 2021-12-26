const NotificationOpeningDateModel = require("../Models/NotificationOpeningDateModel");

/**
 * Classe de acesso aos repositório da tabela NotificationOpeningDates.
 */
class NotificationOpeningDateRepository
{	
	/**
	 * Insere uma data de abertura na base de dados.
	 * @param {NotificationOpeningDateModel} notificationOpeningDateModel Objeto do tipo NotificationOpeningDateModel para persistência em base de dados. 
	 */
	async Insert(notificationOpeningDateModel)
	{
		try
		{
			// Abre o pooling de conexão.
			const dbConnection = await require("../DatabaseHandler").OpenConnection();

			// Inicia a query de inserção de dados.
			const sql = "INSERT INTO covidapp.notificationopenningdates (Date) VALUES (?);";
			
			// Configura os parâmetros para evitar SQL Injection.
			const values = [notificationOpeningDateModel.date];
			
			// Executa a query e retorna o Id do elemento inserido.
			const response = await dbConnection.query(sql, values);
			return response;
		}
		catch (error)
		{
			console.log(error);
		}
	}
	
	async SelectOpenDate(date)
    {
        try
        {
            // Abre o pooling de conexão.
            const dbConnection = await require("../DatabaseHandler").OpenConnection();

            // Inicia a query de inserção de dados.
            const sql = "SELECT * FROM covidapp.notificationopenningdates WHERE Date = ?";
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
	 * Atualiza uma data de abertura na base de dados.
	 * @param {NotificationOpeningDateModel} notificationOpeningDateModel Objeto do tipo NotificationOpeningDateModel para persistência em base de dados. 
	 */
	async UpdateById(id, notificationOpeningDateModel)
	{
		try
		{
			// Abre o pooling de conexão.
			const dbConnection = await require("../DatabaseHandler").OpenConnection();

			// Inicia a query de inserção de dados.
			const sql = "UPDATE covidapp.notificationopeningdates SET Date=? WHERE Id=?;";
			
			// Configura os parâmetros para evitar SQL Injection.
			const values = [notificationOpeningDateModel.date, id];
			
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

module.exports = NotificationOpeningDateRepository;