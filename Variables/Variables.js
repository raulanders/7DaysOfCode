



function mensaje() {
    let nombre = prompt('¿Cuál es tu nombre?')
    let edad = prompt('¿Cuántos años tienes?')
    let lenguaje = prompt('¿Estudias algún lenguaje de programación?, selecciona: 1. Si 2. No')

    console.log(nombre)
    console.log(edad)
    console.log(lenguaje)
    
    if(lenguaje == 1){
        let selectLenguaje = prompt('Selecciona el lenguaje que estudias: 1. Python 2. JavaScript 3. Java 4. C++')
            
        if(selectLenguaje == 1){
            alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo Python`)
        }else if(selectLenguaje == 2){
            alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo JavaScript`)
        }else if(selectLenguaje == 3){
            alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo Java`)
        }else if(selectLenguaje == 4){
            alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo C++`)
        }else{
            alert('No has seleccionado un lenguaje de la lista.')
            mensaje()
        }
    }else if (lenguaje == 2){
        let opcionallenguage = prompt('¿Te gusta estudiar JavaScript? selecciona: 1. Si 2. No')
        
        if (opcionallenguage == 1){
            alert('¡Muy bien! Sigue estudiando y tendrás mucho éxito.')
        }else{
            alert('Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?')
        }
    }else{
        alert('No seleccionaste una opción valida')
        mensaje()
    }
}


mensaje()



