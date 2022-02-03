import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { RepositoriesComponent } from './components/repositories/repositories.component';
// import { RepositoryDetailComponent } from './components/repositories/repository-detail/repository-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TransferComponent } from './components/transfer/transfer.component';

const routes: Routes = [
  { path: '', redirectTo: '/transfer', pathMatch: 'full' },
  {
    path: 'transfer',
    component: TransferComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
