import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Testimonial {
  id: number;
  customerName: string;
  occupation: string;
  rating: number;
  testimonial: string;
  visitDate: string;
  avatarUrl: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      id: 1,
      customerName: 'María González',
      occupation: 'Diseñadora UX',
      rating: 5,
      testimonial: 'El mejor café de la ciudad, ambiente increíble y atención perfecta. Definitivamente mi lugar favorito para trabajar.',
      visitDate: 'Hace 2 semanas',
      avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face'
    },
    {
      id: 2,
      customerName: 'Carlos Mendoza',
      occupation: 'Emprendedor',
      rating: 5,
      testimonial: 'Mi lugar favorito para reuniones de trabajo, WiFi rápido y café excepcional. Los clientes siempre quedan impresionados.',
      visitDate: 'Hace 1 mes',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face'
    },
    {
      id: 3,
      customerName: 'Ana Rodríguez',
      occupation: 'Estudiante',
      rating: 5,
      testimonial: 'Perfecto para estudiar, el té chai es mi bebida favorita. Ambiente tranquilo y precios accesibles.',
      visitDate: 'Hace 3 semanas',
      avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face'
    },
    {
      id: 4,
      customerName: 'Luis Torres',
      occupation: 'Profesor',
      rating: 5,
      testimonial: 'Excelente servicio y productos frescos, muy recomendado. El personal es muy amable y atento.',
      visitDate: 'Hace 2 meses',
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face'
    },
    {
      id: 5,
      customerName: 'Sofia Jiménez',
      occupation: 'Artista',
      rating: 5,
      testimonial: 'La decoración es hermosa, me inspira para crear. Los colores y la atmósfera son perfectos para mi proceso creativo.',
      visitDate: 'Hace 1 semana',
      avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face'
    },
    {
      id: 6,
      customerName: 'Roberto Silva',
      occupation: 'Médico',
      rating: 5,
      testimonial: 'El lugar ideal para relajarse después de una jornada intensa. El café de especialidad es excepcional.',
      visitDate: 'Hace 3 meses',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face'
    }
  ];

  constructor(private router: Router) {}

  onVerCatalogo(): void {
    this.router.navigate(['/catalogo']);
  }

  onVerPromociones(): void {
    this.router.navigate(['/promociones']);
  }

  onContactar(): void {
    this.router.navigate(['/contacto']);
  }

  onVolverInicio(): void {
    this.router.navigate(['/inicio']);
  }

  getStars(rating: number): number[] {
    return Array.from({ length: rating }, (_, i) => i);
  }

  getEmptyStars(rating: number): number[] {
    return Array.from({ length: 5 - rating }, (_, i) => i);
  }
}
