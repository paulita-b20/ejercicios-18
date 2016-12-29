function factorial(n) {
    var factor=1;
    if(n>0) {
    for(var i=1; i<=n;  i++) 
    {
        factor = factor * i;
    
    }
      return factor;   
    }
    
    else  {
        return null;

}
}
