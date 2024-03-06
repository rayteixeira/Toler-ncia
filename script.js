function FazerCalculo(){
       let valueF01 = document.getElementById("faixa01").value;
       let valueF02 = document.getElementById("faixa02").value;
       let mult = document.getElementById("mult").value;
       let toler = document.getElementById("toler").value;
       let total = ((valueF01+valueF02)*mult);
       let maismenos = (total*toler);
       let menor = total - maismenos;
       let maior = total + maismenos;
       alert( "Fazendo Cálculo..." );
       document.getElementById("resist").value=(total);
       document.getElementById("tolera").value=(menor+"-"+ maior);
}