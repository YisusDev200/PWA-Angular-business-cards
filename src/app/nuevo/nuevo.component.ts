import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent {

  persona = {
    nombreEmpresa: ""
  }
  

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit(producs: {businessName: string, businessAddress: string, businessPhone: string, businessEmail: string, businessWebsite   : string, 
    businessLogo: string, facebookLink: string, twitterLink:string, instagramLink: string, linkedinLink: string, youtubeLink: string}) {
    console.log(producs)
    console.log("RES")
    this.http.post('https://api5yis.fly.dev/api-yisus/cliente', producs)
    .subscribe((res)=>{
      console.log(res)
    })
    
  }
}
