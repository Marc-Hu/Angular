import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "app/users/users.component";
import { UserComponent } from "app/users/user/user.component";
import { ServersComponent } from "app/servers/servers.component";
import { ServerComponent } from "app/servers/server/server.component";
import { EditServerComponent } from "app/servers/edit-server/edit-server.component";
import { PageNotfoundComponent } from "app/page-notfound/page-notfound.component";
import { HomeComponent } from "app/home/home.component";
import {AuthGuard} from './auth-guard.service';
import {CanDeactivateGuard} from './servers/edit-server/can-deactivated-guard.service';
import {ErrorPageComponent} from './error-page/error-page.component';
import {ServerResolver} from './servers/server/server-resolver.service';

const appRoutes : Routes = [
  { path: 'users', component : UsersComponent, children : [
    { path: ':id/:name', component : UserComponent}
  ]},
  { path:'servers', 
  // canActivate:[AuthGuard] ,
  canActivateChild:[AuthGuard], 
  component : ServersComponent, children:[
    { path:':id', component : ServerComponent, resolve : {server : ServerResolver} },
    { path:':id/edit', component : EditServerComponent, canDeactivate : [CanDeactivateGuard] }
  ] },
  
  { path:'', component : HomeComponent}, 
  // { path : 'not-found', component : PageNotfoundComponent},
  { path : 'not-found', component : ErrorPageComponent, data:{message : 'Page not found!'}},
  { path : '**', redirectTo:'/not-found'},
]

@NgModule({
//  imports : [RouterModule.forRoot(appRoutes, {useHash: true})],
imports : [RouterModule.forRoot(appRoutes)],
 exports : [RouterModule]
})

export class AppRoutingModule{

}