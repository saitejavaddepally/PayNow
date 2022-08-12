import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  data = []; 
  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {

    this.transactionService.getTransactionDetails().subscribe(
      (data) => {
        this.data = data;
      }, 
      (error) => {
        console.log(error);
      }
    )
  }

}
