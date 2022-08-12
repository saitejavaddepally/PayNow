import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReceiverService {

  constructor(private http: HttpClient) { }
  validateAccountNumber(receiverBic : string){
    return this.http.get<any>("http://localhost:8080/findByBic?id=" + receiverBic);
  }
}
