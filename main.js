alert("Selecciona Plan Simple o Plan Avanzado");
let salida = '';

class Cliente {
    constructor (nombreCli, plan, subPlan, total) {
        this.nombreCli = nombreCli;
        this.plan = plan;
        this.subPlan = subPlan;
        this.total = total;
    }
}
let clientes = [];
const planes = [
        {
            idPlan: 1,
            nombre: "Plan Basico",
            precio: 80,
            descripcion: "Plan basico de diseño",
            subPlanes: [
                {
                    idSub: 1,
                    nombre: "6 Meses",
                    precio: 50,
                    descripcion: "Plan a 6 meses"
                },
                {
                    idSub: 2,
                    nombre: "12 Meses",
                    precio: 150,
                    descripcion: "Plan a 12 meses"
                }
            ]        
        },
        {
            idPlan: 2,
            nombre: "Plan Avanzado",
            precio: 180,
            descripcion: "Plan avanzado de diseño",   
            subPlanes: [
                {
                    idSub: 1,
                    nombre: "6 Meses",
                    precio: 50,
                    descripcion: "Plan a 6 meses"
                },
                {
                    idSub: 2,
                    nombre: "12 Meses",
                    precio: 150,
                    descripcion: "Plan a 12 meses"
                }
            ]            
        }
];

function getPlanSubPlanPrice(plan, subPlan) {
    
    let precioSubPlan = 0;
    let precioPlan = 0;
    for (let i = 0; i < planes.length; i++) {
        if (planes[i].idPlan === plan) {
            
            for (let j = 0; j < planes[i].subPlanes.length; j++) {
                if (planes[i].subPlanes[j].idSub === subPlan) {
                    precioPlan = planes[i].precio;
                    precioSubPlan = planes[i].subPlanes[j].precio;
                }
            }
        }
    }
    return (precioPlan + precioSubPlan);
}

function valPlan() {
    let plan = parseInt(prompt("Ingrese selección de Plan: 1: Simple, 2: Avanzado"));
    while (plan != 1 && plan != 2) {
        if (plan === 1 || plan === 2) {
            return plan;
        } else {
            alert('Dato ingresado es incorrecto');
            plan = parseInt(prompt("Ingrese selección de Plan: 1: Simple, 2: Avanzado"));
        }
    }
    return plan;
}

function valSubPlan() {
    let subPlan = parseInt(prompt("Seleccionar Sub Plan Meses: 1: 6 Meses, 2: 12 Meses"));
    while (subPlan != 1 && subPlan != 2) {
        if (subPlan === 1 || subPlan === 2) {
            return subPlan;
        } else {
            alert('Dato ingresado es incorrecto');
            subPlan = parseInt(prompt("Seleccionar Sub Plan Meses: 1: 6 Meses, 2: 12 Meses"));
        }
    }
    return subPlan;
}

while (salida != 'N') {


    let nombreCli = prompt("Ingrese nombre del cliente");
    let plan = valPlan();
    let subPlan = valSubPlan();
    let total = getPlanSubPlanPrice(plan, subPlan);

    clientes.push(new Cliente(nombreCli.toLowerCase(), plan, subPlan, total));

    // Validar Salida
    salida = prompt("Desea continuar? N para salir \npresione cualquier tecla para continuar");
    if (salida == 'N' || salida == 'n' || salida === null) {
        salida = 'N';
    } else {
        salida = 'S';
    }

} // Fin del while

alert ("Clientes registrados: " + clientes.length);
console.log ();

// Mostrar Clientes
for (let i = 0; i < clientes.length; i++) {
    console.log(`Nombre: ${clientes[i].nombreCli} \nPlan: ${clientes[i].plan} \nSub Plan: ${clientes[i].subPlan} \nTotal: ${clientes[i].total}`);
}

// Buscar Cliente
let buscar = prompt("Ingrese nombre del cliente a buscar");
const cliResult = clientes.filter((element, index) => { return element.nombreCli === buscar.toLowerCase() });
console.log(`\nSe ha encontrado [${cliResult.length} cliente(s)]`);
for (let i = 0; i < cliResult.length; i++) {
    console.log(`Nombre: ${cliResult[i].nombreCli} \nPlan: ${cliResult[i].plan} \nSub Plan: ${cliResult[i].subPlan} \nTotal: ${cliResult[i].total}`);
}