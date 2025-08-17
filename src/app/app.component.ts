import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Café Aroma';
  currentRoute = '/inicio';
  isMobileMenuOpen = false;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentRoute = event.url;
      this.isMobileMenuOpen = false;
    });
  }

  isRouteActive(route: string): boolean {
    if (route === '/inicio') {
      return this.currentRoute === '/inicio' || this.currentRoute === '/';
    }
    return this.currentRoute === route;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  onVerCatalogo() {
    console.log('Navegar al catálogo');
    this.router.navigate(['/catalogo']);
  }

  onVerPromociones() {
    console.log('Navegar a promociones');
    this.router.navigate(['/promociones']);
  }

  onContactar() {
    console.log('Navegar a contacto');
  }

  onExplorarMenu() {
    console.log('Navegar al menú');
    this.router.navigate(['/catalogo']);
  }

  onNavegarInicio() {
    this.router.navigate(['/inicio']);
  }

  onNavegarCatalogo() {
    console.log('Navegar a promociones');
    this.router.navigate(['/catalogo']);
  }

  onNavegarPromociones() {
    console.log('Navegar a promociones');
    this.router.navigate(['/promociones']);
  }

  onNavegarContacto() {
    console.log('Navegar a contacto');
    this.router.navigate(['/contacto']);
  }

  onNavegarTestimonios() {
    console.log('Navegar a testimonios');
    this.router.navigate(['/testimonios']);
  }
}
