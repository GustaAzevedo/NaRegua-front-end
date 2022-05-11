import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  img: string = 'https://via.placeholder.com/500x1400';

  constructor() { }

  ngOnInit(): void {
  }

}
