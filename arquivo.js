let inventario = ["Espada" , "Escudo", "Poção de Vida"]; // Exercício 1: Criando Array
console.log(`. Após criar o inventário, imprimos o segundo item: ${inventario[1]}`); // Exercício 2: Imprimindo segundo elemento
inventario.push("Arco e Flecha"); // Exercício 3: Adicionando elemento no final
console.log(inventario);
inventario.pop(); // Exercício 4: Removendo elemento no final
console.log(inventario);
inventario.unshift("Mapa"); // Exercício 5: Adicionando elemento ao inicio
console.log(inventario);

console.log("Exercício 7: Itens do inventário") // Ecercício 7: Iteração (Loop)
for (let i = 0; i < inventario.length; i++) {
     console.log(`. ${inventario[i]}.`);
}

let personagem = {
    nome: "Ronin-Face",
    nivel: 5,
    classe: "Guerreiro"
}
