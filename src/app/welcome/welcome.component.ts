import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  day!: string;
  isError: boolean = false;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<any>("http://localhost:8080/checkForDates").subscribe(
      (data) => {



      },
      (error) => {
        if(error.status ===  0){
          this.isError = true;
          this.day = "Saturday and Sunday";
        }
      }
    );


  }

  nextPage(){
    this.router.navigate(['type']);
  }


}
