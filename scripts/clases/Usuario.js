export default class Usuario {
    constructor (nombres, apellidos, correo, activo){
        this.nombres = nombres,
        this.apellidos = apellidos,
        this.correo = correo,
        this.activo = activo
    }

    presentarse(){
        return `Hola soy, ${this.nombres} y mi correo es ${this.correo}`    
    }

    //Métodos getters y setters 
    //GET => Obtener
    //SET => Dar
    getNombres(){
        return this.nombres
    }

    getApellidos(){
        return this.apellidos
    }

    setNombres(){

    }

    setApellidos(nuevosApellidos){
        this.apellidos = nuevosApellidos
    }
}  