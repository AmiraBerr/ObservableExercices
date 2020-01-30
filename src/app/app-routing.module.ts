import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{MontreAnalogComponent} from './montre-analog/montre-analog.component'
import{BoxOfficeComponent} from './box-office/box/box-office.component'
import{DetailsComponent} from './box-office/details/details.component'


const routes: Routes = [
  {path:"montreanalog",component:MontreAnalogComponent},
  {path:'boxoffice',component:BoxOfficeComponent},
  {path:"movie/:id",component:DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
