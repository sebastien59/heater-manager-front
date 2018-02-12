import { Component, OnInit } from '@angular/core';
import {SetupService} from "../../services/setup.service";
import {RoomsService} from "../../services/rooms.service";
import {SensorsService} from "../../services/sensors.service";
import {PlugsService} from "../../services/plugs.service";

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  temperature:number;
  minTemperature:number;
  rooms:Room[];

  constructor(private toastr: ToastrService, private setupService:SetupService, private roomsService:RoomsService, private sensorsService:SensorsService,private plugsService:PlugsService) { }

  ngOnInit() {
    this.setupService.getSetup("Temperature").subscribe((setupTemperature) =>{
      console.log(setupTemperature)
      this.temperature= +setupTemperature.value;
    });

    this.setupService.getSetup("MinTemperature").subscribe((MinTemperature) =>{
      this.minTemperature= +MinTemperature.value;
    });

    this.roomsService.getRooms().subscribe((rooms) =>{
      console.log(rooms)
      this.rooms=rooms
    })
  }

  SetTemperature(order){
    this.temperature=(order)?this.temperature+1:this.temperature-1;
    this.setupService.updateSetup("Temperature", this.temperature).subscribe((result)=>{
      console.log("data")
    });
  }

  SetMinTemperature(order){
    this.minTemperature=(order)?this.minTemperature+1:this.minTemperature-1;
    this.setupService.updateSetup("MinTemperature", this.minTemperature).subscribe((result)=>{
      console.log(result)
    });
  }

  AddSensor(ip, name, room){
    console.log(ip, name, room)
    this.sensorsService.addSensor(name, ip, room).subscribe((result)=>{
      console.log(result.ip!="" && result.name!="" && result.room!="")
      if(result.ip!="" && result.name!="" && result.room!=""){
        this.toastr.success(result.name+" on "+result.ip , 'Sensor '+result.name+' added!', {
          timeOut: 3000,
          closeButton:true,
          progressAnimation:"increasing"
        });
      }
    });
    return false;
  }

  AddPlug(ip, name, room){
    console.log(ip, name, room)
    this.plugsService.addPlug(name, ip, room).subscribe((result)=>{
      this.toastr.success(result.name+" on "+result.ip , 'Plug '+result.name+' added!', {
        timeOut: 3000,
        closeButton:true,
        progressAnimation:"increasing"
      });
    });
    return false;
  }
}


interface Room{
  id:number,
  name:string
}
