import {describe, expect, test, beforeAll} from "vitest"
import {RationalNumber, ArithmeticableCollection, Adapter, ComplexNumber, } from "../../src/modi2/modiRational"


describe ("Pruebas ArithmeticableCollection", () => {
  let numRationals: ArithmeticableCollection<RationalNumber>;
  let combinacion: ArithmeticableCollection<ComplexNumber>;
  let num1: RationalNumber;
  let num2: RationalNumber;
  let num3: RationalNumber;
  let num4: RationalNumber;
  let num5: RationalNumber;
  let num6: RationalNumber;
  let numcom1: ComplexNumber;
  let numcom2: ComplexNumber;

  beforeAll ( () => {
    num1 = new RationalNumber(0, 3);
    num2 = new RationalNumber(-3, 7);
    num3 = new RationalNumber(1, 9);
    num4 = new RationalNumber(-5, -6);
    num5 = new RationalNumber(2, 27);
    num6 = new RationalNumber(8, 2);
    numcom1 = new ComplexNumber(-10, 12);
    numcom2 = new ComplexNumber(15, 17);
    num1.numerador = 2;
    num1.denominador = 5;

    numRationals = new ArithmeticableCollection<RationalNumber>([]);
    numRationals.addArithmeticable(num1);
    numRationals.addArithmeticable(num2);
    numRationals.addArithmeticable(num3);
    numRationals.addArithmeticable(num4);
    numRationals.addArithmeticable(num5);

    combinacion = new ArithmeticableCollection<ComplexNumber>([]);
    combinacion.addArithmeticable(numcom1);
    combinacion.addArithmeticable(numcom2);
    combinacion.addArithmeticable(new Adapter(num1));
    combinacion.addArithmeticable(new Adapter(num2));
    combinacion.addArithmeticable(new Adapter(num3));
  });

  test("Suma racionales", () => {
    const resultado = numRationals.getArithmeticable(0).add(numRationals.getArithmeticable(1));
    const resultado1 = numRationals.getArithmeticable(3).add(numRationals.getArithmeticable(0));
    expect(resultado.numerador).toBe(-1);
    expect(resultado.denominador).toBe(35);
    expect(resultado1.numerador).toBe(-37);
    expect(resultado1.denominador).toBe(-30);
  });

  test("Resta racionales", () => {
    const resultado = numRationals.getArithmeticable(2).substract(numRationals.getArithmeticable(1));
    const resultado1 = numRationals.getArithmeticable(1).substract(numRationals.getArithmeticable(3));
    expect(resultado.numerador).toBe(34);
    expect(resultado.denominador).toBe(63);
    expect(resultado1.numerador).toBe(53);
    expect(resultado1.denominador).toBe(-42);
  });

  test("Multiplicación racionales", () => { 
    const resultado = numRationals.getArithmeticable(2).multiply(numRationals.getArithmeticable(2));
    const resultado1 = numRationals.getArithmeticable(3).multiply(numRationals.getArithmeticable(0));
    expect(resultado.numerador).toBe(1);
    expect(resultado.denominador).toBe(81);
    expect(resultado1.numerador).toBe(-10);
    expect(resultado1.denominador).toBe(-30);
  });

  test("División racionales", () => {
    const resultado = numRationals.getArithmeticable(3).divide(numRationals.getArithmeticable(0));
    const resultado1 = numRationals.getArithmeticable(1).divide(numRationals.getArithmeticable(2));
    expect(resultado.numerador).toBe(-25);
    expect(resultado.denominador).toBe(-12);
    expect(resultado1.numerador).toBe(-27);
    expect(resultado1.denominador).toBe(7);
  });

  test("Suma complejos y racionales", () => {
    const resultado = numcom1.add(new Adapter(num1));
    const resultado1 = numcom2.add(new Adapter(num3));
    expect(resultado.real).toBe(-9.6);
    expect(resultado.imaginario).toBe(12);
    expect(resultado1.real).toBeCloseTo(15.1111);
    expect(resultado1.imaginario).toBe(17);
  });

  test("Resta complejos y racionales", () => {
    const resultado = numcom2.substract(new Adapter(num2));
    const resultado1 = numcom1.substract(new Adapter(num4));
    expect(resultado.real).toBeCloseTo(15.4286);
    expect(resultado.imaginario).toBe(17);
    expect(resultado1.real).toBeCloseTo(-10.833);
    expect(resultado1.imaginario).toBe(12);
  });

  test("Multiplicación complejos y racionales", () => {
    const resultado = numcom2.multiply(new Adapter(num3));
    const resultado1 = numcom1.multiply(new Adapter(num4));
    expect(resultado.real).toBeCloseTo(1.6666);
    expect(resultado.imaginario).toBe(0);
    expect(resultado1.real).toBeCloseTo(-8.3333);
    expect(resultado1.imaginario).toBe(0);
  });

  test("División complejos y racionales", () => {
    const resultado = numcom1.divide(new Adapter(num6));
    const resultado1 = numcom2.divide(new Adapter(num4));
    expect(resultado.real).toBeCloseTo(-2.5);
    // expect(resultado.imaginario).toBe(-10);
    expect(resultado1.real).toBeCloseTo(18);
    // expect(resultado1.imaginario).toBe(0);
  });

});