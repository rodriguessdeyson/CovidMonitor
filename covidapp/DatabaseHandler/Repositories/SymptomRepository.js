const SymptomModel = require("../Models/SymptomModel");

/**
 * Classe de acesso aos repositório da tabela Symptoms.
 */
class SymptomRepository
{
	/**
	 * Insere um sintoma na base de dados.
	 * @param {SymptomModel} symptomModel Objeto do tipo SymptomModel para persistência em base de dados. 
	*/
	async Insert(symptomModel)
	{
		try
		{
			// Abre o pooling de conexão.
			const dbConnection = await require("../DatabaseHandler").OpenConnection();

			// Inicia a query de inserção de dados.
			const sql = "INSERT INTO covidapp.symptoms(Notification_Id, SoreThroat, Dyspnea, Fever, Cough, Others)VALUES(?,?,?,?,?,?)";
			
			// Configura os parâmetros para evitar SQL Injection.
			const values = [
                symptomModel.notification_Id,
                symptomModel.sorethroat,
                symptomModel.dyspnea,
                symptomModel.fever,
                symptomModel.cough,
                symptomModel.others
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

module.exports = SymptomRepository;