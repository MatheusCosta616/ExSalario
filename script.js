const salarios = [2000, 3000, 5000, 1200, 3021, 3219, 3129, 3123, 5464, 5353]

const salariosAltos = salarios.map(salario => {
    if (salario > 2000){
        return salario * 1.15;
    }else{
        return salario * 1.1;
    }
})

const salarioFiltrado = salariosAltos.filter(salariosAltos =>{
    if (salariosAltos > 2500){
        return true;
    }else{
        return false;
    }
})

const somaSalarios = salarioFiltrado.reduce((acumulador, salario) => {
    return acumulador + salario;
}, 0);

console.log(salariosAltos)
console.log(salarioFiltrado)
console.log(somaSalarios)