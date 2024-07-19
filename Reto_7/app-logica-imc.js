function calcularimc(){

    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    

    let imc = (peso/altura*altura)
    let descripcion;

    document.getElementById('resultado').innerHTML = imc;
    

     if (imc <=18.5){
        descripcion=('Peso Bajo')
    }

    else if (imc >=18.5 <24.9) {
    descripcion= 'Saludable'
    } 
        

    else if (imc >=25 <29.9) {
    descripcion='SobrePeso'
    }

    else if (imc >=30 <39.9) {  
        descripcion='Obsesidad'
    }
    document.getElementById('descripcion').innerHTML=descripcion;
 }
    document.getElementById('form-imc').addEventListener("submit",(e) =>{
        e.preventDefault();
         calcularimc();


});    