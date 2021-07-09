const submeterformulario = () => {
    const rangeinicial = document.getElementById("rangeinicial").value;
    const rangefinal = document.getElementById("rangefinal").value;
    const minhaaposta = document.getElementById("minhaaposta").value;

    realizarsorteio(+rangeinicial, +rangefinal, +minhaaposta);
}

const realizarsorteio = (rangeinicial, rangefinal, minhaaposta) => {
 
    if (!rangeinicial){
     alert ('Informe o range inicial');
     return; 
 }
 
 
    if (!rangefinal){
    alert ('Informe o range final');
    return;
}


    if (!minhaaposta){
    alert ('Informe a sua aposta');
    return;
}
 
const numerosorteado = novosorteio(rangeinicial, rangefinal);

if (numerosorteado ===  minhaaposta) {
    alert ('Parabéns, você acertou!!');
    return;
}

alert(`Errou! O número sorteado era ${numerosorteado}`);

}

const novosorteio = (rangeinicial, rangefinal) => {
    return (Math.floor((Math.random() * 
    (rangefinal - rangeinicial + 1)) 
    + rangeinicial));
}

