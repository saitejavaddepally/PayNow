import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { ReceiverService } from '../services/receiver.service';
import { SearchService } from '../services/search.service';
import { SendService } from '../services/send.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService, Spinner } from 'ngx-spinner';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {


  senderDetails!: any;
  receiverDetails!: any;
  amount!: any;
  name!: any;
  code: any;
  isBankSelected = false;
  selectedBank!: string;
  transactionType!: string;
  typeSelected!: string;
  id!: string;
  receiverBanks = [

  ];
  constructor(private router: Router,
    private accountService: AccountService,
    private receiverService: ReceiverService,
    private sendService: SendService,
    private activatedRoute: ActivatedRoute, private searchService: SearchService, private http: HttpClient, private spinner: NgxSpinnerService) {
  }

  async ngOnInit() {
    this.typeSelected = "line-spin-fade"

    this.activatedRoute.queryParams.subscribe(
      params => {

        console.log(params);

        this.transactionType = params['type'];
        this.id = params['id'];

      }
    )



    await this.searchService.searchBanksAndGetBic().subscribe((data) => {
      this.receiverBanks = data;
    },
      (error) => {
        console.log(error.message)
      });

    // get sender details

    await this.accountService.validateAccountNumber(this.id).subscribe(
      (data) => {
        console.log(data);
        this.senderDetails = data['isFound'];
      }
    )
  }


  async checkBalance() {
    Swal.fire("Your balance is " + this.senderDetails['balance'], '', 'success');

  }

  async nextPage() {
    // get receiver details

    this.spinner.show();

    await this.receiverService.validateAccountNumber(this.selectedBank).subscribe(
      (data) => {
        this.receiverDetails = data['isFound'];

        console.log(this.senderDetails, this.receiverDetails, this.amount, this.transactionType);


        this.sendService.sendMoney(this.senderDetails, this.receiverDetails, parseInt(this.amount), this.transactionType, this.code, this.name).subscribe(
          (data) => {

            console.log(data);

            if (data.code === "400") {
              Swal.fire("Sorry insufficient balance", '', 'error');
              this.router.navigate(['/transaction']);
              return;
            }

            if (data.code === "201") {
              this.spinner.hide();
              Swal.fire(data.message);
              return;
            }

            Swal.fire("Transaction successful", '', 'success');
            this.spinner.hide();
            this.router.navigate(['/transaction']);

          },
          (error) => {
            this.spinner.hide();
            alert("something went wrong");
          }
        )
      }
    )





  }

}
