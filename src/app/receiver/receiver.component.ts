import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {

  constructor(private http: HttpClient) { }

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

}
