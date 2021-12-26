/**
 * Enumeração para persistência.
 */
const ClassificationEnum = {
  /**
   * Caso descartado.
   */
  DESCARTADO: "DESCARTADO",

  /**
   * Caso confirmado em laboratório.
   */
  CONFIRMADO_LABORATORIAL: "CONFIRMADO_LABORATORIAL",

  /**
   * Caso confirmado em análise clínica.
   */
  CONFIRMACAO_CLINICO_EPIDEMIOLOGICO: "CONFIRMACAO_CLINICO_EPIDEMIOLOGICO",

  /**
   * Informação desconhecida.
   */
  NÃO_INFORMADO: "NÃO_INFORMADO",
};

/**
 * Cria um objeto modelo do tipo status da notififcação para persistência.
 */
class NotificationStatusModel {
  /**
   *  Inicializa um template-objeto NotificationStatusModel.
   * @param {Number} id Id do status da notificação.
   * @param {Number} notification_Id Id da notificação.
   * @param {Number} covidTest_Id Id do tipo de teste feito para gerar a notificação.
   * @param {Number} notificationOpeningDate_Id Id da data de abertura do caso.
   * @param {Number|null} notificationClosingDate_Id Id da data de encerramento do caso.
   * @param {Date} firstSymptomDate Data do primeiro sintoma.
   * @param {Date|null} covidTestDate Data do teste.
   * @param {Date|null} deathDate Data do óbito.
   * @param {Date} requested Data em que o exame fora solicitado.
   * @param {Boolean} collected Flag de indicação que foi coletado para exame.
   * @param {Boolean} concluded Flag de indicação de conclusão do caso.
   * @param {Boolean} canceled Flag de indicação de caso canceledo.
   * @param {Boolean} ignored Flag de indicação de caso ignorado.
   * @param {Boolean} death Flag de indicação de óbito no caso.
   * @param {Boolean} healed Flag de indicação de cura do caso.
   * @param {Boolean} hospitalized Flag de indicação de internado.
   * @param {Boolean} icu Flag de indicação de internado em UTI.
   * @param {Boolean} recoverAtHome Flag de indicação de tratamento em casa.
   * @param {ClassificationEnum} finalClassification Classificação final do teste.
   */
  constructor(
    id,
    notification_Id,
    covidTest_Id,
    notificationOpeningDate_Id,
    notificationClosingDate_Id,
    firstSymptomDate,
    covidTestDate,
    deathDate,
    requested,
    collected,
    concluded,
    canceled,
    ignored,
    death,
    healed,
    hospitalized,
    icu,
    recoverAtHome,
    finalClassification
  ) {
    this.id = id;
    this.notification_Id = notification_Id;
    this.covidTest_Id = covidTest_Id;
    this.notificationOpeningDate_Id = notificationOpeningDate_Id;
    this.notificationClosingDate_Id = notificationClosingDate_Id;
    this.firstSymptomDate = firstSymptomDate;
    this.covidTestDate = covidTestDate;
    this.deathDate = deathDate;
    this.requested = requested;
    this.collected = collected;
    this.concluded = concluded;
    this.canceled = canceled;
    this.ignored = ignored;
    this.death = death;
    this.healed = healed;
    this.hospitalized = hospitalized;
    this.icu = icu;
    this.recoverAtHome = recoverAtHome;
    this.finalClassification = finalClassification;
  }
}

module.exports = {
  NotificationStatusModel,
  ClassificationEnum,
};
