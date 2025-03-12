class Pelicula {
  private _nombre: string;
  private _ano: number;
  private _director: string;
  private _duracion: number;

  constructor(nombre: string, ano: number, director: string, duracion: number) {
    this._nombre = nombre;
    this._ano = ano;
    this._director = director;
    this._duracion = duracion;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(nombre: string) {
    this._nombre = nombre;
  }

  get ano(): number {
    return this._ano;
  }

  set ano(ano: number) {
    this._ano = ano;
  }

  get director(): string {
    return this._director;
  }

  set director(director: string) {
    this._director = director;
  }

  get duracion(): number {
    return this._duracion;
  }

  set duracion(duracion: number) {
    this._duracion = duracion;
  }
}

interface Streamable {
  BusquedaNombre(nombre: string): Pelicula[];
  BusquedaAno(ano: number): Pelicula[];
  BusquedaDirector(director: string): Pelicula[];
}

abstract class BasicStreamableCollection implements Streamable {
  private _peliculas: Pelicula[];
  
  constructor(peliculas: Pelicula[]) {
    this._peliculas = peliculas;
  }

  BusquedaNombre(nombre: string): Pelicula[] {
    // return this._peliculas.filter(pelicula => pelicula.nombre === nombre);
    let result: Pelicula[] = [];  
    this._peliculas.forEach(pelicula => {
      if (pelicula.nombre === nombre) {
        result.push(pelicula);
      }
    });
    return result;
  }

  BusquedaAno(ano: number): Pelicula[] {
    // return this._peliculas.filter(pelicula => pelicula.ano === ano);
    let result: Pelicula[] = [];  
    this._peliculas.forEach(pelicula => {
      if (pelicula.ano === ano) {
        result.push(pelicula);
      }
    });
    return result;
  }

  BusquedaDirector(director: string): Pelicula[] {
    // return this._peliculas.filter(pelicula => pelicula.director === director);
    let result: Pelicula[] = [];  
    this._peliculas.forEach(pelicula => {
      if (pelicula.director === director) {
        result.push(pelicula);
      }
    });
    return result;
  }
}