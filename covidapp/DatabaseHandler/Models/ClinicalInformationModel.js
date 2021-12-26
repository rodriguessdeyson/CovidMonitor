/**
 * Cria um objeto modelo do tipo informação clínica para persistência.
 */
class ClinicalInformationModel {

	/**
	 * Inicializa um template-objeto ClinicalInformationModel.
	 * @param {Number} id Id da informação clínica.
	 * @param {Number} notification_Id Id da notificação.
	 * @param {Boolean} lungDiseases Flag de indicação de doença respiratória.
	 * @param {Boolean} heartDiseases Flag de indicação de doença cardíacas.
	 * @param {Boolean} diabetes Flag de indicação de doença diabéticas.
	 * @param {Boolean} kidneyDisease Flag de indicação de doença renais gerais.
	 * @param {Boolean} immunosuppression Flag de indicação de doença imunossupressora.
	 * @param {Boolean} highRiskPregnancy Flag de indicação gravidez com risco.
	 * @param {Boolean} chromosomalDisorders Flag de indicação de doença cromossomica.
	*/
	constructor (id, notification_Id, lungDiseases, heartDiseases,diabetes, kidneyDisease,
		immunosuppression, highRiskPregnancy, chromosomalDisorders)
	{
		this.id = id;
		this.notification_Id = notification_Id;
		this.lungDiseases = lungDiseases;
		this.heartDiseases = heartDiseases;
		this.diabetes = diabetes;
		this.kidneyDisease = kidneyDisease;
		this.immunosuppression = immunosuppression;
		this.highRiskPregnancy = highRiskPregnancy;
		this.chromosomalDisorders = chromosomalDisorders;
	}
}

 
module.exports =  ClinicalInformationModel;