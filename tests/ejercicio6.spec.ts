import { describe, expect, test, beforeAll} from "vitest";
import { Bird, Sparrow, Penguin, Eagle } from "../src/ejercicio6/birds";

describe("Ejercicio 6 - Herencia y Polimorfismo", () => {
  let sparrow: Sparrow;
  let penguin: Penguin;
  let eagle: Eagle;

  beforeAll(() => {
    sparrow = new Sparrow();
    penguin = new Penguin();
    eagle = new Eagle();
  });

  test("Sparrow deberia volar", () => {
    expect(sparrow.fly()).toBe("Flying...");
  });

  test("Penguin deberia nadar", () => {
    expect(penguin.swim()).toBe("Swimming...");
  });

  test("Eagle deberia volar", () => {
    expect(eagle.fly()).toBe("Flying...");
  });
});