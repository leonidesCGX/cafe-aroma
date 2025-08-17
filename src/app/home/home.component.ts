import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router) {}

  onVerCatalogo() {
    console.log('Navegar al catálogo');
    this.router.navigate(['/catalogo']);
  }

  onVerPromociones() {
    console.log('Navegar a promociones');
  }

  onContactar() {
    console.log('Navegar a contacto');
  }

  onExplorarMenu() {
    console.log('Navegar al menú');
    this.router.navigate(['/catalogo']);
  }
}
