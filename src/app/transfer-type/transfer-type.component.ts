import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-transfer-type',
  templateUrl: './transfer-type.component.html',
  styleUrls: ['./transfer-type.component.css'],
})
export class TransferTypeComponent implements OnInit {
  typeOfTransaction: string = 'bank';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  nextPage() {
    let navigationExtras: NavigationExtras = {
      state: {
        type: this.typeOfTransaction,
      },
    };

    console.log(navigationExtras);
    this.router.navigate(['sender'], {
      queryParams: { type: this.typeOfTransaction },
    });
  }
}
