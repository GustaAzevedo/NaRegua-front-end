import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

  img: string = 'https://via.placeholder.com/500x1400';
  constructor() { }

  ngOnInit(): void {
  }

}
