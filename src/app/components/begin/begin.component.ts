import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-begin',
  templateUrl: './begin.component.html',
  styleUrls: ['./begin.component.css']
})
export class BeginComponent implements OnInit {
  edad = 25;
  peso = 60;
  altura = 170; 
  sexo = 'Masculino';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  changeAltura(event: any) {
    this.altura = event.target.value;
  }
  masculino(){
    this.sexo = 'Masculino'
  }

  femenino() {
    this.sexo = 'Femenino'
  }
  calc() {
    const bmi = this.peso / Math.pow(this.altura/100, 2);
    this.router.navigate(['/resultado', bmi.toFixed(1)])
  }

}
