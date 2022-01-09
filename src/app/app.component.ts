import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'segundoproyecto';
  toogle=true;
  listEstu: any[] =[
    {nombre: "lucas", estado: 'no aprobado'},
    {nombre: "elyoyos", estado: 'aprobado'},
    {nombre: "mipito", estado: 'no aprobado'},
    {nombre: "mipitoxd", estado: 'promocionado'},
  ];

  btntoogle(): void {
    this.toogle=!this.toogle;
  }
}
