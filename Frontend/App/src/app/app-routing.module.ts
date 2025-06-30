import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { InitialComponent } from './Admin/modules/initial/initial.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'}, /// Configuración de redirección desde la URL raíz
  ///Agregue esto
  { path:'login', component:LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'logoud', component: LogoutComponent},
  { path:'dashboard', component: DashboardComponent},
  { path:'initial', component: InitialComponent},
  { path: 'home', component: HomeComponent,///{ path: 'home', component: HomeComponent
  children: [
    { path: '', loadChildren: () => import('./modules/carousels/carousels.module').then(m => m.CarouselsModule) },//Carga el componente carousel al iniciar home
    { path: 'about', loadChildren: () => import('./modules/abouts/abouts.module').then(m => m.AboutsModule) },
    { path: 'photos', loadChildren: () => import('./modules/photosclients/photosclients.module').then(m => m.PhotosclientsModule) },
    { path: 'menu', loadChildren: () => import('./modules/foods/foods.module').then(m => m.FoodsModule) },
    { path: 'time', loadChildren: () => import('./modules/timetables/timetables.module').then(m => m.TimetablesModule) },
    //{ path: 'reservacion', loadChildren: () => import('./modules/reservations/reservations.module').then(m => m.ReservationsModule) },
    { path: 'suggestions', loadChildren: () => import('./modules/suggestions/suggestion.module').then(m => m.SuggestionModule) },
    { path: 'reservation', loadChildren: () => import('./modules/reservations/reservations.module').then(m => m.ReservationsModule) },

  ],},

  {path: 'admin', redirectTo: 'login'},
  {path: 'admon', component: InitialComponent,
  children:[
    { path: '', loadChildren: ()=> import('./Admin/modules/welcome/welcome.module').then(m => m.WelcomeModule)},
    { path: 'SuggestionList', loadChildren: ()=> import('./Admin/modules/adminsugges/adminsugges.module').then(m=> m.AdminsuggesModule)},
    ///AGREGUE ESTO
    {path:"TimeList", loadChildren: ()=>import('./Admin/modules/admintime/admintime.module').then(m=>m.AdmintimeModule)},
    {path:"CarouselList", loadChildren: ()=>import('./Admin/modules/admincarousel/admincarousel.module').then(m=>m.AdmincarouselModule)},
    {path:"ReservationList", loadChildren: ()=>import('./Admin/modules/adminreservation/adminreservation.module').then(m=>m.AdminreservationModule)},
    {path:"MenuList", loadChildren: ()=>import('./Admin/modules/adminmenu/adminmenu.module').then(m=>m.AdminmenuModule)},
    {path:"CreateDash", loadChildren: ()=>import('./Admin/modules/admindashboard/admindashboard.module').then(m=>m.AdmindashboardModule)},
    {path:"AboutList", loadChildren: ()=>import('./Admin/modules/adminabout/adminabout.module').then(m=>m.AdminaboutModule)},


  ],},
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
