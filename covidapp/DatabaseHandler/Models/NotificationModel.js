/**
 * Cria um objeto modelo do tipo notififcação para persistência.
 */
class NotificationModel {
	
	/**
	* Inicializa um template-objeto NotificationModel.
	* @param {Number} id Id da notificação.
	* @param {Number} ageRange_Id Id da faixa etária da notificação.
	* @param {Number} race_Id Id da raça que gerou a notificação.
	* @param {Number} gender_Id Id do sexo que gerou a notificação.
	* @param {Number} healthFacility_Id Id da centro de saúde que registrou a notificação.
	* @param {Number} neighborhood_Id Id do bairro residência que ocorreu a notificação.
	*/
	constructor (id, ageRange_Id, race_Id, gender_Id, healthFacility_Id, neighborhood_Id)
	{
		this.id = id;
		this.ageRange_Id = ageRange_Id;
		this.race_Id = race_Id;
		this.gender_Id = gender_Id;
		this.healthFacility_Id = healthFacility_Id;
		this.neighborhood_Id = neighborhood_Id;
	}
}

module.exports =
{
	NotificationModel
}