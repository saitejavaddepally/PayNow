import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceiverComponent } from './receiver/receiver.component';
import { SenderComponent } from './sender/sender.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
