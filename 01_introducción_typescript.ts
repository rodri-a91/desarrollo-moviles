console.log("hola");

function sumar(num1: any, num2: any) {
  return num1 + num2;
}
console.log(sumar(2, 4));
console.log(sumar(2, "4"));

function calcularArea(side: number) {
  return side * side;
}

const lado: number = 5;

console.log(`El área del cuadrado de lado ${lado} es ${calcularArea(lado)}`);

const persona = {
  edad: 10,
  nombre: "pepe",
};

console.log(persona.edad);
persona.edad = 25;
console.log(persona.edad);

const array = [1, 2, 3, 4, "hola"];
const arrayTipado: string[] = ["hola", "adiós"];

const array2: number[] = [1, 2, 3, 4, 5];

for (const dato of array2) {
  console.log(dato);
}

enum colores {blue, red, green, black}

function merge (valor1:string | number, valor2: string|number){
  if (typeof valor1 === "number" && typeof(valor2) === "number") {
    return valor1 + valor2
  }
  if (typeof valor1 === "string" && typeof(valor2) === "string") {
    return valor1 + valor2
  }
  throw new Error ("error tipo")
}

console.log(merge(1,2))

function procesar (browser: "firefox" | "edge") {
  console.log("valid browser")
}
procesar ("firefox")
//procesar("chrome")

//Cursor hacia una función
function calcularRectArea (base: number, altura: number) {
  return base*altura/2
}

function printResultado (result:number) {
  console.log("Resultado: " + result)
}

let calculo: Function = calcularRectArea;
console.log(calculo(2, 5))

//Función calcular área triángulo, utilizando una enum para pasarle los valores iniciales de la base y de la altura del triángulo. Función para mostrar resultado por consola

enum valores {base=100, altura=20};

function calcularAreaTrian(base: number, altura: number){
  return base * altura / 2
}
let calculo2: Function = calcularAreaTrian
console.log(calculo2(valores.base, valores.altura))

let valores2:[number,number] = [valores.base, valores.altura]
console.log(calculo2(valores2[0], valores2[1]))




function calculoAlumno (color_pelo: "negro" | "rubio", edad: 14 | 15 | 16){
  console.log(`Color de pelo: ${color_pelo} y edad ${edad}`)
}
calculoAlumno("negro", 15)