import {AgentProfileComponent} from './agent-profile/agent-profile.component';
import {ClientProfileComponent} from './client-profile/client-profile.component';
import {RequestedRentsComponent} from './client-profile/requested-rents/requested-rents.component';
import {CarProfilePageComponent} from './car-profile-page/car-profile-page.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {RentACarHpComponent} from './rent-a-car-hp/rent-a-car-hp.component';
import {LoginComponent} from './login/login.component';
import {NewAdvertisementComponent} from './rent-a-car-hp/advertisement/new-advertisement/new-advertisement.component';
import {AdvertisementStatisticsComponent} from './advertisement-statistics/advertisement-statistics.component';
import {MessagesComponent} from "./messages/messages.component";

const routes: Routes = [
  {path: 'homepage', component: RentACarHpComponent},
  {path: 'car-profile-page', component: CarProfilePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'homepage', component: RentACarHpComponent},
  {path: 'car-profile-page/:id', component: CarProfilePageComponent},
  {path: 'new-advertisement', component: NewAdvertisementComponent},
  {path: 'requested-and-history-rents', component: RequestedRentsComponent},
  {path: 'client-profile', component: ClientProfileComponent},
  {path: 'agent-profile', component: AgentProfileComponent},
  {path: 'advertisement-statistics', component: AdvertisementStatisticsComponent},
  {path: 'messages', component: MessagesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
