import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './page-catalog/catalog.component';
import { ContactComponent } from './page-contact/contact.component';
import { ServicesComponent } from './page-services/services.component';

const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }