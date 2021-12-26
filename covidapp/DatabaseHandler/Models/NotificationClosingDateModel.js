/**
 * Cria um objeto modelo do tipo data de encerramento da notififcação para persistência.
 */
class NotificationClosingDateModel {

	/**
	 * Inicializa um template-objeto NotificationClosingDateModel.
	 * @param {Number} id Id da data de encerramento da notificação.
	 * @param {Date} date Data de encerramento.
	 */
	constructor (id, date)
	{
		this.id = id;
		this.date = date;
	}
}

module.exports =  NotificationClosingDateModel;