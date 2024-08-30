function calcular(){
    var val1 = parseFloat(document.getElementById('val1').value);
    var val2 = parseFloat(document.getElementById('val2').value);
    var val2 = parseFloat(document.getElementById('val3').value);

    /* parseFloat: converte a string recebida como argumento e a retorna como um número */
    var media = (val1 + val2 + val3) / 3;
    document.getElementById('resultado').innerText = media;

}