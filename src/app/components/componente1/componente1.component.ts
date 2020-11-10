import { Component } from '@angular/core';

@Component({
    selector: 'componente1',
    templateUrl:'./componente1.component.html'
    
})
export class Componente1{

    public title: string;
    public commentary: string;
    public year: number;

    constructor(){
        this.title = "hola";
        this.commentary = "comentario33rrr";
        this.year = 2020;

        console.log("componente1 cargado");
        console.log(this.year);
        console.log("componente1 cargado");
    }
}

