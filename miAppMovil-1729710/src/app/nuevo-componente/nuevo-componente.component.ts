import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-componente',
  templateUrl: './nuevo-componente.component.html',
  styleUrls: ['./nuevo-componente.component.scss'],
})
export class NuevoComponenteComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  alumnos: any = ["Juan", "Carlos", "Guillermo", "Brenda", "Angel"];

}
