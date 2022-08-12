import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }


  searchBanksAndGetBic(){
    const url = 'localhost:8080/all';

    return this.httpClient.get(url);
  }
  

}
