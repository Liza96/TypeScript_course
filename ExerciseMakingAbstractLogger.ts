/* Блок5_17
Задача:

Необходимо реализовать абстрактный класс Logger с 2-мя методами
абстрактным - log(message): void
printDate - выводящий в log дату
К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
выводящий сначала дату, а потом заданное сообщение
*/

abstract class Logger {
    abstract log(message: string): void;

    printDate(): void {
      const currentDate = new Date().toLocaleString();
      this.log(`Дата: ${currentDate}`);
    }
  }
  
  class ExtendedLogger extends Logger {
    log(message: string): void {
      console.log(message);
    }
  
    logWithDate(message: string): void {
      const currentDate = new Date().toLocaleString();
      this.log(`${currentDate}: ${message}`); 
    }
  }
  
  const logger = new ExtendedLogger();
  
  logger.printDate();
  
  logger.logWithDate('Запись в лог с датой');