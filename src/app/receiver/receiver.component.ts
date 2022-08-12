import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {

  constructor(private router: Router,private http: HttpClient) { }

  ngOnInit(): void {

    this.http.post("http://localhost:8080/searchBank", {
      "details": ""
    }).subscribe((data) => {
      console.log(data);
    },
      (error) => {
        console.log(error.message)
      });
  }

  nextPage(){
    this.router.navigate(['sender']);
  }

}
