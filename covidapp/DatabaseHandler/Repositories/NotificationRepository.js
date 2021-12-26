const NotificationModel = require("../Models/NotificationModel");

/**
 * Classe de acesso aos repositório da tabela Symptoms.
 */
class NotificationRepository
{
	/**
	 * Insere uma notificação na base de dados.
	 * @param {NotificationModel} notificationModel Objeto do tipo NotificationModel para persistência em base de dados. 
	*/
	async Insert(notificationModel)
	{
		try
		{
			// Abre o pooling de conexão.
			const dbConnection = await require("../DatabaseHandler").OpenConnection();

			// Inicia a query de inserção de dados.
			const sql = "INSERT INTO covidapp.notifications (Gender_Id, AgeRange_Id, Race_Id, HealthFacility_Id, Neighborhood_Id) VALUES (?,?,?,?,?);";
			
			// Configura os parâmetros para evitar SQL Injection.
			const values = [
                notificationModel.gender_Id,
                notificationModel.ageRange_Id,
                notificationModel.race_Id,
                notificationModel.healthFacility_Id,
                notificationModel.neighborhood_Id,
            ];

			// Executa a query e retorna o Id do elemento inserido.
			const response = await dbConnection.query(sql, values);
			return response;
		}
		catch (error)
		{
			console.log(error);
		}
	}
}

module.exports = NotificationRepository;