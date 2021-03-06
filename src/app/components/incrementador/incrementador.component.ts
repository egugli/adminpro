import { Component, Input, Output, OnInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input('nombre')    public leyenda: string ='Leyenda';
  @Input()  	public progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { 
//   console.log('Leyenda', this.leyenda);
//   console.log('Progreso', this.progreso);
  }

  ngOnInit() {
//    console.log('Leyenda', this.leyenda);
  }

  onChanges(newValue:number){

//    let elemHTML: any = document.getElementsByName('progreso')[0];
//    console.log(this.txtProgress);


    //console.log(newValue);
    if(newValue >= 100){
      this.progreso = 100;
    } else if (newValue <= 0){
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

   // elemHTML.value = this.progreso;

  this.txtProgress.nativeElement.value = this.progreso;

  this.cambioValor.emit( this.progreso );


  }

  cambiarValor(valor){
  	if(this.progreso >= 100){
  		this.progreso = 99;
  		return;
  	}

  	if(this.progreso <= 0){
  		this.progreso = 1;
  		return;
  	}

  	this.progreso = this.progreso + valor;
    this.cambioValor.emit( this.progreso );
    this.txtProgress.nativeElement.focus();
  }
}
