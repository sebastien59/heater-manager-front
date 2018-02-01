import { Component, OnInit } from '@angular/core';
import {LogsService} from "../../services/logs.service";
import {Subject} from "rxjs/Subject";


@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})

export class LogsComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  sensorsLogs=[];
  plugsLogs=[];

  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  constructor(private logservice: LogsService) {
    let single = [
    ];

    let multi = [
      {
        "name": "Temperature",
        "series": [
          {
            "name": "2017-10-10 14:20:51",
            "value": 20
          },
          {
            "name": "2017-10-10 14:20:55",
            "value": 23
          },
        ]
      },
      {
        "name": "Humidity",
        "series": [
          {
            "name": "2017-10-10 14:20:51",
            "value": 50
          },
          {
            "name": "2017-10-10 14:20:55",
            "value": 66
          }
        ]
      }
    ];

    Object.assign(this, this.multi)
  }

  ngOnInit() {

    this.dtOptions = {
      searching: false,
      lengthChange:false
    };
    this.logservice.getSensorLogs().subscribe(data => {
      this.sensorsLogs = this.sensorsLogs.concat(data);

      this.multi.push({
        "name": "Temperature",
        "series": []
      })

    });

    this.logservice.getPlugLogs().subscribe(data => {
      this.plugsLogs = this.plugsLogs.concat(data).reverse();
      this.dtTrigger.next();
    })
  }


  onSelect(event) {
    console.log(event);
  }
}
