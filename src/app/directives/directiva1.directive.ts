import { Directive, ElementRef, Input, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirectiva1]'
})
export class Directiva1Directive {

  constructor(
    public _el:ElementRef,
    public _renderer:Renderer2,

  ) { }

  @Input() appDirectiva1:boolean

  @HostListener('mouseenter') onMouseEnter(){
    this.hover(true)
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.hover(false)
  }

  hover(color:boolean){
    if(color){
      this._renderer.setStyle(this._el.nativeElement, 'color', "red")
    }else{
      this._renderer.setStyle(this._el.nativeElement, 'color', "green")
    }
  }

  ngOnInit(){
    
  }

}
