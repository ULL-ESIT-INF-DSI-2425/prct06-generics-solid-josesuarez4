/**
 * class Bird
 */
export class Bird {
  /**
   * function move
   */
  move(): void {
    console.log("Moving...");
  }
}

/**
 * interface Fly
 */
interface Fly {
  /**
   * definition of fly
   */
  fly(): void;
}

/**
 * class Sparrow
 */
export class Sparrow extends Bird implements Fly {
  /**
   * function fly
   */
  fly(): string {
    return "Flying...";
  }
}

/**
 * class Penguin
 */
export class Penguin extends Bird {
  /**
   * function swim
   */
  swim(): string {
    return "Swimming...";
  }
}

/**
 * class Eagle
 */
export class Eagle extends Bird implements Fly {
  /**
   * function fly
   */
  // fly(): void {
  //   console.log("Flying...");
  // }
  fly(): string {
    return "Flying...";
  }
}

let sparrow = new Sparrow();
let penguin = new Penguin();
let eagle = new Eagle();
sparrow.fly();
penguin.swim();
eagle.fly();