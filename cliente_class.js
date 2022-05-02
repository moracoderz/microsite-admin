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