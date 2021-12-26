/**
 * Cria um objeto modelo do tipo município para persistência.
 */
class CityModel {
	
	/**
	 * Inicializa um template-objeto CityModel.
	 * @param {Number} id Id de identificação da cidade.
	 * @param {Number} state_Id Id da unidade federativa que o municipio pertence.
	 * @param {String} name Nome do municipio.
	 */
	constructor(id, state_Id, name)
	{
		this.id = id;
		this.state_Id = state_Id;
		this.name = name;
	}
}

module.exports = 
{
	CityModel
}