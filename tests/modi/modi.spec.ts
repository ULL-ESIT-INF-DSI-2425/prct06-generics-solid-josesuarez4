import {describe, expect, test, beforeAll} from "vitest"
import {ComplexNumber, ArithmeticableCollection, } from "../../src/modi/modi"

describe ("Pruebas ArithmeticableCollection", () => {
  let numComplejos: ArithmeticableCollection<ComplexNumber>;
  let num1: ComplexNumber;
  let num2: ComplexNumber;
  let num3: ComplexNumber;
  let num4: ComplexNumber;
  let num5: ComplexNumber;

  beforeAll ( () => {
    num1 = new ComplexNumber(0, 3);
    num2 = new ComplexNumber(-3, 7);
    num3 = new ComplexNumber(1, 9);
    num4 = new ComplexNumber(-5, -6);
    num5 = new ComplexNumber(2, 27);
    num1.real = 2;
    num1.imaginario = 5;


    numComplejos = new ArithmeticableCollection<ComplexNumber>([]);
    numComplejos.addArithmeticable(num1);
    numComplejos.addArithmeticable(num2);
    numComplejos.addArithmeticable(num3);
    numComplejos.addArithmeticable(num4);
    numComplejos.addArithmeticable(num5);
  });
  test("test suma: ", () => {
    // expect(numComplejos.getArithmeticable(0).add(numComplejos.getArithmeticable(1))).toBe(new ComplexNumber(-1, 12));
    // expect(numComplejos.getArithmeticable(2).add(numComplejos.getArithmeticable(1))).toBe(new ComplexNumber(-2, 16));
    const resultado = numComplejos.getArithmeticable(0).add(numComplejos.getArithmeticable(1));
    const resultado1 = numComplejos.getArithmeticable(3).add(numComplejos.getArithmeticable(0));
    expect(resultado.real).toBe(-1);
    expect(resultado.imaginario).toBe(12);
    expect(resultado1.real).toBe(-3);
    expect(resultado1.imaginario).toBe(-1);
  });
  test("test resta: ", () => {
    // expect(numComplejos.getArithmeticable(0).substract(numComplejos.getArithmeticable(3))).toBe(new ComplexNumber(7, -1));
    // expect(numComplejos.getArithmeticable(2).substract(numComplejos.getArithmeticable(1))).toBe(new ComplexNumber(4, 2));
    const resultado = numComplejos.getArithmeticable(3).substract(numComplejos.getArithmeticable(2));
    const resultado1 = numComplejos.getArithmeticable(1).substract(numComplejos.getArithmeticable(0));
    expect(resultado.real).toBe(-6);
    expect(resultado.imaginario).toBe(3);
    expect(resultado1.real).toBe(-5);
    expect(resultado1.imaginario).toBe(12);
  });
  test("test multiplicacion: ", () => {
    // expect(numComplejos.getArithmeticable(2).multiply(numComplejos.getArithmeticable(2))).toBe(new ComplexNumber(1, 81));
    // expect(numComplejos.getArithmeticable(0).multiply(numComplejos.getArithmeticable(1))).toBe(new ComplexNumber(-6, 35));
    const resultado = numComplejos.getArithmeticable(2).multiply(numComplejos.getArithmeticable(2));
    const resultado1 = numComplejos.getArithmeticable(3).multiply(numComplejos.getArithmeticable(0));
    expect(resultado.real).toBe(1);
    expect(resultado.imaginario).toBe(81);
    expect(resultado1.real).toBe(-10);
    expect(resultado1.imaginario).toBe(-30);
  });
  test("test division: ", () => {
    // expect(numComplejos.getArithmeticable(3).divide(numComplejos.getArithmeticable(0))).toBe(new ComplexNumber(-2, -1));
    // expect(numComplejos.getArithmeticable(1).divide(numComplejos.getArithmeticable(2))).toBe(new ComplexNumber(-3, 0));
    const resultado = numComplejos.getArithmeticable(0).divide(numComplejos.getArithmeticable(1));
    const resultado1 = numComplejos.getArithmeticable(4).divide(numComplejos.getArithmeticable(2));
    expect(resultado.real).toBeCloseTo(-0.66666666);
    expect(resultado.imaginario).toBeCloseTo(0.7142);
    expect(resultado1.real).toBeCloseTo(2);
    expect(resultado1.imaginario).toBeCloseTo(3);

  });
  test("getter y setter: ", () => {
    expect(num1.real).toBe(2);
    expect(num1.imaginario).toBe(5);
    expect(num2.real).toBe(-3);
    expect(num2.imaginario).toBe(7);
    expect(numComplejos.getNumberOfArithmeticables()).toBe(5);
  });
  

});