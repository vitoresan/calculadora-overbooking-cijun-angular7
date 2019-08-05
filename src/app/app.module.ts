import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IdadePIComponent } from './idade-pi/idade-pi.component';
import { RotaPIComponent } from './rota-pi/rota-pi.component';
import { DiaSemanaPIComponent } from './dia-semana-pi/dia-semana-pi.component';
import { ViagemComponent } from './viagem/viagem.component';
import { OverbookingComponent } from './overbooking/overbooking.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IdadePIComponent,
    RotaPIComponent,
    DiaSemanaPIComponent,
    ViagemComponent,
    OverbookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
