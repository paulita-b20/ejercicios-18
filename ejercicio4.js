function stringMultiplicar(n) {
     var resultado =0;
     var salida = " "; 
    for ( var i=1;   i<=10;  i++){
         if(i<=10){
             resultado= n*i;
             salida += n + "x" + i + "=" + resultado;
            
       if (1+i<=10){
            salida +="/";   
      }
     }
   }
    return salida;
}
 