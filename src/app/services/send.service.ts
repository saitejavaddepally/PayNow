import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendService {

  constructor(private http: HttpClient) { }

  sendMoney(senderDetails: any, receiverDetails: any, moneyToSend: number, transactionType: any){
    const url = "http://localhost:8080/sendMoney";
    return this.http.post<any>(url, {
      "senderDetails" : senderDetails,
      "receiverDetails" : receiverDetails,
      "moneyToSend": moneyToSend,
      "transactionType": transactionType
    });
  }

}
