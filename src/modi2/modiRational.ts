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
    // if (numero.imaginario === 0) {
    //   throw new Error("No se puede dividir por cero");
    // }
    let numReal = this.real / numero.real;
    let numImaginario = this.imaginario / numero.imaginario;
    return new ComplexNumber(numReal, numImaginario);
  }
}

export class RationalNumber implements Arithmeticable<RationalNumber> {
  constructor(private numerador_: number, private denominador_: number) {
    if (denominador_ === 0) {
      throw new Error("El denominador no puede ser 0");
    }
  }

  /**
   * Getter numerador
   * @returns numerador
   */
  get numerador(): number {
    return this.numerador_;
  }

  /**
   * Setter numerador
   * @param numerador - numerador
   */
  set numerador(numerador: number) {
    this.numerador_ = numerador;
  }

  /**
   * Getter denominador
   * @returns denominador
   */
  get denominador(): number {
    return this.denominador_;
  }

  /**
   * Setter denominador
   * @param denominador - denominador
   */
  set denominador(denominador: number) {
    if (denominador === 0) {
      throw new Error("El denominador no puede ser 0");
    }
    this.denominador_ = denominador;
  }

  /**
   * Suma de números racionales
   * @param numero - número racional
   * @returns suma de los números racionales
   */
  add(numero: RationalNumber): RationalNumber {
    const num = this.numerador * numero.denominador + numero.numerador * this.denominador;
    const den = this.denominador * numero.denominador;
    return new RationalNumber(num, den);
  }

  /**
   * Resta de números racionales
   * @param numero - número racional
   * @returns resta de los números racionales
   */
  substract(numero: RationalNumber): RationalNumber {
    const num = this.numerador * numero.denominador - numero.numerador * this.denominador;
    const den = this.denominador * numero.denominador;
    return new RationalNumber(num, den);
  }

  /**
   * Multiplicación de números racionales
   * @param numero - número racional
   * @returns multiplicación de los números racionales
   */
  multiply(numero: RationalNumber): RationalNumber {
    const num = this.numerador * numero.numerador;
    const den = this.denominador * numero.denominador;
    return new RationalNumber(num, den);
  }

  /**
   * División de números racionales
   * @param numero - número racional
   * @returns división de los números racionales
   */
  divide(numero: RationalNumber): RationalNumber {
    if (numero.numerador === 0) {
      throw new Error("No se puede dividir por un número racional con numerador 0");
    }
    const num = this.numerador * numero.denominador;
    const den = this.denominador * numero.numerador;
    return new RationalNumber(num, den);
  }
}

export class Adapter extends ComplexNumber {
  constructor(private rational: RationalNumber) {
    let nuevoReal = rational.numerador / rational.denominador;
    let nuevoImaginario = 0;
    super(nuevoReal, nuevoImaginario);
  }

  // getData(): ComplexNumber {
  //   let numReal = this.rational.numerador / this.rational.denominador;
  //   let numImaginario = 0;
  //   return new ComplexNumber(numReal, numImaginario);
  // }

}