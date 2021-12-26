/**
 * Cria um objeto modelo do tipo tipo de teste de covid para persistência.
 */
class COVIDTestModel {

	/**
	 * Inicializa um template-objeto COVIDTestModel.
	 * @param {Number} id Id do tipo de teste.
	 * @param {String} name Nome do tipo de teste.
	 */
	constructor (id, name)
	{
		this.id = id;
		this.name = name;
	}	
}
module.exports = COVIDTestModel;