import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ReceiverComponent } from './receiver/receiver.component';
import {HttpClientModule} from '@angular/common/http'
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { TransferTypeComponent } from './transfer-type/transfer-type.component';
import { TransactionComponent } from './transaction/transaction.component';
import { SenderComponent } from './sender/sender.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceiverComponent,
    WelcomeComponent,
    TransferTypeComponent,
    TransactionComponent,
    SenderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AutocompleteLibModule,
    HttpClientModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
