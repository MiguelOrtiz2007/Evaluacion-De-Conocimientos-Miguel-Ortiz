let calificacion;
let sumatoria;
let promedio;
let cantCalificaciones;
let calificacionesI; //Se usan para diferenciar las notas de su respectiva materia
let calificacionesM;// M = matematicas y I = Idiomas
let cantCalificacionesI;
let cantCalificacionesM;


function calcularPromedio (calificacion){
    cantCalificaciones = console.log("Ingrese la cantidad de calificaciones en total: ")
    for (i=0; i<=cantCalificaciones; i++){
        sumatoria = sumatoria + calificacion
        promedio = sumatoria / cantCalificaciones
    }

    return promedio;
};

function mayorPromedio (calificacion) {
    let cantS = 0;
    while (calificacion > promedio){
        cantS = cantS + 1
    };

    return console.log("La cantidad de calificaciones mayores al promedio son: " + cantS);

};

function mayorRegular (calificacion){
    let cantR = 0;
    while (cantR <= 3.5 && cantR > 2.5){
        cantR = cantR + 1;
    }
    
    return console.log("La cantidad de calificaciones regulares son: " + cantR);
}


function mayorReprobados(calificacionesI, calificacionesM, cantCalificacionesI, cantCalificacionesM){
    let maxRI = 0;
    let maxRM = 0;
    
    for (i=0; i<=cantCalificacionesI; i++){
        if(calificacionesI <= 2.5){
            maxRI = maxRI + 1;
        };
    }
    for (i=0; i<=cantCalificacionesM; i++){
        if(calificacionesM <= 2.5 ){
            maxRM = maxRM + 1;
        };
    }


    if(maxRM > maxRI){
        console.log("La materia con mas reprobados es Matematicas")
    }else{
        console.log("La materia con mas reprobados es Idiomas")
    }
}