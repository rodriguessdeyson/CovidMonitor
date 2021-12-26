const ClinicalInformationModel = require("../Models/ClinicalInformationModel");

/**
 * Classe de acesso aos repositório da tabela ClinicalInformation.
 */
class ClinicalInformationRepository
{
	/**
	 * Insere um dado clínico de uma notificação na base de dados.
	 * @param {ClinicalInformationModel} clinicalInformationModel Objeto do tipo ClinicalInformationModel para persistência em base de dados. 
	 */
	async Insert(clinicalInformationModel)
	{
		try
		{
			// Abre o pooling de conexão.
			const dbConnection = await require("../DatabaseHandler").OpenConnection();
			
			// Inicia a query de inserção de dados.
			const sql = "INSERT INTO covidapp.clinicalinformations (Notification_Id, LungDiseases, HeartDiseases, Diabetes, KidneyDisease, Immunosuppression, HighRiskPregnancy, ChromosomalDisorders) VALUES (?,?,?,?,?,?,?,?);";

			// Configura os parâmetros para evitar SQL Injection.
			const values = [
				clinicalInformationModel.notification_Id,
				clinicalInformationModel.lungDiseases,
				clinicalInformationModel.heartDiseases,
				clinicalInformationModel.diabetes,
				clinicalInformationModel.kidneyDisease,
				clinicalInformationModel.immunosuppression,
				clinicalInformationModel.highRiskPregnancy,
				clinicalInformationModel.chromosomalDisorders
			];

			// Executa a query.
			const response = await dbConnection.query(sql, values);
			return response;
		}
		catch (error)
		{
			console.log(error);
		}
	}

	/**
	 * Atualiza um dado clínico na base de dados a partir do Id.
	 * @param {ClinicalInformationModel} clinicalInformationModel Objeto do tipo ClinicalInformationModel para persistência em base de dados. 
	 */
	async UpdateById(id, clinicalInformationModel)
	{
		try
		{
			// Abre o pooling de conexão.
			const dbConnection = await require("../DatabaseHandler").OpenConnection();

			// Inicia a query de atualização de dados.
			const sql = "UPDATE covidapp.clinicalinformations SET Notification_Id=?, LungDiseases=?, HeartDiseases=?, Diabetes=?, KidneyDisease=?, Immunosuppression=?, HighRiskPregnancy=?, ChromosomalDisorders=? WHERE Id=?;";

			// Configura os parâmetros para evitar SQL Injection.
			const values = [
				clinicalInformationModel.notification_Id,
				clinicalInformationModel.lungDiseases,
				clinicalInformationModel.heartDiseases,
				clinicalInformationModel.diabetes,
				clinicalInformationModel.kidneyDisease,
				clinicalInformationModel.immunosuppression,
				clinicalInformationModel.highRiskPregnancy,
				clinicalInformationModel.chromosomalDisorders,
				id
			];

			// Executa a query.
			const response = await dbConnection.query(sql, values);
			return response;
		}
		catch (error)
		{
			console.log(error);
		}
	}

	/**
	 * Atualiza um dado clínico na base de dados a partir do Id da notificação associada.
	 * @param {ClinicalInformationModel} clinicalInformationModel Objeto do tipo ClinicalInformationModel para persistência em base de dados. 
	 */
	async UpdateByNotificationId(notification_Id, clinicalInformationModel)
	{
		try
		{
			// Abre o pooling de conexão.
			const dbConnection = await require("../DatabaseHandler").OpenConnection();

			// Inicia a query de atualização de dados.
			const sql = "UPDATE covidapp.clinicalinformations SET LungDiseases=?, HeartDiseases=?, Diabetes=?, KidneyDisease=?, Immunosuppression=?, HighRiskPregnancy=?, ChromosomalDisorders=? WHERE Notification_Id=?;";
			
			// Configura os parâmetros para evitar SQL Injection.
			const values = [
				clinicalInformationModel.lungDiseases,
				clinicalInformationModel.heartDiseases,
				clinicalInformationModel.diabetes,
				clinicalInformationModel.kidneyDisease,
				clinicalInformationModel.immunosuppression,
				clinicalInformationModel.highRiskPregnancy,
				clinicalInformationModel.chromosomalDisorders,
				notification_Id
			];

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

module.exports = ClinicalInformationRepository;