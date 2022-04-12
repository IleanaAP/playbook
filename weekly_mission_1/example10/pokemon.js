//un export por defecto puede ser importado con cualquier nombre

export default class Pokemon {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Mi pokemon ${this.name} te saluda!!!`)
    }

    sayMessage(message) {
        console.log(`Mi pokemon ${this.name} dice: ${message}`)
    }
}