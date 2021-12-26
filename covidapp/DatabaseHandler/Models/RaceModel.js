/**
 * Enumeração para persistência.
 */
const RaceEnum = {
	YELLOW: "Amarela",
	WHITE:  "Branca",
	BLACK:  "Preta",
	BROW:   "Parda",
	INDIAN: "INDÍGENA",
}

const GetRaceArray = () =>
{
	return [ RaceEnum.YELLOW,
		RaceEnum.WHITE,
		RaceEnum.BLACK,
		RaceEnum.BROW,
		RaceEnum.INDIAN];
}

/**
 * Cria um objeto modelo do tipo raça para persistência.
 */
class RaceModel {
	/**
	 * Inicializa um template-objeto RaceModel.
	 * @param {Number} id Id da raça.
	 * @param {RaceEnum} race Enum da raça.
	 */
	constructor (id, race)
	{
		this.id = id;
		this.race = race;
	}
}

module.exports = 
{
	RaceModel,
	RaceEnum,
	GetRaceArray
}