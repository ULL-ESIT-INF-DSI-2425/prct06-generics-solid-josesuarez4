// Separate interfaces for printing and scanning
interface Printable {
  print(): void;
}

interface Scannable {
  scan(): void;
}

// Printer implements only Printable
class Printer1 implements Printable {
  print(): void {
    console.log('Printing...');
  }
}

// Scanner implements only Scannable
class Scanner1 implements Scannable {
  scan(): void {
    console.log('Scanning...');
  }
}

// PrinterScanner implements both Printable and Scannable
class PrinterScanner1 implements Printable, Scannable {
  print(): void {
    console.log('Printing...');
  }

  scan(): void {
    console.log('Scanning...');
  }
}

// Client code
const printer1 = new Printer();
printer.print(); // Printing

const scanner1 = new Scanner();
scanner.scan(); // Scanning

const printerScanner1 = new PrinterScanner();
printerScanner.print(); // Printing
printerScanner.scan(); // Scanning
