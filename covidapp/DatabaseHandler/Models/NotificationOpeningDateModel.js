/**
 * Cria um objeto modelo do tipo data de abertura da notififcação para persistência.
 */
 class NotificationOpeningDateModel {

	/**
	 * Inicializa um template-objeto NotificationOpeningDateModel.
	 * @param {Number} id Id da data de abertura da notificação.
	 * @param {Date} date Data de abertura.
	 */
	constructor (id, date)
	{
		this.id = id;
		this.date = date;
	}
}

module.exports = NotificationOpeningDateModel;