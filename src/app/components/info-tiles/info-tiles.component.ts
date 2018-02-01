import { Component, OnInit } from '@angular/core';
import {SensorsService} from "../../services/sensors.service";
import 'reflect-metadata';
import 'zone.js';

@Component({
  selector: 'info-tiles',
  templateUrl: './info-tiles.component.html',
  styleUrls: ['./info-tiles.component.css']
})
export class InfoTilesComponent implements OnInit {
  sensors;

  constructor(private sensorsService:SensorsService) {}

  ngOnInit() {
    this.sensorsService.getSensors().subscribe((sensors) =>{
      console.log(sensors);
      this.sensors=sensors
    })
  }
}
