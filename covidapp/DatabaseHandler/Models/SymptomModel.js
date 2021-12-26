/**
 * Cria um objeto modelo do tipo sintomas para persistência.
 */
class SymptomModel {

	/**
	 * Inicializa um template-objeto SymptomModel.
	 * @param {Number} id Id do sintoma.
	 * @param {Number} notification_Id Id da notificação.
	 * @param {Boolean} sorethroat Flag de indicação de sintoma de dor de garganta.
	 * @param {Boolean} dyspnea Flag de indicação de sintoma de dispneia.
	 * @param {Boolean} fever Flag de indicação de sintoma de febre.
	 * @param {Boolean} cough Flag de indicação de sintoma de tosse.
	 * @param {String} others Anotações sobre outros sintomas.
	 */
	constructor (id, notification_Id, sorethroat, dyspnea, fever, cough, others)
	{
		this.id = id;
		this.notification_Id = notification_Id;
		this.sorethroat = sorethroat;
		this.dyspnea = dyspnea;
		this.fever = fever;
		this.cough = cough;
		this.others = others;
	}
		
}

module.exports = 
{
	SymptomModel
}