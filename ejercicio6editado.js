let texto = "Podemos deducir, que en los bosques Posiblemente existan Perros.";
let i = 0;
let letraP = 0; 

while(i < unTexto.length){
    while(unTexto[i] == " "){
    i++;
}
if(unTexto[i] == 'P'){
    letraP++;
   while((unTexto[i]!= " ") && (i < unTexto.length)){
   i++;
    

   }
} else{
    while((unTexto[i]!= " ") && (i < unTexto.length)){
    i++;
    
    }
}
 
} 
    
console.log(" las palabras que comienzan con P son: ",letraP);
