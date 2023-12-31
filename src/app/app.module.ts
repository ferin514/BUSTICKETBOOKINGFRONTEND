import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { SeatavailabilityComponent } from './seatavailability/seatavailability.component';
import { PassengerdetailsComponent } from './passengerdetails/passengerdetails.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { AddbusComponent } from './addbus/addbus.component';
import { UpdatebusComponent } from './updatebus/updatebus.component';
import { DeletebusComponent } from './deletebus/deletebus.component';
import { FormsModule } from '@angular/forms';

import { ServiceService } from './service.service';
import { HttpClientModule } from '@angular/common/http';
import { MainhomepageComponent } from './mainhomepage/mainhomepage.component';
import { AddscheduleComponent } from './addschedule/addschedule.component';
import { UpdatescheduleComponent } from './updateschedule/updateschedule.component';
import { DeletescheduleComponent } from './deleteschedule/deleteschedule.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { BusComponent } from './bus/bus.component';
import { ShowscheduleComponent } from './showschedule/showschedule.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { BusticketComponent } from './busticket/busticket.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DashboardComponent,
    SearchpageComponent,
    SeatavailabilityComponent,
    PassengerdetailsComponent,
    AdminhomepageComponent,
    AddbusComponent,
    UpdatebusComponent,
    DeletebusComponent,
    MainhomepageComponent,
    AddscheduleComponent,
    UpdatescheduleComponent,
    DeletescheduleComponent,
    ScheduleComponent,
    BusComponent,
    ShowscheduleComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ServicesComponent,
    BusticketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
