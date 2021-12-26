/**
 * Enumeraçãoes das faixas de idades fixas.
 */
const AgeRangeEnum = {
	Under09: "Até 9 anos",
	From10to19: "10 a 19 anos",
	From20to29: '20 a 29 anos',
	From30to39: '30 a 39 anos',
	From40to49: '40 a 49 anos',
	From50to59: '50 a 59 anos',
	From60to69: '60 a 69 anos',
	From70to79: '70 a 79 anos',
	From80to89: '80 a 89 anos',
	Above89: '90 anos ou mais',
}

const GetAgeRangeArray = () =>
{
	return [ AgeRangeEnum.Under09,
	AgeRangeEnum.From10to19,
	AgeRangeEnum.From20to29,
	AgeRangeEnum.From30to39,
	AgeRangeEnum.From40to49,
	AgeRangeEnum.From50to59,
	AgeRangeEnum.From60to69,
	AgeRangeEnum.From70to79,
	AgeRangeEnum.From80to89,
	AgeRangeEnum.Above89 ];
}

/**
 * Cria um objeto modelo do tipo faixa etária para persistência.
 */
class AgeRangeModel {

	/**
	 * Inicializa um template-objeto AgeRangeModel.
	 * @param {Number} id Id de identificação da Faixa de idade da notificação.
	 * @param {AgeRangeEnum} ageRange Faixa de idade da notificação.
	 */
	constructor(id, ageRange)
	{
		this.id = id;
		this.age = ageRange;
	}
}

module.exports = 
{
	AgeRangeModel,
	AgeRangeEnum,
	GetAgeRangeArray
}