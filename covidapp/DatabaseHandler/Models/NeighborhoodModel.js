/**
 * Cria um objeto modelo do tipo bairro para persistência.
 */
class NeighborhoodModel {

	/**
	 * Inicializa um template-objeto NeighborhoodModel.
	 * @param {Number} id Id do bairro.
	 * @param {Number} city_Id Id do municipio que o bairro pertence.
	 * @param {String} name Nome do bairro.
	 * @returns Retorna um objeto modelo da entidade.
	 */
	constructor (id, city_Id, name)
	{
		this.id = id;
		this.city_Id = city_Id;
		this.name = name;
	}
}
 
module.exports = NeighborhoodModel;