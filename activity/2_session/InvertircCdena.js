class InvertirCadena {
    constructor() {
      this.cadenaInvertir = '';
    }
  
    invertir() {
      if (this.cadenaInvertir === '') {
        throw new Error('La cadena está vacía. Se requiere un valor válido.');
      }
  
      const cadenaInvertida = this.cadenaInvertir.split('').reverse().join('');
      console.log(cadenaInvertida);
    }
  }
  const invertirCadena = new InvertirCadena();

// Intento 1: Ejecutar sin cambiar el valor de cadenaInvertir
try {
  invertirCadena.invertir();
} catch (error) {
  console.error(error);
}

// Cambiar el valor de cadenaInvertir y ejecutar nuevamente
invertirCadena.cadenaInvertir = 'Hola mundo';
invertirCadena.invertir();

// Acceder al método nuevoMetodo (no existente)
if (invertirCadena.nuevoMetodo) {
  invertirCadena.nuevoMetodo();
} else {
  console.log('El método nuevoMetodo no está definido.');
}
