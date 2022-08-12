import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css'],
})
export class SenderComponent implements OnInit {
  accountNumber: string = '87139550565094';
  isError = false;
  constructor(
    private accountService: AccountService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

  }

  nextPage() {

    this.accountService.validateAccountNumber(this.accountNumber).subscribe(
      (data) => {

        if(data['isFound'] != null){
          this.router.navigate(['receiver']);
        }
        else{
          alert("No user found!");
        }

      }, 
      (error) => {
        alert("Something went wrong");
      }
    )

  }
}
