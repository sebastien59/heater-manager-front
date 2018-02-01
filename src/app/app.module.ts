import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule, JsonpModule, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import 'reflect-metadata';
import 'zone.js';

import { AppComponent } from './app.component';
import { InfoTilesComponent } from './components/info-tiles/info-tiles.component';
import { SensorsService } from "./services/sensors.service";
import { RoomTilesComponent } from './components/room-tiles/room-tiles.component';
import { RoomsService } from "./services/rooms.service";
import { PlugsService } from "./services/plugs.service";
import { LogsService } from "./services/logs.service";
import { SettingsComponent } from './components/settings/settings.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {ApiInterceptor} from "./interceptor/api.interceptor";
import {SetupService} from "./services/setup.service";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { LogsComponent } from './components/logs/logs.component';

import { DataTablesModule } from 'angular-datatables';
import {NgxChartsModule} from '@swimlane/ngx-charts';


const appRoutes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'home', component:DashboardComponent},
  {path:'settings', component:SettingsComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    InfoTilesComponent,
    RoomTilesComponent,
    SettingsComponent,
    DashboardComponent,
    LogsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    HttpClientModule,
    DataTablesModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgxChartsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true},
    SensorsService,
    RoomsService,
    PlugsService,
    SetupService,
    LogsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
