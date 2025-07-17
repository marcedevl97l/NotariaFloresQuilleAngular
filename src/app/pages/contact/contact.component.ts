import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Hero Section -->
    <section class="relative bg-notaria-blue text-white fadeInOnScroll overflow-hidden">
      <!-- Logo difuminado de fondo -->
      <div class="absolute inset-0 opacity-5 pointer-events-none select-none">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src="assets/images/logonuevo.svg" alt="Logo Notaría" class="w-96 h-96 object-contain" />
        </div>
      </div>
      <div class="container mx-auto px-4 py-20 text-center relative z-10">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Contacto</h1>
        <p class="text-xl text-white/80 max-w-3xl mx-auto">
          Comuníquese con nosotros para consultas, citas o información adicional.
        </p>
      </div>
    </section>

    <!-- Información de Contacto y Formulario -->
    <section class="py-16 bg-gray-50 fadeInOnScroll">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <!-- Información de Contacto -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-8">Información de Contacto</h2>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-map-marker-alt text-2xl text-blue-600"></i>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">Dirección</h3>
                  <p class="text-gray-600">Av. Universitaria 6822 – segundo piso – Comas</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-phone-alt text-2xl text-blue-600"></i>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">Teléfono</h3>
                  <p class="text-gray-600">(01) 12329738</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-envelope text-2xl text-blue-600"></i>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <p class="text-gray-600">contacto&#64;notariafloresquille.com</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-clock text-2xl text-blue-600"></i>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">Horarios de Atención</h3>
                  <div class="space-y-1 text-gray-600">
                    <p><strong>Lunes - Viernes:</strong> 8:30 AM - 1:30 PM</p>
                    <p><strong>Sábados:</strong> 8:00 AM - 1:30 PM</p>
                    <p><strong>Domingos:</strong> Cerrado</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Redes Sociales -->
            <div class="mt-8">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Síguenos en Redes Sociales</h3>
              <div class="flex space-x-4">
                <a href="https://www.facebook.com/NotariaFlores.PaginaOficial" target="_blank" class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <i class="fab fa-facebook-f text-white text-lg"></i>
                </a>
                <a href="#" class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <i class="fab fa-twitter text-white text-lg"></i>
                </a>
                <a href="#" class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <i class="fab fa-linkedin-in text-white text-lg"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Formulario de Contacto -->
          <div class="bg-white rounded-lg shadow-lg p-8 fadeInOnScroll">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h2>
            
            <form (ngSubmit)="onSubmit()" #contactForm="ngForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="nombre" class="block text-sm font-medium text-gray-700 mb-2">Nombre Completo *</label>
                  <input 
                    type="text" 
                    id="nombre" 
                    name="nombre"
                    [(ngModel)]="formData.nombre"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu nombre completo">
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    [(ngModel)]="formData.email"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="tu@email.com">
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="telefono" class="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                  <input 
                    type="tel" 
                    id="telefono" 
                    name="telefono"
                    [(ngModel)]="formData.telefono"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(01) 234-5678">
                </div>
                
                <div>
                  <label for="servicio" class="block text-sm font-medium text-gray-700 mb-2">Servicio de Interés</label>
                  <select 
                    id="servicio" 
                    name="servicio"
                    [(ngModel)]="formData.servicio"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Selecciona un servicio</option>
                    <option value="autenticacion">Autenticación de Documentos</option>
                    <option value="poderes">Poderes Notariales</option>
                    <option value="contratos">Contratos y Convenios</option>
                    <option value="testamentos">Testamentos</option>
                    <option value="otros">Otros</option>
                  </select>
                </div>
              </div>

              <div>
                <label for="asunto" class="block text-sm font-medium text-gray-700 mb-2">Asunto *</label>
                <input 
                  type="text" 
                  id="asunto" 
                  name="asunto"
                  [(ngModel)]="formData.asunto"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Asunto de tu consulta">
              </div>

              <div>
                <label for="mensaje" class="block text-sm font-medium text-gray-700 mb-2">Mensaje *</label>
                <textarea 
                  id="mensaje" 
                  name="mensaje"
                  [(ngModel)]="formData.mensaje"
                  required
                  rows="5"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe tu consulta o solicitud..."></textarea>
              </div>

              <div class="flex items-center">
                <input 
                  type="checkbox" 
                  id="acepto" 
                  name="acepto"
                  [(ngModel)]="formData.acepto"
                  required
                  class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                <label for="acepto" class="ml-2 text-sm text-gray-700">
                  Acepto que mis datos sean utilizados para contactarme *
                </label>
              </div>

              <button 
                type="submit" 
                [disabled]="!contactForm.form.valid || isSubmitting"
                class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors">
                <span *ngIf="!isSubmitting">Enviar Mensaje</span>
                <span *ngIf="isSubmitting">Enviando...</span>
              </button>
            </form>

            <div *ngIf="message" class="mt-4 p-4 rounded-lg" [ngClass]="messageType === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'">
              {{ message }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mapa -->
    <section class="py-16 bg-white fadeInOnScroll">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Nuestra Ubicación</h2>
          <p class="text-xl text-gray-600">Encuéntranos en el centro de Comas</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <!-- Mapa embebido -->
          <div class="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Av.+Universitaria+6822,+Comas,+Lima,+Peru&output=embed"
              width="100%"
              height="100%"
              style="border:0; min-height: 350px;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Mapa Notaría Flores Quille"
            ></iframe>
          </div>
          <!-- Tarjeta de información adicional -->
          <div class="bg-gray-50 rounded-lg shadow-lg p-8 flex flex-col items-start">
            <h3 class="text-2xl font-bold text-notaria-blue mb-4">¿Cómo llegar?</h3>
            <ul class="text-gray-700 space-y-3 mb-4">
              <li><i class="fas fa-bus text-notaria-wine mr-2"></i> Líneas de bus: 101, 107, 108, 110</li>
              <li><i class="fas fa-car text-notaria-wine mr-2"></i> Estacionamiento disponible en el centro comercial</li>
              <li><i class="fas fa-map-marker-alt text-notaria-wine mr-2"></i> Referencia: Frente a la Universidad XYZ</li>
            </ul>
            <div class="text-gray-600 text-sm">
              <strong>Recomendación:</strong> Llegar con 10 minutos de anticipación para su cita.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-16 bg-gray-50 fadeInOnScroll">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
          <p class="text-xl text-gray-600">Resolvemos tus dudas más comunes</p>
        </div>
        
        <div class="max-w-4xl mx-auto space-y-6">
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">¿Qué documentos necesito para un poder notarial?</h3>
            <p class="text-gray-600">Necesitarás tu DNI vigente, información completa del apoderado y especificar el alcance del poder que deseas otorgar.</p>
          </div>
          
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">¿Cuánto tiempo toma la autenticación de documentos?</h3>
            <p class="text-gray-600">La autenticación de documentos se realiza el mismo día, siempre que tengas todos los requisitos completos.</p>
          </div>
          
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">¿Puedo agendar una cita por teléfono?</h3>
            <p class="text-gray-600">Sí, puedes llamarnos al (01) 234-5678 o completar el formulario de contacto en esta página.</p>
          </div>
          
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">¿Qué métodos de pago aceptan?</h3>
            <p class="text-gray-600">Aceptamos efectivo, transferencias bancarias y tarjetas de crédito/débito para todos nuestros servicios.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ContactComponent {
  formData = {
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    asunto: '',
    mensaje: '',
    acepto: false
  };

  isSubmitting = false;
  message = '';
  messageType: 'success' | 'error' = 'success';

  onSubmit() {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    this.message = '';
    
    // Simular envío del formulario
    setTimeout(() => {
      this.isSubmitting = false;
      this.message = '¡Gracias por tu mensaje! Te contactaremos pronto.';
      this.messageType = 'success';
      
      // Limpiar formulario
      this.formData = {
        nombre: '',
        email: '',
        telefono: '',
        servicio: '',
        asunto: '',
        mensaje: '',
        acepto: false
      };
      
      // Limpiar mensaje después de 5 segundos
      setTimeout(() => {
        this.message = '';
      }, 5000);
    }, 2000);
  }
} 