import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { ReceiverService } from '../services/receiver.service';
import { SearchService } from '../services/search.service';
import { SendService } from '../services/send.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {


  senderDetails!: any;
  receiverDetails!: any;
  amount!: any;

  selectedBank!: string;
  transactionType!: string;
  id!: string;
  receiverBanks = [

  ];
  constructor(private router: Router,
    private accountService: AccountService,
    private receiverService: ReceiverService,
    private sendService: SendService,
    private activatedRoute: ActivatedRoute, private searchService: SearchService, private http: HttpClient) { }

  async ngOnInit() {
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

  async nextPage() {
    // get receiver details

    await this.receiverService.validateAccountNumber(this.selectedBank).subscribe(
      (data) => {
        this.receiverDetails = data['isFound'];

        console.log(this.senderDetails, this.receiverDetails, this.amount, this.transactionType);


         this.sendService.sendMoney(this.senderDetails, this.receiverDetails, parseInt(this.amount), this.transactionType).subscribe(
          (data) => {

            console.log(data);

            if(data.code === "400"){
              alert("sorry insufficient balance!");
              return;
            }

            if(data.code === "201"){
              alert(data.message);
              return;
            }

            alert("transaction is successful");
            this.router.navigate(['/transaction']);

          },
          (error) => {
            alert("something went wrong");
          }
        )
      }
    )





  }

}
