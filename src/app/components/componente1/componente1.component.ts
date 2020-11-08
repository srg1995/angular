import { Component } from '@angular/core';

@Component({
    selector: 'componente1',
    template: `
        <h1>hola soy titulo</h1>
        <p>hola parrafo</p>
    `
})
export class Componente1{
    construstor(){
        console.log("componente1 cargado");
    }
}
