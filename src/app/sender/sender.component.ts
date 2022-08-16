import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css'],
})
export class SenderComponent implements OnInit {
  accountNumber: string = '87139550565094';
  isError = false;
  transactionType! : string;
  constructor(
    private accountService: AccountService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      params => {
        this.transactionType = params['type'];
      }
    )
  }

  nextPage() {

    this.accountService.validateAccountNumber(this.accountNumber).subscribe(
      (data) => {

        if(data['isFound'] != null){

          const details = data['isFound'];

          console.log(details.name);
          if(this.transactionType === "bank" && !details.name.includes("HDFC")){
            Swal.fire("Account Doesn't correspond to bank transaction ! name is " + details.name, '', 'success');
            return;
          }

          this.router.navigate(['receiver'], {
            queryParams: { type: this.transactionType, id : this.accountNumber },
          });
        }
        else{
          Swal.fire("No user found!", '', 'error');
        }

      },
      (error) => {
        Swal.fire("Something went wrong", '', 'error');
      }
    )

  }
}
