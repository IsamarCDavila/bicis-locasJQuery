function validateForm(){
    var mensajito=$("#mensaje").val();
    console.log(mensajito);
    //var mensajito = document.getElementById("mensaje");
    var name=$("#name").val();
    console.log(name);
    //var name = document.getElementById("name");
    var lastname=$("#lastname").val();
    console.log(lastname);
    //var lastname = document.getElementById("lastname");
    //var email = document.getElementById("input-email");
    var password=$("#password").val();
    console.log(password);
    //var password = document.getElementById("input-password");
    var tipo=$("#select").val();
    console.log(name);
    //var tipo = document.getElementById("select");
    
    
    if(name.length==0 || lastname.length==0 || email.length==0 || password.length==0 || tipo==0) {
        
        validateName();
        validateLastname();
        validateEmail();
        validatePassword();
        validateType();
        mensajito.innerHTML = "";
        
    } else {
        
        if(name.length>0 && lastname.length>0 && email.length>0 && password.length>0 && tipo!=0){
            
            mensajito.innerHTML = "<br><h3 style='color:green'>¡Formulario completado!</h3>";    
            
        } else {
            
            mensajito.innerHTML = "";
        }  
    } 
}

function validateName(_evt){
    
    //Input
    var nombre=$("#name");
    //var nombre = document.getElementById("name");
    //Creando el texto de la Caja Negra
    var textoNombre = "Debe ingresar su nombre";
    var textoNumero = "Los números no son válidos";
 
    
    if(nombre.val()!=""){
       
        nombre.val() = convertirMayus(nombre.val());
        
        if(/([0-9])/g.test(nombre.val())){
            mensaje("name",textoNumero);
        } else {
            eliminar("name");
        }
    } else {
        mensaje("name",textoNombre);
    }    
}

function validateLastname(_evt) {
    
    //Input
     var apellido=$("#lastname");
    //var apellido = document.getElementById("lastname");
    //Creando el texto de la Caja Negra
    var textoApellido = "Debe ingresar su apellido";
    var textoNumero = "Los números no son válidos";
    
 
    if(apellido.val()!=""){
        
        apellido.val() = convertirMayus(apellido.val());
        
        if(/([0-9])/g.test(apellido.val())){
            mensaje("lastname",textoNumero)  
        } else {
            eliminar("lastname");
        } 
    } else {
        mensaje("lastname",textoApellido);    
    }
}

function validateEmail(_evt){
    
    //Input
    var emailX=$('#input-email');
    //var emailX = document.getElementById("input-email");
    //Creando el texto de la Caja Negra
    var textoEmail = "Verifique su e-mail";

    if(/([a-zA-Z0-9(-_.)]+[@][a-zA-Z0-9]+[.][a-zA-Z]+)/g.test(emailX.val())){
        eliminar("input-email"); 
    } else {
        if(emailX.val().length >= 0){
            mensaje("input-email",textoEmail);  
        }
    }
}

function validatePassword(_evt) {
    
    //Input
    var password=$('#input-password');
    //var password = document.getElementById("input-password");
    //Creando el texto de la Caja Negra
    var textoPassword = "La contraseña debe tener al menos 6 caracteres";
    
    if(password.value === "098754" || password.value.length <= 6 || password.value === "123456" || password.value.toLowerCase() === "password" ) {
        mensaje("input-password",textoPassword); 
        
    } else {
        eliminar("input-password");
    }
}

function validateType(_evt) {
    
    //Input
    var tipo=$("#select");
    //var tipo = document.getElementById("select");
    //Creando el texto de la Caja Negra
    var textoTipo = "Debes seleccionar al menos un tipo de bici";
    
    if(tipo.val() == 0){
          mensaje("select",textoTipo);
    } else { 
        if(tipo.val() == "urbana" || tipo.val() == "treking" || tipo.val() == "electrica" || tipo.val() == "estatica"){
           eliminar("select");
        }
          
    }   
}

function mensaje(campo,texto){

    var elemento=$("#campo");
    //var elemento = document.getElementById(campo);
    
    //El span no existe
    if(elemento.nextSibling == null) {
        crearSpan(elemento,texto);
    //El span si existe    
    } else { 
        
        if(elemento.nextSibling.tagName == 'SPAN'){
            elemento.nextSibling.innerHTML = texto;
            
        } else {
            elemento.parentNode.removeChild(elemento.nextSibling); 
            crearSpan(elemento,texto);
        }        
    }
}

function eliminar(campo){
    
    //var elemento = document.getElementById(campo);
    var elemento=$("#campo");
    
    if(elemento.nextSibling != null) {
        
        elemento.parentNode.removeChild(elemento.nextSibling);
    }
    
}

function convertirMayus(texto){
    
    //MAYUSCULA
    var nombreArray = texto.split("");
    var primeraLetra = nombreArray[0];
    var mayuscula = primeraLetra.toUpperCase();
    var espacio = false;

    for(var i=1; i<nombreArray.length; i++) {

        if(espacio){
            mayuscula += nombreArray[i].toUpperCase();
            espacio = false;
        } else {
            mayuscula += nombreArray[i];
            if(nombreArray[i] == " ")
                espacio = true;
        }
    }
    
    return mayuscula;
}

function crearSpan(elementoInput,textoInput){
    
    //Creando la Caja Negra
    var cajaNegra=$("#span");
    //var cajaNegra = document.createElement("span");
    var info=$("#textInput");
    var info = document.createTextNode(textoInput);
    cajaNegra.appendChild(info);
    var padre = elementoInput.parentNode;
    padre.appendChild(cajaNegra);
}

