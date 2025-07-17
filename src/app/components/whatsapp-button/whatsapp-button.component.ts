import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <a 
      href="https://wa.me/51977458056?text=Hola,%20me%20gustaría%20obtener%20información%20sobre%20sus%20servicios%20notariales%20y%20agendar%20una%20cita"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      <div class="relative">
        <!-- Botón principal -->
        <div class="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-110 transform">
          <fa-icon 
            [icon]="faWhatsapp" 
            class="text-white text-2xl">
          </fa-icon>
        </div>
        
        <!-- Efecto de pulso -->
        <div class="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        
        <!-- Tooltip -->
        <div class="absolute bottom-full right-0 mb-2 px-3 py-2 bg-notaria-blue text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
          ¡Consulta rápida por WhatsApp!
          <div class="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-notaria-blue"></div>
        </div>
      </div>
    </a>
  `,
  styles: []
})
export class WhatsappButtonComponent {
  faWhatsapp = faWhatsapp;
} 