import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faCalendarAlt, 
  faFileAlt, 
  faShieldAlt, 
  faBalanceScale, 
  faFileContract, 
  faBookOpen, 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope,
  faArrowRight,
  faCheckCircle,
  faDollarSign,
  faClock,
  faAward,
  faUsers
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  template: `
    <!-- Hero Section -->
    <section
      class="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <!-- Background Image with Overlay -->
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style="background-image: url('assets/images/coverportada.jpg');"
      >
        <div
          class="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"
        ></div>
      </div>

      <!-- Hero Content -->
      <div class="relative z-10 container mx-auto px-4 py-20">
        <div class="max-w-6xl mx-auto text-center text-white">
          <div class="mb-8">
            <h1
              class="text-5xl md:text-7xl lg:text-9xl font-bold mb-6 leading-tight animate-fade-in"
            >
              Notaría
              <span
                class="block text-4xl md:text-6xl lg:text-8xl font-light mt-1"
                >Flores Quille</span
              >
            </h1>
            <div class="w-32 h-1 bg-notaria-wine mx-auto mb-8 animate-slide-in"></div>
          </div>

          <!-- Información mejorada -->
          <div class="mb-12">
            <p
              class="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 leading-relaxed max-w-5xl mx-auto font-light animate-fade-in-delay"
            >
              Más de 20 años de experiencia en servicios notariales
              profesionales, comprometidos con la excelencia, la confianza y la
              seriedad que nuestros clientes merecen.
            </p>

            <!-- Información adicional -->
            <div
              class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8"
            >
              <div
                class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 animate-fade-in-delay-2"
              >
                <div class="text-2xl font-bold text-notaria-wine mb-2">20+</div>
                <div class="text-white/90">Años de Experiencia</div>
              </div>
              <div
                class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 animate-fade-in-delay-2"
                style="animation-delay: 0.2s;"
              >
                <div class="text-2xl font-bold text-notaria-wine mb-2">
                  1000+
                </div>
                <div class="text-white/90">Clientes Satisfechos</div>
              </div>
              <div
                class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 animate-fade-in-delay-2"
                style="animation-delay: 0.4s;"
              >
                <div class="text-2xl font-bold text-notaria-wine mb-2">
                  100%
                </div>
                <div class="text-white/90">Confiabilidad Garantizada</div>
              </div>
            </div>

            <p
              class="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-2"
              style="animation-delay: 0.6s;"
            >
              Servicios notariales integrales con atención personalizada,
              tecnología avanzada y cumplimiento estricto de las normativas
              legales vigentes.
            </p>
          </div>

          <div
            class="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delay-2"
            style="animation-delay: 0.8s;"
          >
            <a
              routerLink="/contacto"
              class="group bg-notaria-wine text-white px-8 py-4 rounded-full font-semibold hover:bg-notaria-wine/90 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
            >
              <span>Solicitar Cita</span>
              <fa-icon 
                [icon]="faCalendarAlt" 
                class="fa-lg group-hover:translate-x-1 transition-transform">
              </fa-icon>
            </a>
            <a
              routerLink="/servicios"
              class="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-notaria-blue transition-all duration-300 text-lg flex items-center gap-2"
            >
              <span>Conocer Servicios</span>
              <fa-icon 
                [icon]="faFileAlt" 
                class="fa-lg group-hover:translate-x-1 transition-transform ">
              </fa-icon>
            </a>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div
          class="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <div class="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-white fadeInOnScroll">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2
            class="text-3xl md:text-4xl lg:text-5xl font-bold text-notaria-blue mb-6 animate-fade-in"
          >
            Servicios Principales
          </h2>
          <div class="w-16 h-1 bg-notaria-wine mx-auto mb-6 animate-slide-in"></div>
          <p
            class="text-lg md:text-xl text-notaria-blue/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay"
          >
            Ofrecemos los servicios notariales más importantes con la máxima
            profesionalidad y seriedad
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <!-- Service 1: Document Authentication -->
          <div
            class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden animate-fade-in-delay-2"
            style="animation-delay: 0.2s;"
          >
            <div class="p-8">
              <div class="flex items-start space-x-6">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-notaria-wine/10 to-notaria-wine/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                >
                  <fa-icon 
                    [icon]="faShieldAlt" 
                    class="fa-2xl text-notaria-wine">
                  </fa-icon>
                </div>
                <div class="flex-1">
                  <h3
                    class="text-2xl font-bold mb-4 text-notaria-blue group-hover:text-notaria-wine transition-colors"
                  >
                    Autenticación de Documentos
                  </h3>
                  <p class="text-notaria-blue/80 mb-6 leading-relaxed">
                    Certificamos la autenticidad de documentos, firmas y copias
                    para uso legal y oficial. Garantizamos la validez y
                    reconocimiento de sus documentos en cualquier institución.
                  </p>
                  <ul class="space-y-3 text-notaria-blue/70">
                    <li class="flex items-center space-x-3">
                      <div
                        class="w-2 h-2 bg-notaria-wine rounded-full flex-shrink-0"
                      ></div>
                      <span>Certificación de firmas</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <div
                        class="w-2 h-2 bg-notaria-wine rounded-full flex-shrink-0"
                      ></div>
                      <span>Actas de constatación de redes sociales y documentos electrónicos</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <div
                        class="w-2 h-2 bg-notaria-wine rounded-full flex-shrink-0"
                      ></div>
                      <span>Legalización de documentos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Service 2: Notarial Powers -->
          <div
            class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden animate-fade-in-delay-2"
            style="animation-delay: 0.4s;"
          >
            <div class="p-8">
              <div class="flex items-start space-x-6">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-notaria-wine/10 to-notaria-wine/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                >
                  <fa-icon 
                    [icon]="faBalanceScale" 
                    class=" fa-2xl text-notaria-wine">
                  </fa-icon>
                </div>
                <div class="flex-1">
                  <h3
                    class="text-2xl font-bold mb-4 text-notaria-blue group-hover:text-notaria-wine transition-colors"
                  >
                    Poderes Notariales
                  </h3>
                  <p class="text-notaria-blue/80 mb-6 leading-relaxed">
                    Otorgamos poderes especiales y generales para representación
                    legal y gestión de trámites. Asesoramos sobre el tipo de
                    poder más adecuado para sus necesidades específicas.
                  </p>
                  <ul class="space-y-3 text-notaria-blue/70">
                    <li class="flex items-center space-x-3">
                      <div
                        class="w-2 h-2 bg-notaria-wine rounded-full flex-shrink-0"
                      ></div>
                      <span>Poderes generales</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <div
                        class="w-2 h-2 bg-notaria-wine rounded-full flex-shrink-0"
                      ></div>
                      <span>Desalojos notariales</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <div
                        class="w-2 h-2 bg-notaria-wine rounded-full flex-shrink-0"
                      ></div>
                      <span>Poderes para trámites específicos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Service 3: Contracts and Agreements -->
          <div
            class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden animate-fade-in-delay-2"
            style="animation-delay: 0.6s;"
          >
            <div class="p-8">
              <div class="flex items-start space-x-6">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-notaria-wine/10 to-notaria-wine/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                >
                  <fa-icon 
                    [icon]="faFileContract" 
                    class="fa-2xl text-notaria-wine">
                  </fa-icon>
                </div>
                <div class="flex-1">
                  <h3
                    class="text-2xl font-bold mb-4 text-notaria-blue group-hover:text-notaria-wine transition-colors"
                  >
                    Contratos y Convenios
                  </h3>
                  <p class="text-notaria-blue/80 mb-6 leading-relaxed">
                    Asesoramos y certificamos contratos de compraventa,
                    arrendamiento y otros convenios legales. Garantizamos que
                    sus acuerdos cumplan con todos los requisitos legales
                    vigentes.
                  </p>
                  <ul class="space-y-3 text-notaria-blue/70">
                    <li class="flex items-center space-x-3">
                      <div
                        class="w-2 h-2 bg-notaria-wine rounded-full flex-shrink-0"
                      ></div>
                      <span>Contratos de compraventa</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <div
                        class="w-2 h-2 bg-notaria-wine rounded-full flex-shrink-0"
                      ></div>
                      <span>Constitución de empresas y asociaciones</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <div
                        class="w-2 h-2 bg-notaria-wine rounded-full flex-shrink-0"
                      ></div>
                      <span>Transferencias vehiculares</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Service 4: Wills and Successions -->
          <div
            class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden animate-fade-in-delay-2"
            style="animation-delay: 0.8s;"
          >
            <div class="p-8">
              <div class="flex items-start space-x-6">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-notaria-wine/10 to-notaria-wine/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                >
                  <fa-icon 
                    [icon]="faBookOpen" 
                    class="fa-2xl text-notaria-wine">
                  </fa-icon>
                </div>
                <div class="flex-1">
                  <h3
                    class="text-2xl font-bold mb-4 text-notaria-blue group-hover:text-notaria-wine transition-colors"
                  >
                    Testamentos y Sucesiones
                  </h3>
                  <p class="text-notaria-blue/80 mb-6 leading-relaxed">
                    Asesoramos en la elaboración de testamentos y gestionamos
                    procesos de sucesión. Protegemos el futuro de su patrimonio
                    y el bienestar de sus seres queridos.
                  </p>
                  <ul class="space-y-3 text-notaria-blue/70">
                    <li class="flex items-center space-x-3">
                      <div
                        class="w-2 h-2 bg-notaria-wine rounded-full flex-shrink-0"
                      ></div>
                      <span>Elaboración de testamentos</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <div
                        class="w-2 h-2 bg-notaria-wine rounded-full flex-shrink-0"
                      ></div>
                      <span>Procesos de sucesión</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <div
                        class="w-2 h-2 bg-notaria-wine rounded-full flex-shrink-0"
                      ></div>
                      <span>Asesoría en planificación patrimonial</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center">
          <a
            routerLink="/servicios"
            class="group inline-flex items-center gap-3 bg-notaria-wine text-white px-10 py-4 rounded-full font-semibold hover:bg-notaria-wine/90 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>Ver Todos los Servicios</span>
            <fa-icon 
              [icon]="faArrowRight" 
              class="fa-lg group-hover:translate-x-1 transition-transform">
            </fa-icon>
          </a>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section
      class="py-20 bg-gradient-to-r from-notaria-blue to-notaria-blue/90 text-white relative overflow-hidden fadeInOnScroll"
    >
      <!-- Background Logo -->
      <div class="absolute inset-0 flex items-center justify-center opacity-5">
        <img 
          src="assets/images/logonuevo.svg" 
          alt="Logo Notaría Flores Quille" 
          class="w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] object-cover"
        >
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
            ¿Por qué elegirnos?
          </h2>
          <div class="w-16 h-1 bg-notaria-wine mx-auto mb-6 animate-slide-in"></div>
          <p
            class="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay"
          >
            Más de dos décadas de experiencia y compromiso con la excelencia en
            servicios notariales
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center group animate-fade-in-delay-2" style="animation-delay: 0.2s;">
            <div
              class="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm"
            >
              <span class="text-4xl font-bold text-notaria-wine">20+</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">Años de Experiencia</h3>
            <p class="text-white/80 leading-relaxed">
              Más de dos décadas brindando servicios notariales de calidad y
              confianza
            </p>
          </div>

          <div class="text-center group animate-fade-in-delay-2" style="animation-delay: 0.4s;">
            <div
              class="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm"
            >
              <span class="text-4xl font-bold text-notaria-wine">100+</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">Clientes Satisfechos</h3>
            <p class="text-white/80 leading-relaxed">
              Miles de clientes han confiado en nuestros servicios profesionales
            </p>
          </div>

          <div class="text-center group animate-fade-in-delay-2" style="animation-delay: 0.6s;">
            <div
              class="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm"
            >
              <span class="text-4xl font-bold text-notaria-wine">24h</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">Respuesta Rápida</h3>
            <p class="text-white/80 leading-relaxed">
              Respondemos consultas y solicitudes en menos de 24 horas
            </p>
          </div>

          <div class="text-center group animate-fade-in-delay-2" style="animation-delay: 0.8s;">
            <div
              class="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm"
            >
              <span class="text-4xl font-bold text-notaria-wine">100%</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">Confiabilidad</h3>
            <p class="text-white/80 leading-relaxed">
              Garantizamos la seguridad y confidencialidad de sus documentos
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Information -->
    <section class="py-20 bg-white fadeInOnScroll">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2
            class="text-3xl md:text-4xl lg:text-5xl font-bold text-notaria-blue mb-6 animate-fade-in"
          >
            Información de Contacto
          </h2>
          <div class="w-16 h-1 bg-notaria-wine mx-auto mb-6 animate-slide-in"></div>
          <p
            class="text-lg md:text-xl text-notaria-blue/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay"
          >
            Estamos aquí para atenderle con la profesionalidad que merece
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            class="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center animate-fade-in-delay-2"
            style="animation-delay: 0.2s;"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-notaria-blue/10 to-notaria-blue/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <fa-icon 
                [icon]="faMapMarkerAlt" 
                class="fa-2xl text-notaria-blue">
              </fa-icon>
            </div>
            <h3 class="text-xl font-semibold mb-4 text-notaria-blue">
              Ubicación
            </h3>
            <p class="text-notaria-blue/80 mb-2">
            Av. Universitaria 6822 – segundo piso – Comas
            </p>
            <p class="text-notaria-blue/80">Perú - Lima</p>
          </div>

          <div
            class="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center animate-fade-in-delay-2"
            style="animation-delay: 0.4s;"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-notaria-blue/10 to-notaria-blue/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <fa-icon 
                [icon]="faPhone" 
                class="fa-2xl text-notaria-blue">
              </fa-icon>
            </div>
            <h3 class="text-xl font-semibold mb-4 text-notaria-blue">
              Teléfono
            </h3>
            <p class="text-notaria-blue/80 mb-2">+51 977458056</p>
            <p class="text-notaria-blue/80">(01) 12329738</p>
          </div>

          <div
            class="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center animate-fade-in-delay-2"
            style="animation-delay: 0.6s;"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-notaria-blue/10 to-notaria-blue/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <fa-icon 
                [icon]="faEnvelope" 
                class="fa-2xl text-notaria-blue">
              </fa-icon>
            </div>
            <h3 class="text-xl font-semibold mb-4 text-notaria-blue">Email</h3>
            <p class="text-notaria-blue/80 mb-2">
              contacto&#64;notariafloresquille.com
            </p>
            <p class="text-notaria-blue/80">info&#64;notariafloresquille.com</p>
          </div>
        </div>

        <div class="text-center mt-12">
          <a
            routerLink="/contacto"
            class="group inline-flex items-center gap-3 bg-notaria-wine text-white px-10 py-4 rounded-full font-semibold hover:bg-notaria-wine/90 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105 animate-fade-in-delay-2"
            style="animation-delay: 0.8s;"
          >
            <span>Contactar Ahora</span>
            <fa-icon 
              [icon]="faArrowRight" 
              class="fa-lg group-hover:translate-x-1 transition-transform">
            </fa-icon>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class HomeComponent {
  // FontAwesome icons
  faCalendarAlt = faCalendarAlt;
  faFileAlt = faFileAlt;
  faShieldAlt = faShieldAlt;
  faBalanceScale = faBalanceScale;
  faFileContract = faFileContract;
  faBookOpen = faBookOpen;
  faMapMarkerAlt = faMapMarkerAlt;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faArrowRight = faArrowRight;
  faCheckCircle = faCheckCircle;
  faDollarSign = faDollarSign;
  faClock = faClock;
  faAward = faAward;
  faUsers = faUsers;
}
