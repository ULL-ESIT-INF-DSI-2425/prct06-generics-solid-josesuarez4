/**
 * Interfaz Cancion
 * @param - nombre
 * @param - duracion
 * @param - generos
 * @param - single
 * @param - reproducciones
 */
export interface Cancion {
  nombre: string;
  duracion: number; // en segundos
  generos: string[];
  single: boolean;
  reproducciones: number;
}
/**
 * Clase Disco
 */

class Songs {
  constructor(private songs: Cancion[]) {
  }
  length(): number {
    return this.songs.length;
  }
  reduce(callback: (total: number, cancion: Cancion) => number, initialValue: number): number {
    return this.songs.reduce(callback, initialValue);
  }
  find(callback: (cancion: Cancion) => boolean): Cancion | undefined {
    return this.songs.find(callback);
  }
}
export class Disco {
  nombre: string;
  anoPublicacion: number;
  canciones: Songs;

  /**
   * 
   * @param - nombre 
   * @param - anoPublicacion 
   * @param - canciones 
   */
  constructor(nombre: string, anoPublicacion: number, canciones: Songs) {
    this.nombre = nombre;
    this.anoPublicacion = anoPublicacion;
    this.canciones = canciones;
  }
  /**
   * 
   * @returns numero de canciones
   */
  calcularNumeroCanciones(): number {
    return this.canciones.length();
  }

  /**
   * 
   * @returns duracion total de las canciones
   */
  calcularDuracionTotal(): number {
    return this.canciones.reduce((total, cancion) => total + cancion.duracion, 0);
  }

  /**
   * 
   * @returns numero de reproducciones totales
   */
  calcularReproduccionesTotales(): number {
    return this.canciones.reduce((total, cancion) => total + cancion.reproducciones, 0);
  }
}

/**
 * Clase Artista
 */
// export class Artista {
//   nombre: string;
//   oyentesMensuales: number;
//   discografia: Disco[];

//   /**
//    * 
//    * @param - nombre 
//    * @param - oyentesMensuales 
//    * @param - discografia 
//    */
//   constructor(nombre: string, oyentesMensuales: number, discografia: Disco[]) {
//     this.nombre = nombre;
//     this.oyentesMensuales = oyentesMensuales;
//     this.discografia = discografia;
//   }
// }

/**
 * Clase BibliotecaMusical
 */
export class BibliotecaMusical {
  artistas: Artista[];

  /**
   * 
   * @param - artistas 
   */
  constructor(artistas: Artista[]) {
    this.artistas = artistas;
  }

  mostrarInformacion(): void {
    console.table(this.artistas.map(artista => ({
      Nombre: artista.nombre,
      'Oyentes Mensuales': artista.oyentesMensuales,
      'Número de Discos': artista.discografia.obtenerItems().length
    })));
  }

  /**
   * 
   * @param - nombre 
   * @returns artista
   */
  buscarArtista(nombre: string): Artista | undefined {
    return this.artistas.find(artista => artista.nombre.toLowerCase() === nombre.toLowerCase());
  }

  /**
   * 
   * @param - nombre 
   * @returns disco
   */
  buscarDisco(nombre: string): Disco | undefined {
    for (const artista of this.artistas) {
      const disco = artista.discografia.obtenerItems().find(item => item instanceof Disco && item.nombre.toLowerCase() === nombre.toLowerCase()) as Disco;
      if (disco) return disco;
    }
    return undefined;
  }

  /**
   * 
   * @param - nombre 
   * @returns cancion
   */
  buscarCancion(nombre: string): Cancion | undefined {
    for (const artista of this.artistas) {
      for (const item of artista.discografia.obtenerItems()) {
        if (item instanceof Disco) {
          const cancion = item.canciones.find(cancion => cancion.nombre.toLowerCase() === nombre.toLowerCase());
          if (cancion) return cancion;
        } else if (item instanceof Single && item.cancion.nombre.toLowerCase() === nombre.toLowerCase()) {
          return item.cancion;
        }
      }
    }
    return undefined;
  }
}

/**
 * Clase Single
 */
export class Single {
  nombre: string;
  anoPublicacion: number;
  cancion: Cancion;

  constructor(nombre: string, anoPublicacion: number, cancion: Cancion) {
    this.nombre = nombre;
    this.anoPublicacion = anoPublicacion;
    this.cancion = cancion;
  }

  calcularDuracionTotal(): number {
    return this.cancion.duracion;
  }

  calcularReproduccionesTotales(): number {
    return this.cancion.reproducciones;
  }
}

/**
 * Clase Discografia
 */
export class Discografia<T> {
  private items: T[];

  constructor(items: T[]) {
    this.items = items;
  }

  agregarItem(item: T): void {
    this.items.push(item);
  }

  obtenerItems(): T[] {
    return this.items;
  }

  calcularDuracionTotal(): number {
    return this.items.reduce((total, item) => {
      if (item instanceof Disco) {
        return total + item.calcularDuracionTotal();
      } else if (item instanceof Single) {
        return total + item.calcularDuracionTotal();
      }
      return total;
    }, 0);
  }

  calcularReproduccionesTotales(): number {
    return this.items.reduce((total, item) => {
      if (item instanceof Disco) {
        return total + item.calcularReproduccionesTotales();
      } else if (item instanceof Single) {
        return total + item.calcularReproduccionesTotales();
      }
      return total;
    }, 0);
  }
}

/**
 * Clase Artista
 */
export class Artista {
  nombre: string;
  oyentesMensuales: number;
  discografia: Discografia<Disco | Single>;

  constructor(nombre: string, oyentesMensuales: number, discografia: Discografia<Disco | Single>) {
    this.nombre = nombre;
    this.oyentesMensuales = oyentesMensuales;
    this.discografia = discografia;
  }
}

const cancion1: Cancion = { nombre: "Cancion 1", duracion: 200, generos: ["Pop"], single: true, reproducciones: 1000 };
const cancion2: Cancion = { nombre: "Cancion 2", duracion: 180, generos: ["Rock"], single: false, reproducciones: 500 };
const cancion3: Cancion = { nombre: "Cancion 3", duracion: 220, generos: ["Pop"], single: true, reproducciones: 1500 };
let canciones: Songs = new Songs([cancion1, cancion2, cancion3]);
const disco1 = new Disco("Disco 1", 2020, canciones);
const single1 = new Single("Single 1", 2021, cancion1);
let discografiaArtista: Discografia<Disco | Single> = new Discografia<Disco | Single>([disco1, single1]);
const artista1 = new Artista("Artista 1", 1000000, discografiaArtista);
const biblioteca = new BibliotecaMusical([artista1]);

biblioteca.mostrarInformacion();
console.table(biblioteca.buscarArtista("Artista 1"));
console.table(biblioteca.buscarDisco("Disco 1"));
console.table(biblioteca.buscarCancion("Cancion 1"));
console.log(biblioteca.buscarCancion("Cancion 2"));
console.log(biblioteca.buscarCancion("Cancion 3"));