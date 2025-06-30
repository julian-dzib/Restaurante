import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuSubmenuVisible = false;
  toggleMenuSubmenu() {
    this.isMenuSubmenuVisible = !this.isMenuSubmenuVisible;
  }
  hideSubmenu() {
    this.isMenuSubmenuVisible = false;
  }
  handleSubmenuClick() {
    this.hideSubmenu();
  }
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
  constructor(private auth:AuthenticationService) {}
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
  }
}



