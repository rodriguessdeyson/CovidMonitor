/**
 * Cria um objeto modelo do tipo centro de saúde para persistência.
 */
class HealthFacilityModel {
    
    /**
     * Inicializa um template-objeto HealthFacilityModel.
     * @param {Number} id Id do centro de saúde.
     * @param {Number} neighborhood_Id Id do bairro em que o centro de saúde está localizado.
     * @param {String} name Nome do centro de saúde.
     */
    constructor (id, neighborhood_Id, name)
    {
        this.id = id;
        this.neighborhood_Id = neighborhood_Id;
        this.name = name;
    }
}
 
 module.exports = HealthFacilityModel;