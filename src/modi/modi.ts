/**
 * interface Arithmeticable
 */
interface Arithmeticable<T> {
  /**
   * 
   * @param numero - numero complejo
   */
  add(numero: T): T;
  /**
   * 
   * @param numero - numero complejo
   */
  substract(numero: T): T;
  /**
   * 
   * @param numero - numero complejo
   */
  multiply(numero: T): T;
  /**
   * 
   * @param numero - numero complejo
   */
  divide(numero: T): T;
}

/**
 * clase ArithmeticableCollection
 */
export class ArithmeticableCollection<T extends Arithmeticable<T>> {
  private complejoCollection_: T[];
  /**
   * Constructor
   * @param numero - Numero complejo
   */
  constructor(private numero: T[]) {
    this.complejoCollection_ = numero;
  }
  /**
   * 
   * @param elemento - elemento a añadir al array
   */
  addArithmeticable(elemento: T): void {
    this.complejoCollection_.push(elemento);
  }

  /**
   * 
   * @param index - posicion del array
   * @returns elemento en la posicion del array
   */
  getArithmeticable(index: number): T {
    return this.complejoCollection_[index];
  }

  /**
   * 
   * @returns devuelve el tamaño del array
   */
  getNumberOfArithmeticables() : number {
    return this.complejoCollection_.length;
  }
  
}

/**
 * clase ComplexNumber
 */
export class ComplexNumber implements Arithmeticable<ComplexNumber> {
  /**
   * Constructor
   * @param real_ - numero real
   * @param imaginario_ - numero imaginario
   */
  constructor(private real_: number, private imaginario_: number) {
  }

  /**
   * @returns numero real
   */
  get real() {
    return this.real_;
  }
  
  /**
   * setter numero real
   */
  set real(numero: number) {
    this.real_ = numero;
  }

  /**
   * getter imaginario
   * @returns numero imaginario
   */
  get imaginario() {
    return this.imaginario_;
  }

  /**
   * setter imaginario
   */
  set imaginario(numero: number) {
    this.imaginario_ = numero;
  }

  /**
   * Suma numeros complejos
   * @param numero - numero complejo
   * @returns suma de los números complejos
   */
  add(numero: ComplexNumber): ComplexNumber {
    let numReal = this.real + numero.real;
    let numImaginario = this.imaginario + numero.imaginario;
    return new ComplexNumber(numReal, numImaginario);
  }

  /**
   * Resta numeros complejos
   * @param numero - numero complejo
   * @returns resta de los números complejos
   */
  substract(numero: ComplexNumber): ComplexNumber {
    let numReal = this.real - numero.real;
    let numImaginario = this.imaginario + numero.imaginario;
    return new ComplexNumber(numReal, numImaginario);
  }

  /**
   * Multiplicación numeros complejos
   * @param numero - numero complejo
   * @returns multiplicación de los números complejos
   */
  multiply(numero: ComplexNumber) : ComplexNumber {
    let numReal = this.real * numero.real;
    let numImaginario = this.imaginario * numero.imaginario;
    return new ComplexNumber(numReal, numImaginario);
  }

  /**
   * division numeros complejos
   * @param numero - numero complejo
   * @returns division de los números complejos
   */
  divide(numero: ComplexNumber) : ComplexNumber {
    let numReal = this.real / numero.real;
    let numImaginario = this.imaginario / numero.imaginario;
    return new ComplexNumber(numReal, numImaginario);
  }
}