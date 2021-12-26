const NotificationStatusModel =
  require("../Models/NotificationStatusModel").NotificationStatusModel;

/**
 * Classe de acesso aos repositório da tabela NotificationsStatus.
 */
class NotificationStatusRepository {
  /**
   * Insere um status de uma notificação na base.
   * @param {NotificationStatusModel} notificationStatusModel Objeto do tipo NotificationStatusModel para persistência em base de dados.
   */
  async Insert(notificationStatusModel) {
    try {
      // Abre o pooling de conexão.
      const dbConnection = await require("../DatabaseHandler").OpenConnection();

      // Inicia a query de inserção de dados.
      const sql =
        "INSERT INTO covidapp.notificationsstatus (Notification_Id, COVIDTest_Id, NotificationOpenningDate_Id, NotificationClosingDate_Id, FirstSymptomDate, COVIDTestDate, DeathDate, Requested, Collected, Concluded, Canceled, Ignored, Death, Healed, Hospitalized, ICU, RecoverAtHome, FinalClassification) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";

      // Configura os parâmetros para evitar SQL Injection.
      const values = [
        notificationStatusModel.notification_Id,
        notificationStatusModel.covidTest_Id,
        notificationStatusModel.notificationOpeningDate_Id,
        notificationStatusModel.notificationClosingDate_Id,
        notificationStatusModel.firstSymptomDate,
        notificationStatusModel.covidTestDate,
        notificationStatusModel.deathDate,
        notificationStatusModel.requested,
        notificationStatusModel.collected,
        notificationStatusModel.concluded,
        notificationStatusModel.canceled,
        notificationStatusModel.ignored,
        notificationStatusModel.death,
        notificationStatusModel.healed,
        notificationStatusModel.hospitalized,
        notificationStatusModel.icu,
        notificationStatusModel.recoverAtHome,
        notificationStatusModel.finalClassification,
      ];

      // Executa a query.
      const response = await dbConnection.query(sql, values);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Atualiza um status de uma notificação na base.
   * @param {Number} id Id do status da notificação.
   * @param {NotificationStatusModel} notificationStatusModel Objeto do tipo NotificationStatusModel para persistência em base de dados.
   */
  async UpdateById(id, notificationStatusModel) {
    try {
      // Abre o pooling de conexão.
      const dbConnection = await require("../DatabaseHandler").OpenConnection();

      // Inicia a query de inserção de dados.
      const sql =
        "UPDATE covidapp.notificationsstatus SET Notification_Id =? COVIDTest_Id =? NotificationOpenningDate_Id =? NotificationClosingDate_Id =? FirstSymptomDate =? COVIDTestDate =? DeathDate =? Requested =? Collected =? Concluded =? Canceled =? Ignored =? Death =? Healed =? Hospitalized =? ICU =? RecoverAtHome =? FinalClassification =? WHERE Id=?";

      // Configura os parâmetros para evitar SQL Injection.
      const values = [
        notificationStatusModel.notification_Id,
        notificationStatusModel.covidTest_Id,
        notificationStatusModel.notificationOpeningDate_Id,
        notificationStatusModel.notificationClosingDate_Id,
        notificationStatusModel.firstSymptomDate,
        notificationStatusModel.covidTestDate,
        notificationStatusModel.deathDate,
        notificationStatusModel.requested,
        notificationStatusModel.collected,
        notificationStatusModel.concluded,
        notificationStatusModel.canceled,
        notificationStatusModel.ignored,
        notificationStatusModel.death,
        notificationStatusModel.healed,
        notificationStatusModel.hospitalized,
        notificationStatusModel.icu,
        notificationStatusModel.recoverAtHome,
        notificationStatusModel.finalClassification,
        id,
      ];

      // Executa a query.
      const response = await dbConnection.query(sql, values);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Atualiza um status de uma notificação na base a partir do id da notificação.
   * @param {Number} notification_Id Id da notificação.
   * @param {NotificationStatusModel} notificationStatusModel Objeto do tipo NotificationStatusModel para persistência em base de dados.
   */
  async UpdateByNotificationId(notification_Id, notificationStatusModel) {
    try {
      // Abre o pooling de conexão.
      const dbConnection = await require("../DatabaseHandler").OpenConnection();

      // Inicia a query de inserção de dados.
      const sql =
        "UPDATE covidapp.notificationsstatus SET COVIDTest_Id =? NotificationOpenningDate_Id =? NotificationClosingDate_Id =? FirstSymptomDate =? COVIDTestDate =? DeathDate =? Requested =? Collected =? Concluded =? Canceled =? Ignored =? Death =? Healed =? Hospitalized =? ICU =? RecoverAtHome =? FinalClassification =? WHERE Notification_Id=?";

      // Configura os parâmetros para evitar SQL Injection.
      const values = [
        notificationStatusModel.covidTest_Id,
        notificationStatusModel.notificationOpeningDate_Id,
        notificationStatusModel.notificationClosingDate_Id,
        notificationStatusModel.firstSymptomDate,
        notificationStatusModel.covidTestDate,
        notificationStatusModel.deathDate,
        notificationStatusModel.requested,
        notificationStatusModel.collected,
        notificationStatusModel.concluded,
        notificationStatusModel.canceled,
        notificationStatusModel.ignored,
        notificationStatusModel.death,
        notificationStatusModel.healed,
        notificationStatusModel.hospitalized,
        notificationStatusModel.icu,
        notificationStatusModel.recoverAtHome,
        notificationStatusModel.finalClassification,
        notification_Id,
      ];

      // Executa a query.
      const response = await dbConnection.query(sql, values);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async SelecNotifications() {
    try {
      // Abre o pooling de conexão.
      const dbConnection = await require("../DatabaseHandler").OpenConnection();

      // Inicia a query de inserção de dados.
      const sql =
        "SELECT notificationsstatus.Id, notificationsstatus.Notification_Id, notificationsstatus.COVIDTest_Id, notificationsstatus.NotificationOpenningDate_Id, notificationsstatus.NotificationClosingDate_Id, notificationsstatus.FirstSymptomDate,notificationsstatus.COVIDTestDate,notificationsstatus.DeathDate,notificationsstatus.Requested,notificationsstatus.Collected,notificationsstatus.Concluded,notificationsstatus.Canceled,	notificationsstatus.Ignored,notificationsstatus.Death,notificationsstatus.Healed,notificationsstatus.Hospitalized,notificationsstatus.ICU,notificationsstatus.RecoverAtHome,notificationsstatus.FinalClassification	FROM covidapp.notificationsstatus;";

      // Executa a query.
      const [response] = await dbConnection.query(sql);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = NotificationStatusRepository;
