import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  validateAccountNumber(accountNumber : string){
    return this.http.get<any>("http://localhost:8080/findById?id=" + accountNumber);
  }

}
