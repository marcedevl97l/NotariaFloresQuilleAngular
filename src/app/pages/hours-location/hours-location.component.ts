import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInOnScrollDirective } from '../../components/fade-in-on-scroll.directive';

@Component({
  selector: 'app-hours-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <section
      class="relative bg-gradient-to-br from-notaria-blue to-notaria-blue/90 text-white overflow-hidden"
    >
      <!-- Logo difuminado de fondo -->
      <div class="absolute inset-0 opacity-5">
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <img
            src="assets/images/logonuevo.svg"
            alt="Logo Notaría"
            class="w-96 h-96 object-contain"
          />
        </div>
      </div>
      <div class="container mx-auto px-4 py-20 text-center relative z-10">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
          Horarios y Ubicación
        </h1>
        <p
          class="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto animate-fade-in-up animation-delay-200"
        >
          Encuentre nuestros horarios de atención y la ubicación exacta de la
          notaría.
        </p>
      </div>
    </section>

    <!-- Horarios -->
    <section class="py-20 bg-gradient-to-br from-white to-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in-up">
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Horarios de Atención
          </h2>
          <p class="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Estamos disponibles para atenderle en los siguientes horarios
          </p>
        </div>
        <div class="max-w-5xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div
              class="group bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 animate-fade-in-up animation-delay-300"
            >
              <h3
                class="text-3xl font-bold text-gray-900 mb-8 flex items-center space-x-4"
              >
                <i class="fas fa-clock text-notaria-blue text-4xl"></i>
                <span>Horarios Regulares</span>
              </h3>
              <div class="space-y-6">
                <div
                  class="flex justify-between items-center py-4 px-6 bg-gradient-to-r from-notaria-blue/5 to-notaria-blue/10 rounded-xl hover:from-notaria-blue/10 hover:to-notaria-blue/20 transition-all duration-300 border border-notaria-blue/20"
                >
                  <span class="font-semibold text-gray-900 text-lg"
                    >Lunes - Viernes</span
                  >
                  <span class="text-notaria-blue font-bold text-xl"
                    >8:30 AM - 1:30 PM</span
                  >
                </div>
                <div
                  class="flex justify-between items-center py-4 px-6 bg-gradient-to-r from-notaria-blue/5 to-notaria-blue/10 rounded-xl hover:from-notaria-blue/10 hover:to-notaria-blue/20 transition-all duration-300 border border-notaria-blue/20"
                >
                  <span class="font-semibold text-gray-900 text-lg"
                    >Sábados</span
                  >
                  <span class="text-notaria-blue font-bold text-xl"
                    >8:30 AM - 1:30 PM</span
                  >
                </div>
                <div
                  class="flex justify-between items-center py-4 px-6 bg-gradient-to-r from-red-50 to-red-100 rounded-xl border border-red-200"
                >
                  <span class="font-semibold text-gray-900 text-lg"
                    >Domingos</span
                  >
                  <span class="text-red-600 font-bold text-xl">Cerrado</span>
                </div>
              </div>
              <div
                class="mt-8 p-6 bg-gradient-to-br from-notaria-blue/5 to-notaria-blue/10 rounded-xl border border-notaria-blue/20"
              >
                <p class="text-lg text-notaria-blue/90 leading-relaxed">
                  <i class="fas fa-info-circle text-notaria-blue mr-2"></i>
                  <strong>Nota:</strong> Para casos urgentes fuera de horario,
                  puede contactarnos por teléfono o email.
                </p>
              </div>
            </div>
            <div
              class="group bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 animate-fade-in-up animation-delay-400"
            >
              <h3
                class="text-3xl font-bold text-gray-900 mb-8 flex items-center space-x-4"
              >
                <i class="fas fa-star text-notaria-blue text-4xl"></i>
                <span>Servicios Especiales</span>
              </h3>
              <div class="space-y-6">
                <div
                  class="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl hover:from-green-100 hover:to-green-200 transition-all duration-300 border border-green-200"
                >
                  <div
                    class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  >
                    <i class="fas fa-bolt text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 text-lg mb-2">
                      Servicio Exprés
                    </h4>
                    <p class="text-gray-600">Documentos urgentes en 24 horas</p>
                  </div>
                </div>
                <div
                  class="flex items-start space-x-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl hover:from-purple-100 hover:to-purple-200 transition-all duration-300 border border-purple-200"
                >
                  <div
                    class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  >
                    <i class="fas fa-home text-purple-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 text-lg mb-2">
                      Atención a Domicilio
                    </h4>
                    <p class="text-gray-600">
                      Para casos especiales y personas con movilidad reducida
                    </p>
                  </div>
                </div>
                <div
                  class="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all duration-300 border border-blue-200"
                >
                  <div
                    class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  >
                    <i class="fas fa-laptop text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 text-lg mb-2">
                      Consultas Online
                    </h4>
                    <p class="text-gray-600">
                      Asesoría previa por email o WhatsApp
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ubicación -->
    <section
      class="bg-gradient-to-br from-gray-50 to-white py-20 animate-fade-in-up"
    >
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in-up animation-delay-200">
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestra Ubicación
          </h2>
          <p class="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Encuéntrenos en una ubicación céntrica y de fácil acceso
          </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div class="space-y-8">
            <div
              class="group bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-all duration-500 border border-gray-100 animate-fade-in-up animation-delay-300"
            >
              <h3
                class="text-3xl font-bold text-gray-900 mb-8 flex items-center space-x-4"
              >
                <i class="fas fa-address-card text-notaria-blue text-4xl"></i>
                <span>Información de Contacto</span>
              </h3>
              <div class="space-y-6">
                <div
                  class="flex items-start space-x-4 p-4 bg-gradient-to-r from-notaria-blue/5 to-notaria-blue/10 rounded-xl hover:from-notaria-blue/10 hover:to-notaria-blue/20 transition-all duration-300 border border-notaria-blue/20"
                >
                  <div
                    class="w-12 h-12 bg-notaria-blue/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  >
                    <i
                      class="fas fa-map-marker-alt text-notaria-blue text-xl"
                    ></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 text-lg mb-2">
                      Dirección
                    </h4>
                    <p class="text-gray-600 text-lg">
                      Av. Principal 123, Centro Comercial<br />Lima, Perú
                    </p>
                  </div>
                </div>
                <div
                  class="flex items-start space-x-4 p-4 bg-gradient-to-r from-notaria-blue/5 to-notaria-blue/10 rounded-xl hover:from-notaria-blue/10 hover:to-notaria-blue/20 transition-all duration-300 border border-notaria-blue/20"
                >
                  <div
                    class="w-12 h-12 bg-notaria-blue/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  >
                    <i class="fas fa-phone text-notaria-blue text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 text-lg mb-2">
                      Teléfono
                    </h4>
                    <p class="text-gray-600 text-lg">(01) 234-5678</p>
                  </div>
                </div>
                <div
                  class="flex items-start space-x-4 p-4 bg-gradient-to-r from-notaria-blue/5 to-notaria-blue/10 rounded-xl hover:from-notaria-blue/10 hover:to-notaria-blue/20 transition-all duration-300 border border-notaria-blue/20"
                >
                  <div
                    class="w-12 h-12 bg-notaria-blue/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  >
                    <i class="fas fa-envelope text-notaria-blue text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 text-lg mb-2">
                      Email
                    </h4>
                    <p class="text-gray-600 text-lg">
                      contacto&#64;notariafloresquille.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="group bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-all duration-500 border border-gray-100 animate-fade-in-up animation-delay-400"
            >
              <h3
                class="text-3xl font-bold text-gray-900 mb-8 flex items-center space-x-4"
              >
                <i class="fas fa-route text-notaria-blue text-4xl"></i>
                <span>Cómo Llegar</span>
              </h3>
              <div class="space-y-6">
                <div
                  class="p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200"
                >
                  <h4
                    class="font-semibold text-green-700 text-xl mb-4 flex items-center space-x-3"
                  >
                    <i class="fas fa-bus text-green-600"></i>
                    <span>En Transporte Público:</span>
                  </h4>
                  <ul class="text-gray-700 space-y-3 text-lg">
                    <li class="flex items-center space-x-3">
                      <i class="fas fa-check-circle text-green-500"></i>
                      <span>Metropolitano: Estación Central</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <i class="fas fa-check-circle text-green-500"></i>
                      <span>Metro de Lima: Estación Plaza Mayor</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <i class="fas fa-check-circle text-green-500"></i>
                      <span>Buses: Líneas 301, 302, 303</span>
                    </li>
                  </ul>
                </div>
                <div
                  class="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200"
                >
                  <h4
                    class="font-semibold text-blue-700 text-xl mb-4 flex items-center space-x-3"
                  >
                    <i class="fas fa-car text-blue-600"></i>
                    <span>En Vehículo Particular:</span>
                  </h4>
                  <ul class="text-gray-700 space-y-3 text-lg">
                    <li class="flex items-center space-x-3">
                      <i class="fas fa-check-circle text-blue-500"></i>
                      <span
                        >Estacionamiento disponible en el centro comercial</span
                      >
                    </li>
                    <li class="flex items-center space-x-3">
                      <i class="fas fa-check-circle text-blue-500"></i>
                      <span>Zona de parqueo gratuito por 2 horas</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <i class="fas fa-check-circle text-blue-500"></i>
                      <span>Acceso desde Av. Principal y Jr. Comercial</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            class="group bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-all duration-500 border border-gray-100 animate-fade-in-up animation-delay-500"
          >
            <h3
              class="text-3xl font-bold text-gray-900 mb-8 flex items-center space-x-4"
            >
              <i class="fas fa-map text-notaria-blue text-4xl"></i>
              <span>Mapa de Ubicación</span>
            </h3>
            <div
              class="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-96 flex items-center justify-center group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-500"
            >
              <div class="text-center">
                <i
                  class="fas fa-map-marker-alt text-gray-400 text-6xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                ></i>
                <p class="text-gray-600 text-xl mb-2">
                  Mapa interactivo de Google Maps
                </p>
                <p class="text-gray-500 text-lg mb-6">
                  Av. Principal 123, Centro Comercial
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  class="group inline-flex items-center space-x-3 bg-notaria-blue text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-notaria-blue/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <i class="fas fa-external-link-alt"></i>
                  <span>Ver en Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Instalaciones -->
    <section class="py-20 bg-gradient-to-br from-white to-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in-up">
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestras Instalaciones
          </h2>
          <p class="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Contamos con instalaciones modernas y cómodas para brindarle el
            mejor servicio
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            class="group text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 animate-fade-in-up animation-delay-300"
          >
            <div
              class="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <i class="fas fa-couch text-green-600 text-3xl"></i>
            </div>
            <h3
              class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors"
            >
              Sala de Espera
            </h3>
            <p class="text-gray-600 text-lg leading-relaxed">
              Área cómoda con asientos y WiFi gratuito
            </p>
          </div>
          <div
            class="group text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 animate-fade-in-up animation-delay-400"
          >
            <div
              class="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <i class="fas fa-building text-blue-600 text-3xl"></i>
            </div>
            <h3
              class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors"
            >
              Oficinas Privadas
            </h3>
            <p class="text-gray-600 text-lg leading-relaxed">
              Espacios confidenciales para sus trámites
            </p>
          </div>
          <div
            class="group text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 animate-fade-in-up animation-delay-500"
          >
            <div
              class="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <i class="fas fa-parking text-purple-600 text-3xl"></i>
            </div>
            <h3
              class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors"
            >
              Estacionamiento
            </h3>
            <p class="text-gray-600 text-lg leading-relaxed">
              Parqueo gratuito para nuestros clientes
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section
      class="relative bg-gradient-to-br from-notaria-blue to-notaria-blue/90 text-white py-20 overflow-hidden"
    >
      <!-- Logo difuminado de fondo -->
      <div class="absolute inset-0 opacity-5">
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <img
            src="assets/images/logonuevo.svg"
            alt="Logo Notaría"
            class="w-96 h-96 object-contain"
          />
        </div>
      </div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <h2 class="text-3xl md:text-5xl font-bold mb-8 animate-fade-in-up">
          ¿Listo para Visitarnos?
        </h2>
        <p
          class="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto animate-fade-in-up animation-delay-200"
        >
          Agende su cita o contáctenos para cualquier consulta sobre nuestros
          servicios
        </p>
        <div
          class="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-400"
        >
          <a
            href="tel:(01) 234-5678"
            class="group bg-white text-notaria-blue px-10 py-4 rounded-xl font-semibold text-lg hover:bg-notaria-blue/10 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
          >
            <i class="fas fa-phone text-xl"></i>
            <span>Llamar para Agendar</span>
          </a>
          <a
            href="mailto:contacto&#64;notariafloresquille.com"
            class="group border-2 border-white text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-notaria-blue hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
          >
            <i class="fas fa-envelope text-xl"></i>
            <span>Enviar Email</span>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class HoursLocationComponent {}
