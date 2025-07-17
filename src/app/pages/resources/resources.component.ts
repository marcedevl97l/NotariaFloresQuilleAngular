import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInOnScrollDirective } from '../../components/fade-in-on-scroll.directive';

@Component({
  selector: 'app-resources',
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
          Recursos Útiles
        </h1>
        <p
          class="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto animate-fade-in-up animation-delay-200"
        >
          Acceda a enlaces, formatos y recursos de interés para sus trámites
          notariales.
        </p>
      </div>
    </section>

    <!-- Guías Legales -->
    <section class="bg-white py-20 animate-fade-in-up">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in-up animation-delay-200">
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Guías Legales
          </h2>
          <p class="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Documentos informativos para ayudarle a entender mejor los trámites
            notariales
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            class="group bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 animate-fade-in-up animation-delay-300"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-notaria-blue/10 to-notaria-blue/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <i class="fas fa-gavel text-2xl text-notaria-blue"></i>
            </div>
            <h3
              class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors"
            >
              Guía de Poderes Notariales
            </h3>
            <p class="text-gray-600 mb-6 text-lg leading-relaxed">
              Información completa sobre tipos de poderes, requisitos y
              procedimientos.
            </p>
            <a
              href="#"
              class="text-notaria-wine hover:text-notaria-wine/80 font-semibold text-lg group-hover:scale-105 transition-all duration-300"
            >
              Descargar PDF →
            </a>
          </div>

          <div
            class="group bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 animate-fade-in-up animation-delay-400"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-notaria-blue/10 to-notaria-blue/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <i class="fas fa-scroll text-2xl text-notaria-blue"></i>
            </div>
            <h3
              class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors"
            >
              Manual de Testamentos
            </h3>
            <p class="text-gray-600 mb-6 text-lg leading-relaxed">
              Guía práctica para la elaboración de testamentos y planificación
              sucesoria.
            </p>
            <a
              href="#"
              class="text-notaria-wine hover:text-notaria-wine/80 font-semibold text-lg group-hover:scale-105 transition-all duration-300"
            >
              Descargar PDF →
            </a>
          </div>

          <div
            class="group bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 animate-fade-in-up animation-delay-500"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-notaria-blue/10 to-notaria-blue/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <i class="fas fa-file-contract text-2xl text-notaria-blue"></i>
            </div>
            <h3
              class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors"
            >
              Contratos Básicos
            </h3>
            <p class="text-gray-600 mb-6 text-lg leading-relaxed">
              Modelos y explicaciones de contratos comunes como compraventa y
              arrendamiento.
            </p>
            <a
              href="#"
              class="text-notaria-wine hover:text-notaria-wine/80 font-semibold text-lg group-hover:scale-105 transition-all duration-300"
            >
              Descargar PDF →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Enlaces Institucionales -->
    <section
      class="bg-gradient-to-br from-gray-50 to-white py-20 animate-fade-in-up"
    >
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in-up animation-delay-200">
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Enlaces Institucionales
          </h2>
          <p class="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Enlaces directos a instituciones públicas y entidades relacionadas
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            class="group bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 animate-fade-in-up animation-delay-300"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-notaria-blue/10 to-notaria-blue/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <i class="fas fa-building text-2xl text-notaria-blue"></i>
            </div>
            <h3
              class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors"
            >
              Colegio de Notarios
            </h3>
            <p class="text-gray-600 mb-6 text-lg leading-relaxed">
              Portal oficial del Colegio de Notarios con información y
              servicios.
            </p>
            <a
              href="https://www.notarios.org.pe/#/home"
              target="_blank"
              class="text-notaria-wine hover:text-notaria-wine/80 font-semibold text-lg group-hover:scale-105 transition-all duration-300"
            >
              Visitar Sitio →
            </a>
          </div>

          <div
            class="group bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 animate-fade-in-up animation-delay-400"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-notaria-blue/10 to-notaria-blue/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <i class="fas fa-landmark text-2xl text-notaria-blue"></i>
            </div>
            <h3
              class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors"
            >
              SUNARP
            </h3>
            <p class="text-gray-600 mb-6 text-lg leading-relaxed">
              Superintendencia Nacional de Registros Públicos para consultas de
              propiedad.
            </p>
            <a
              href="https://www.sunarp.gob.pe/"
              target="_blank"
              class="text-notaria-wine hover:text-notaria-wine/80 font-semibold text-lg group-hover:scale-105 transition-all duration-300"
            >
              Visitar Sitio →
            </a>
          </div>

          <div
            class="group bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 animate-fade-in-up animation-delay-500"
          >
            <div
                class="w-16 h-16 bg-gradient-to-br from-notaria-blue/10 to-notaria-blue/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <i class="fas fa-id-card text-2xl text-notaria-blue"></i>
            </div>
            <h3
              class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors"
            >
              RENIEC
            </h3>
            <p class="text-gray-600 mb-6 text-lg leading-relaxed">
              Registro Nacional de Identificación y Estado Civil para trámites
              de DNI.
            </p>
            <a
              href="https://www.reniec.gob.pe/"
              target="_blank"
              class="text-notaria-wine hover:text-notaria-wine/80 font-semibold text-lg group-hover:scale-105 transition-all duration-300"
            >
              Visitar Sitio →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Modelos de Documentos -->
    <section class="bg-white py-20 animate-fade-in-up">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in-up animation-delay-200">
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Modelos de Documentos
          </h2>
          <p class="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Formatos descargables para facilitar la preparación de sus
            documentos
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div
            class="group bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 animate-fade-in-up animation-delay-300"
          >
            <h3
              class="text-2xl font-bold text-gray-900 mb-6 group-hover:text-gray-700 transition-colors"
            >
              Documentos Personales
            </h3>
            <div class="space-y-4">
              <a
                href="#"
                class="group block p-4 bg-white rounded-xl hover:bg-notaria-wine/5 transition-all duration-300 border border-gray-200 hover:border-notaria-wine/30"
              >
                <div class="flex items-center justify-between">
                  <span
                    class="text-gray-700 text-lg group-hover:text-gray-900 transition-colors"
                    >Declaración Jurada de Soltería</span
                  >
                  <i
                    class="fas fa-download text-notaria-wine text-xl group-hover:scale-110 transition-transform"
                  ></i>
                </div>
              </a>
              <a
                href="#"
                class="group block p-4 bg-white rounded-xl hover:bg-notaria-wine/5 transition-all duration-300 border border-gray-200 hover:border-notaria-wine/30"
              >
                <div class="flex items-center justify-between">
                  <span
                    class="text-gray-700 text-lg group-hover:text-gray-900 transition-colors"
                    >Declaración Jurada de Domicilio</span
                  >
                  <i
                    class="fas fa-download text-notaria-wine text-xl group-hover:scale-110 transition-transform"
                  ></i>
                </div>
              </a>
              <a
                href="#"
                class="group block p-4 bg-white rounded-xl hover:bg-notaria-wine/5 transition-all duration-300 border border-gray-200 hover:border-notaria-wine/30"
              >
                <div class="flex items-center justify-between">
                  <span
                    class="text-gray-700 text-lg group-hover:text-gray-900 transition-colors"
                    >Autorización para Menores</span
                  >
                  <i
                    class="fas fa-download text-notaria-wine text-xl group-hover:scale-110 transition-transform"
                  ></i>
                </div>
              </a>
            </div>
          </div>

          <div
            class="group bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 animate-fade-in-up animation-delay-400"
          >
            <h3
              class="text-2xl font-bold text-gray-900 mb-6 group-hover:text-gray-700 transition-colors"
            >
              Documentos Comerciales
            </h3>
            <div class="space-y-4">
              <a
                href="#"
                class="group block p-4 bg-white rounded-xl hover:bg-notaria-wine/5 transition-all duration-300 border border-gray-200 hover:border-notaria-wine/30"
              >
                <div class="flex items-center justify-between">
                  <span
                    class="text-gray-700 text-lg group-hover:text-gray-900 transition-colors"
                    >Acta de Reunión de Directorio</span
                  >
                  <i
                    class="fas fa-download text-notaria-wine text-xl group-hover:scale-110 transition-transform"
                  ></i>
                </div>
              </a>
              <a
                href="#"
                class="group block p-4 bg-white rounded-xl hover:bg-notaria-wine/5 transition-all duration-300 border border-gray-200 hover:border-notaria-wine/30"
              >
                <div class="flex items-center justify-between">
                  <span
                    class="text-gray-700 text-lg group-hover:text-gray-900 transition-colors"
                    >Poder para Representación Legal</span
                  >
                  <i
                    class="fas fa-download text-notaria-wine text-xl group-hover:scale-110 transition-transform"
                  ></i>
                </div>
              </a>
              <a
                href="#"
                class="group block p-4 bg-white rounded-xl hover:bg-notaria-wine/5 transition-all duration-300 border border-gray-200 hover:border-notaria-wine/30"
              >
                <div class="flex items-center justify-between">
                  <span
                    class="text-gray-700 text-lg group-hover:text-gray-900 transition-colors"
                    >Convenio de Pago</span
                  >
                  <i
                    class="fas fa-download text-notaria-wine text-xl group-hover:scale-110 transition-transform"
                  ></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Noticias y Actualizaciones -->
    <section
      class="bg-gradient-to-br from-gray-50 to-white py-20 animate-fade-in-up"
    >
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in-up animation-delay-200">
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Noticias y Actualizaciones
          </h2>
          <p class="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Manténgase informado sobre cambios normativos y novedades legales
          </p>
        </div>

        <div class="max-w-4xl mx-auto space-y-8">
          <div
            class="group bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 animate-fade-in-up animation-delay-300"
          >
            <div class="flex items-start space-x-6">
              <div
                class="w-20 h-20 bg-gradient-to-br from-notaria-blue/10 to-notaria-blue/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
              >
                <i class="fas fa-newspaper text-3xl text-notaria-blue"></i>
              </div>
              <div>
                <h3
                  class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors"
                >
                  Nuevas Normativas Notariales 2024
                </h3>
                <p class="text-gray-600 mb-4 text-lg leading-relaxed">
                  Conozca los cambios en las normativas notariales que entraron
                  en vigencia este año y cómo afectan los trámites de
                  autenticación y protocolización.
                </p>
                <div class="flex items-center space-x-6 text-lg text-gray-500">
                  <span class="flex items-center space-x-2">
                    <i class="fas fa-calendar-alt text-notaria-blue"></i>
                    <span>15 de Enero, 2024</span>
                  </span>
                  <a
                    href="#"
                    class="text-notaria-blue hover:text-notaria-blue/80 font-semibold group-hover:scale-105 transition-all duration-300"
                    >Leer más →</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div
            class="group bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 animate-fade-in-up animation-delay-400"
          >
            <div class="flex items-start space-x-6">
              <div
                class="w-20 h-20 bg-gradient-to-br from-notaria-blue/10 to-notaria-blue/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
              >
                <i class="fas fa-laptop text-3xl text-notaria-blue"></i>
              </div>
              <div>
                <h3
                  class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors"
                >
                  Digitalización de Trámites Notariales
                </h3>
                <p class="text-gray-600 mb-4 text-lg leading-relaxed">
                  Información sobre la implementación de trámites digitales y
                  cómo esto beneficiará a nuestros clientes en términos de
                  eficiencia y seguridad.
                </p>
                <div class="flex items-center space-x-6 text-lg text-gray-500">
                  <span class="flex items-center space-x-2">
                    <i class="fas fa-calendar-alt text-notaria-blue"></i>
                    <span>10 de Enero, 2024</span>
                  </span>
                  <a
                    href="#"
                    class="text-notaria-blue hover:text-notaria-blue/80 font-semibold group-hover:scale-105 transition-all duration-300"
                    >Leer más →</a
                  >
                </div>
              </div>
            </div>
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
          ¿Necesita Más Información?
        </h2>
        <p
          class="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto animate-fade-in-up animation-delay-200"
        >
          Nuestro equipo está disponible para ayudarle con cualquier consulta
          sobre nuestros recursos y servicios.
        </p>
        <div
          class="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-400"
        >
          <a
            href="tel:(01) 234-5678"
            class="group bg-white text-notaria-wine px-10 py-4 rounded-xl font-semibold text-lg hover:bg-notaria-wine/10 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
          >
            <i class="fas fa-phone text-xl"></i>
            <span>Llamar para Consultar</span>
          </a>
          <a
            href="mailto:contacto&#64;notariafloresquille.com"
            class="group border-2 border-white text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-notaria-wine hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
          >
            <i class="fas fa-envelope text-xl"></i>
            <span>Enviar Consulta por Email</span>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class ResourcesComponent {}
