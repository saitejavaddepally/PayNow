import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { MatSelectSearchModule } from 'mat-select-search';

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
import { Ng2CompleterModule } from 'ng2-completer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgSelectModule } from '@ng-select/ng-select';
import { ShutdownComponent } from './components/shutdown/shutdown.component';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';
import { NgxSpinnerModule } from 'ngx-spinner';

interface NgxSpinnerConfig {
  type?: string;
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceiverComponent,
    WelcomeComponent,
    TransferTypeComponent,
    TransactionComponent,
    SenderComponent,
    ShutdownComponent,
    NumbersOnlyDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgSelectModule,
    AppRoutingModule,
    AutocompleteLibModule,
    HttpClientModule,
    MatAutocompleteModule,
    Ng2CompleterModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectSearchModule,
    NgxSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
