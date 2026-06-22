const catalogo = [
{
id : 1,
titulo : "O Poderoso Chefão ",
tipo : "filme",
ano :1972,
generos :["policial"," Drama"],
nota : 9.2,
assistido : false,
},

{
id : 2,
titulo : "Um Sonho de Liberdade ",
tipo : "filme",
ano :1994,
generos :"Drama",
nota : 9.3,
assistido : false,
},

{
id : 3,
titulo : "Cidadão Kane ",
tipo : "filme",
ano :1941,
generos :["Mistério"," Drama"],
nota :  8.3,
assistido : false,
},

{
id : 4,
titulo : "Batman: O Cavaleiro das Trevas ",
tipo : "filme",
ano :2008,
generos :["policial"," Drama","Ação"],
nota : 9.0,
assistido : true,
},

{
id : 5,
titulo : "A Lista de Schindler ",
tipo : "filme",
ano :1993,
generos :["História"," Drama","Biografia"],
nota : 9.0,
assistido : false,
},

{
id : 6,
titulo : "O Mágico de Oz ",
tipo : "filme",
ano :1939,
generos :[" Fantasia"," Família","Aventura"],
nota : 8.1,
assistido : false,
},
];

// b.2
console.log(catalogo);
console.log("Título do primeiro item", catalogo[0].titulo);
console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);
const terceiroFilme = catalogo[2];
if (terceiroFilme.generos && terceiroFilme.generos.length >= 2) {
    console.log("Segundo gênero do terceiro item:", terceiroFilme.generos[1]);
} else {
    console.log("Somente um gênero");
};
catalogo.forEach(filme =>{
console.log(filme.tipo)
console.log(filme.titulo)
console.log(filme.ano)
});

const titulosEmCaixaAlta = catalogo.map(filme => filme.titulo.toLocaleUpperCase());
console.log(titulosEmCaixaAlta);
const naoAssistidos = catalogo.filter(filme => filme.assistido === false);

console.log(naoAssistidos);
console.log(naoAssistidos.length);
const nota9 = catalogo.find(filme => filme.nota >= 9  );
console.log(nota9.titulo);
const mediaGeral =
  catalogo.reduce((acc, item) => acc + item.nota, 0) / catalogo.length;

console.log("\nMÉDIA GERAL:", mediaGeral.toFixed(2));

const assistidos = catalogo.filter(item => item.assistido);

const mediaAssistidos =
  assistidos.reduce((acc, item) => acc + item.nota, 0) /
  (assistidos.length || 1);

console.log("MÉDIA ASSISTIDOS:", mediaAssistidos.toFixed(2));



const temAntes2000 = catalogo.some(item => item.ano < 2000);
console.log("\nExiste item antes de 2000:", temAntes2000);

const todosTemGenero = catalogo.every(
  item => Array.isArray(item.generos) && item.generos.length > 0
);

console.log("Todos têm gênero:", todosTemGenero);



const ranking = [...catalogo]
  .sort((a, b) => b.nota - a.nota)
  .slice(0, 3);

console.log("\nTOP 3 NOTAS:");

ranking.forEach(item => {
  console.log(`${item.titulo} - ${item.nota}`);
});