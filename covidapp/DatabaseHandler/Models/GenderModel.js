/**
 * Enumeraçãoes dos gêneros fixos.
 */
const GenderEnum = {
	MALE: "M",
	FEMALE: "F",
}

const GetGenderArray = () =>
{
	return [ GenderEnum.MALE,
		GenderEnum.FEMALE];
}

/**
 * Cria um objeto modelo do tipo gênero para persistência.
 */
class GenderModel {

	/**
	* Inicializa um template-objeto GenderModel.
	* @param {Number} id Id do gênero persistido.
	* @param {GenderEnum} sexo Enum do gênero.
	*/
	constructor (id, gender)
	{
		this.id = id;
		this.gender = gender;
	}
}

 module.exports = 
 {
	GenderModel,
	GenderEnum,
	GetGenderArray,
 }