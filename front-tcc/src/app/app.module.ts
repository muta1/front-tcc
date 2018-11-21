import { BlocosAnterioresPage } from './../pages/blocos-anteriores/blocos-anteriores';
import { TodosContratosPage } from './../pages/todos-contratos/todos-contratos';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContratosPage } from '../pages/contratos/contratos';
import { ContratosDetalhesPage } from './../pages/contratos-detalhes/contratos-detalhes';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContratosPage,
    ContratosDetalhesPage,
    TodosContratosPage,
    BlocosAnterioresPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContratosPage,
    ContratosDetalhesPage,
    TodosContratosPage,
    BlocosAnterioresPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
