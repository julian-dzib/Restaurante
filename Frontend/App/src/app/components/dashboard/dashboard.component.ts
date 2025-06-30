import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthenticationService } from 'src/app/Services/authentication.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent{

  //constructor(private auth:AuthenticationService){}
  //user:any;
  //ngOnInit(): void {
    //this.auth.user().subscribe((res)=>{
      //console.log(res);
      //this.user=res
    //}, (err)=>{
      //console.log(err);
    //});
    //this.auth.status().subscribe((isLoggedIn) => {
      //if (isLoggedIn) {
        //this.auth.user().subscribe((res) => {
          //this.user = res;
        //});
      //} else {
        //console.log("Usuario no autenticado.");
      //}
    //});
  //}
  //si sirve
/*constructor(private auth:AuthenticationService) {}
  user:any;
  ngOnInit(): void {
    // Check status
    this.auth.status().subscribe((res)=>{
      console.log(res);
    })
    this.auth.user().subscribe((res)=>{
      this.user = res;
    }, (err) =>{
      console.log(err);
    })
  }*/

}


