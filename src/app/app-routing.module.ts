import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShutdownComponent } from './components/shutdown/shutdown.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { SenderComponent } from './sender/sender.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransferTypeComponent } from './transfer-type/transfer-type.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'type',
    component: TransferTypeComponent,
  },
  {
    path: 'sender',
    component: SenderComponent,
  }
  , {
    path: 'receiver',
    component: ReceiverComponent,
  },
  {
    path: 'transaction',
    component: TransactionComponent,
  },
  {
    path: 'shutdown',
    component: ShutdownComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
