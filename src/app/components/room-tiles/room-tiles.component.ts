import { Component, OnInit } from '@angular/core';
import {RoomsService} from "../../services/rooms.service";
import { HttpClient } from '@angular/common/http';
import { PlugsService } from "../../services/plugs.service";

@Component({
  selector: 'room-tiles',
  templateUrl: './room-tiles.component.html',
  styleUrls: ['./room-tiles.component.css']
})
export class RoomTilesComponent implements OnInit {
  rooms:Room[];
  constructor(private roomsService:RoomsService, private plugsService: PlugsService, private http: HttpClient){

  }

  ngOnInit() {
    this.roomsService.getRooms().subscribe((rooms) =>{
      console.log(rooms)
      this.rooms=rooms
    })
  }

  TogglePlug(plug){
    this.plugsService.updatePlug(plug).subscribe((response) => {
      plug.state= !plug.state
      console.log(response)
    })
  }
}


interface Room{
  id:number,
  name:string
}
