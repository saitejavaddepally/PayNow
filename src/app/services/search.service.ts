import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }


  searchBanksAndGetBic(){
    const url = 'http://localhost:8080/searchBank';

    return this.httpClient.post<any>(url, {
      "details" : ""
    });
  }


}
