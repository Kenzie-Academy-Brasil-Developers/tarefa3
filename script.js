// Variáveis para aplicar os resultados do teste. Você deverá categoriza-las como let/const, mas não deve alterar os valores.

let gender =  process.argv [2]; // Genero 
let height = process.argv [3]; // Altura
let barReps = process.argv[4]; // Repetições com barra
let barSeconds = process.argv[5]; // Tempo das repetições com barra 
let abs = process.argv[6]; // Abdominais
let runDistance = process.argv[7]; // Distância da corrida
let runTime = process.argv[8]; // Tempo da corrida
let swimDistance = process.argv[9]; // Distância da natação
let swimTime = process.argv[10]; // Tempo da natação
let diveTime = process.argv[11]; // Tempo de mergulho

let passe = false;


/*
    Importante:
    Se o genero (gender) for masculino, utilize a palavra "male"
    Se o genero (gender) for feminino, utilize a palavra "female"

    Sugestão para começar:
    if (gender === "male")
    ...
*/
// **sua lógica a partir daqui**
if (gender === "male"){
    height >= 1.70; 
    barReps >= 6; 
    barSeconds >= 15;
    abs >= 41;
    runDistance >= 3000;
    runTime >= 720; 
    swimDistance >= 100;
    swimTime >= 60;
    diveTime >= 15;
}
if (gender === "female"){
    height >= 1.60; 
    barReps >= 4; 
    barSeconds >= 12;
    abs >= 41;
    runDistance >= 4000;
    runTime >= 800; 
    swimDistance >= 100;
    swimTime >= 60;
    diveTime >= 25; }

    let acertos = 0;

 if (gender === "male") {
    if (height >= 1.70) acertos++;
    if (barReps >= 5) acertos++;
    if (barSeconds >= 14) acertos++;
    if (abs >= 41) acertos++;
    if (runDistance >= 3000) acertos++;
    if (runTime <= 770) acertos++;
    if (swimDistance <= 720) acertos++;
    if (swimTime <= 65) acertos++;
    if (diveTime >= 15) acertos++;
  }
  
  if (gender === "female") {
    if (height >= 1.60) acertos++;
    if (barReps >= 4) acertos++;
    if (barSeconds >= 12) acertos++;
    if (abs >= 41) acertos++;
    if (runDistance >= 4000) acertos++;
    if (runTime >= 800) acertos++;
    if (swimDistance >= 100) acertos++;
    if (swimTime >= 60) acertos++;
    if (diveTime >= 25) acertos++;
  }

  let passed = acertos >= 9;





/*
    Seu código deve conter apenas UM console.log, e ele deve ser o abaixo.
    Não altere nada pra baixo dessa linha, senão os testes não irão funcionar.
*/
console.log(passed);
