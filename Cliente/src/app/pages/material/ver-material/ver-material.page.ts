import { Component, Input, OnInit } from '@angular/core';
import { IMaterialDto } from '../../../data/dto/material-dto';

@Component({
  selector: 'app-ver-material',
  templateUrl: './ver-material.page.html',
  styleUrls: ['./ver-material.page.scss'],
})
export class VerMaterialPage implements OnInit {

  @Input() material: IMaterialDto;

  constructor() { }

  ngOnInit() {
  }

}
