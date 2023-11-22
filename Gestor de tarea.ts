// Modelo
class Tarea {
    nombre: string;
    completada: boolean;

    constructor(nombre: string) {
        this.nombre = nombre;
        this.completada = false;
    }
}

// Controlador
class Controlador {
    tareas: Tarea[];

    constructor() {
        this.tareas = [];
    }

    agregarTarea(nombre: string): void {
        const tarea = new Tarea(nombre);
        this.tareas.push(tarea);
    }

    completarTarea(nombre: string): void {
        for (let tarea of this.tareas) {
            if (tarea.nombre === nombre) {
                tarea.completada = true;
                break;
            }
        }
    }

    eliminarTarea(nombre: string): void {
        this.tareas = this.tareas.filter(tarea => tarea.nombre !== nombre);
    }
}

// Vista
class Vista {
    controlador: Controlador;

    constructor(controlador: Controlador) {
        this.controlador = controlador;
    }

    mostrarTareas(): void {
        for (let tarea of this.controlador.tareas) {
            console.log(`Tarea: ${tarea.nombre}, Completada: ${tarea.completada}`);
        }
    }
}

// Uso
const controlador = new Controlador();
const vista = new Vista(controlador);

controlador.agregarTarea('Hacer la compra');
controlador.agregarTarea('Estudiar JavaScript');
controlador.completarTarea('Hacer la compra');

vista.mostrarTareas();
