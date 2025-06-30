import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router:Router, private auth:AuthenticationService){}


  onSubmit(form:NgForm){
    const email= form.value.email;
    const password= form.value.password;

    this.auth.login(email, password).subscribe((res:any)=>{
      //console.log(res);
      localStorage.setItem('user', JSON.stringify(res))
      //redirect to home
      console.log(res);
      this.router.navigate(['/admon']);

    },
      err=>{
        console.log(err);
      }
    );


    //console.log(email,password);
    //Comunucacion con el backend
    /*this.http.post('http://127.0.0.1:8000/api/login',{
        email:email,
        password:password
    }).subscribe((res:any)=>{
      console.log(res);
      localStorage.setItem('user', JSON.stringify(res))
      //redirect to home
      console.log(res);
      this.router.navigate(['/dashboard']);

    },
      err=>{
        console.log(err);
      }
    );*/
  }
}
