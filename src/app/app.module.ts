import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material.module';
// import { RepositoriesComponent } from './components/repositories/repositories.component';

// import { RepositoryDetailComponent } from './components/repositories/repository-detail/repository-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TransferComponent } from './components/transfer/transfer.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, TransferComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
