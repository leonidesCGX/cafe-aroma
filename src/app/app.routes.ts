import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { path: 'catalogo', component: CatalogComponent },
  { path: 'promociones', component: PromotionsComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', redirectTo: '/inicio' }
];
