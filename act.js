const numerosDesordenados = [];
for (let i = 0; i < 10; i++) {
  numerosDesordenados.push(Math.floor(Math.random() * 100));
}

console.log("Arreglo original:", numerosDesordenados);

// Ordenar el arreglo de menor a mayor
numerosDesordenados.sort((a, b) => a - b);

console.log("Arreglo ordenado:", numerosDesordenados);