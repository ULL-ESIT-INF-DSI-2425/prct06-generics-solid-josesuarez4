/**
 * abstract class Notify
 * Clase abstracta que define el método abstracto notify, la he creado para que las clases EmailService y ShortMessageService
 * tengan un método en común, ya que ambas clases tienen un método notify que recibe un mensaje y lo muestra por consola. Así, si queremos
 * añadir una nueva clase que permita enviar notificaciones por otro medio, solo tendríamos que heredar de Notify y definir el método notify.
 */
abstract class Notify {
  /**
   * 
   * @param message - mensaje a notificar
   */
  abstract notify(message: string): void;
}

// Class that allows notifications by email to be sent
class EmailService extends Notify {
  /**
   * 
   * @param message - mensaje a notificar
   */
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}

// Class that allows notifications by SMS to be sent
class ShortMessageService extends Notify {
  /**
   * 
   * @param message - mensaje a notificar
   */
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}

// Class that makes use of different types of services to perform notifications
class Notifier {
  /**
   * 
   * @param notificationService - servicio de notificación
   */
  constructor(private notificationService: Notify) {
  }

  /**
   * 
   * @param message - mensaje a notificar
   */
  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}

// Client code
const emailNotifier = new Notifier(new EmailService());
emailNotifier.sendNotification('Hello World!');

const shortMessageNotifier = new Notifier(new ShortMessageService());
shortMessageNotifier.sendNotification('Hello World!');