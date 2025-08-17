import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promotions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promotions.component.html',
  styleUrl: './promotions.component.scss'
})
export class PromotionsComponent {

  constructor(private router: Router) {}

  onVerCatalogo() {
    console.log('Navegar al catálogo');
    this.router.navigate(['/catalogo']);
  }

  onContactar() {
    console.log('Navegar a contacto');
    this.router.navigate(['/contacto']);
  }

  onVerOferta(promotion: string) {
    console.log('Ver oferta:', promotion);
  }
}
