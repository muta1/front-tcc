import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodosContratosPage } from './todos-contratos';

@NgModule({
  declarations: [
    TodosContratosPage,
  ],
  imports: [
    IonicPageModule.forChild(TodosContratosPage),
  ],
})
export class TodosContratosPageModule {}
