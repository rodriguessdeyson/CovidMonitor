/**
 * Cria um objeto modelo do tipo estado para persistência.
 */
class StateModel {
	/**
	 * Inicializa um template-objeto StateModel.
	 * @param {Id} id Id da unidade federativa.
	 * @param {String} name Nome da unidade federativa.
	 */
	constructor (id, name)
	{
		this.id = id;
		this.name = name;
	}
}
	
module.exports = StateModel;