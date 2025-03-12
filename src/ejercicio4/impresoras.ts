// interface PrintableScannable {
//   print(): void
//   scan(): void
// }

class Printer {
  print(): void {
    console.log('Printing...')
  }

}

class Scanner  {
  scan(): void {
    console.log('Scanning...')
  }
}

class PrinterScanner {
  private printer: Printer;
  private scanner: Scanner;

  constructor() {
    this.printer = new Printer();
    this.scanner = new Scanner();
  }

  print(): void {
    this.printer.print();
  }

  scan(): void {
    this.scanner.scan();
  }
}

// Client code
const printer = new Printer();
// Printing
printer.print();

const scanner = new Scanner();
// Scanning
scanner.scan();

const printerScanner = new PrinterScanner();
// Printing
printerScanner.print();
// Scanning
printerScanner.scan();