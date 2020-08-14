let texto = "Podemos deducir, que en los bosques Posiblemente existan Perros.";
let i = 0;
let caracteres = 0;
let palabrasconP= 0;
while(i < texto.length){
    while(texto[i]== " "){
    i++;
}
    while(texto[i] = " " && i < texto.length){
    i++;
    caracteres ++;
    for  ( i  =  0 ;  i  <  (texto . length); i ++)
     if (texto[i] == "P"){
        palabrasconP ++;

    }
       
    } 

    
}

console.log('la cantidad de palabras que comienzan con "P" son: ', palabrasconP);