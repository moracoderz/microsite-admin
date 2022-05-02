function validateNombreCli(auxNombreCli) {
    if (auxNombreCli === "" || auxNombreCli === null) {
        alert("Ingrese nombre del cliente");
        return false;
    } else {
        return auxNombreCli.toLowerCase();
    }
}

function eleccionPlan() {
    let ulSubPlanes = document.querySelector("#subPlans-list");
    ulSubPlanes.classList.remove("subPlanHide");
}

function getPlanSubPlanPrice(plan, subPlan) {
    
    let precioSubPlan = 0;
    let precioPlan = 0;

    for (let k = 0; k < planes.length; k++) {
        if (planes[k].idPlan === plan) {
            for (let l = 0; l < planes[k].subPlanes.length; l++) {
                if (planes[k].subPlanes[l].idSub === subPlan) {
                    precioPlan = planes[k].precio;
                    precioSubPlan = planes[k].subPlanes[l].precio;
                }
            }
        }
    }
    return (precioPlan + precioSubPlan);
}


const agregarCliente = () => {
    const seccionClientes = document.querySelector("#mostrarClientes");
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    let plan = "";
    let subPlan = "";
    let total = 0;

    let nombreCli = validateNombreCli(document.querySelector("#nombreCliente").value);

    const seleccionarPlanes = document.querySelector("#agregarCliente");
    for (i of seleccionarPlanes.plan) {
        if (i.checked) {
            plan = parseInt(i.value);           
        }
    }

    const seleccionarSubPlanes = document.querySelector("#agregarCliente");
    for (j of seleccionarSubPlanes.subPlan) {
        if (j.checked) {
            subPlan = parseInt(j.value);           
        }
    }

    total = getPlanSubPlanPrice(plan, subPlan);

    li.textContent = `Nombre: ${nombreCli} \nPlan: ${plan} \nSub Plan: ${subPlan} \nTotal: ${total}`;
    
    clientes.push(new Cliente(nombreCli, plan, subPlan, total));

    // Agregando los clientes a la lista en el DOM
    seccionClientes.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(document.createElement("hr"));

    // Limpiar los campos   
    document.querySelector("#nombreCliente").value = "";
    document.querySelector("#agregarCliente").reset();
    document.querySelector("#subPlans-list").classList.add("subPlanHide");


}





const loadEvents = () => {
    document.querySelector("#agregarClienteBtn").addEventListener("click", agregarCliente);

    const clickPlan = document.querySelectorAll("input[name='plan']");
    for (i of clickPlan) {
            i.onchange = () => { eleccionPlan(); }
    
        
    }

}
