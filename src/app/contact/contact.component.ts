import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactForm: ContactForm = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private router: Router) {}

  onSubmitForm() {
    console.log('Formulario enviado:', this.contactForm);
    
    this.contactForm = {
      name: '',
      email: '',
      message: ''
    };
    
    alert('¡Mensaje enviado con éxito! Te responderemos pronto.');
  }

  onVolverInicio() {
    console.log('Volver al inicio');
    this.router.navigate(['/inicio']);
  }

  onVerCatalogo() {
    console.log('Ver catálogo');
    this.router.navigate(['/catalogo']);
  }
}
