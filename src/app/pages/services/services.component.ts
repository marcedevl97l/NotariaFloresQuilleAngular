import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFileAlt,
  faFileContract,
  faFileSignature,
  faScroll,
  faShieldAlt,
  faCog,
  faCheckCircle,
  faUserShield,
  faUserTie,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { ModalComponent } from '../../components/modal/modal.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    ModalComponent,
    TestimonialsComponent,
  ],
  template: `
    <!-- Hero Section -->
    <section class="bg-notaria-blue text-white fadeInOnScroll">
      <div class="container mx-auto px-4 py-20 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          Servicios Notariales
        </h1>
        <p class="text-xl text-white/80 max-w-3xl mx-auto">
          Ofrecemos una amplia gama de servicios notariales profesionales para
          satisfacer todas sus necesidades legales.
        </p>
      </div>
    </section>

    <!-- Servicios Principales -->
    <section class="py-16 bg-white fadeInOnScroll">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-notaria-blue mb-4">
            Nuestros Servicios
          </h2>
          <p class="text-xl text-notaria-blue/80 max-w-3xl mx-auto">
            Servicios notariales completos con la garantía de profesionalismo y
            confidencialidad
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Autenticación de Documentos -->
          <div
            class="bg-notaria-blue/5 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div
              class="w-12 h-12 bg-notaria-blue/10 rounded-lg flex items-center justify-center mb-4"
            >
              <fa-icon
                [icon]="faFileAlt"
                class="fa-lg text-notaria-blue"
              ></fa-icon>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-notaria-blue">
              Autenticación de Documentos
            </h3>
            <p class="text-notaria-blue/80 mb-4">
              Certificamos la autenticidad de documentos, firmas y copias para
              uso legal y oficial.
            </p>
            <div class="space-y-2 text-sm text-notaria-blue/70">
              <p>• Certificación de firmas</p>
              <p>• Copias certificadas</p>
              <p>• Legalización de documentos</p>
            </div>
            <div class="mt-4 flex justify-start">
              <button
                (click)="showAuthModal = true"
                class="bg-notaria-wine text-white px-4 py-2 rounded-lg font-semibold hover:bg-notaria-wine/90 transition-colors shadow-md flex items-center gap-2 group"
              >
                Más información
                <fa-icon
                  [icon]="faArrowRight"
                  class="fa-lg group-hover:translate-x-1 transition-transform"
                ></fa-icon>
              </button>
            </div>
          </div>
          <!-- Poderes Notariales -->
          <div
            class="bg-notaria-blue/5 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div
              class="w-12 h-12 bg-notaria-blue/10 rounded-lg flex items-center justify-center mb-4"
            >
              <fa-icon
                [icon]="faFileContract"
                class="fa-lg text-notaria-blue"
              ></fa-icon>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-notaria-blue">
              Poderes Notariales
            </h3>
            <p class="text-notaria-blue/80 mb-4">
              Otorgamos poderes especiales y generales para representación legal
              y gestión de trámites.
            </p>
            <div class="space-y-2 text-sm text-notaria-blue/70">
              <p>• Poderes generales</p>
              <p>• Poderes especiales</p>
              <p>• Revocación de poderes</p>
            </div>
            <div class="mt-4 flex justify-start">
              <button
                (click)="showPoderesModal = true"
                class="bg-notaria-wine text-white px-4 py-2 rounded-lg font-semibold hover:bg-notaria-wine/90 transition-colors shadow-md flex items-center gap-2 group"
              >
                Más información
                <fa-icon
                  [icon]="faArrowRight"
                  class="fa-lg group-hover:translate-x-1 transition-transform"
                ></fa-icon>
              </button>
            </div>
          </div>
          <!-- Contratos y Convenios -->
          <div
            class="bg-notaria-blue/5 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div
              class="w-12 h-12 bg-notaria-blue/10 rounded-lg flex items-center justify-center mb-4"
            >
              <fa-icon
                [icon]="faFileSignature"
                class="fa-lg text-notaria-blue"
              ></fa-icon>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-notaria-blue">
              Contratos y Convenios
            </h3>
            <p class="text-notaria-blue/80 mb-4">
              Asesoramos y certificamos contratos de compraventa, arrendamiento
              y otros convenios legales.
            </p>
            <div class="space-y-2 text-sm text-notaria-blue/70">
              <p>• Contratos de compraventa</p>
              <p>• Contratos de arrendamiento</p>
              <p>• Convenios de pago</p>
            </div>
            <div class="mt-4 flex justify-start">
              <button
                (click)="showContratosModal = true"
                class="bg-notaria-wine text-white px-4 py-2 rounded-lg font-semibold hover:bg-notaria-wine/90 transition-colors shadow-md flex items-center gap-2 group"
              >
                Más información
                <fa-icon
                  [icon]="faArrowRight"
                  class="fa-lg group-hover:translate-x-1 transition-transform"
                ></fa-icon>
              </button>
            </div>
          </div>
          <!-- Testamentos -->
          <div
            class="bg-notaria-blue/5 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div
              class="w-12 h-12 bg-notaria-blue/10 rounded-lg flex items-center justify-center mb-4"
            >
              <fa-icon
                [icon]="faScroll"
                class="fa-lg text-notaria-blue"
              ></fa-icon>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-notaria-blue">
              Testamentos
            </h3>
            <p class="text-notaria-blue/80 mb-4">
              Asesoramos en la redacción y certificación de testamentos públicos
              abiertos.
            </p>
            <div class="space-y-2 text-sm text-notaria-blue/70">
              <p>• Testamentos públicos abiertos</p>
              <p>• Asesoría legal especializada</p>
              <p>• Custodia de documentos</p>
            </div>
            <div class="mt-4 flex justify-start">
              <button
                (click)="showTestamentosModal = true"
                class="bg-notaria-wine text-white px-4 py-2 rounded-lg font-semibold hover:bg-notaria-wine/90 transition-colors shadow-md flex items-center gap-2 group"
              >
                Más información
                <fa-icon
                  [icon]="faArrowRight"
                  class="fa-lg group-hover:translate-x-1 transition-transform"
                ></fa-icon>
              </button>
            </div>
          </div>
          <!-- Declaraciones Juradas -->
          <div
            class="bg-notaria-blue/5 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div
              class="w-12 h-12 bg-notaria-blue/10 rounded-lg flex items-center justify-center mb-4"
            >
              <fa-icon
                [icon]="faShieldAlt"
                class="fa-lg text-notaria-blue"
              ></fa-icon>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-notaria-blue">
              Declaraciones Juradas
            </h3>
            <p class="text-notaria-blue/80 mb-4">
              Certificamos declaraciones juradas para diversos trámites
              administrativos y legales.
            </p>
            <div class="space-y-2 text-sm text-notaria-blue/70">
              <p>• Declaraciones de estado civil</p>
              <p>• Declaraciones de domicilio</p>
              <p>• Declaraciones de soltería</p>
            </div>
            <div class="mt-4 flex justify-start">
              <button
                (click)="showDeclaracionesModal = true"
                class="bg-notaria-wine text-white px-4 py-2 rounded-lg font-semibold hover:bg-notaria-wine/90 transition-colors shadow-md flex items-center gap-2 group"
              >
                Más información
                <fa-icon
                  [icon]="faArrowRight"
                  class="fa-lg group-hover:translate-x-1 transition-transform"
                ></fa-icon>
              </button>
            </div>
          </div>
          <!-- Otros Servicios -->
          <div
            class="bg-notaria-blue/5 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div
              class="w-12 h-12 bg-notaria-blue/10 rounded-lg flex items-center justify-center mb-4"
            >
              <fa-icon [icon]="faCog" class="fa-lg text-notaria-blue"></fa-icon>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-notaria-blue">
              Otros Servicios
            </h3>
            <p class="text-notaria-blue/80 mb-4">
              Servicios especializados y asesoría legal personalizada para casos
              específicos.
            </p>
            <div class="space-y-2 text-sm text-notaria-blue/70">
              <p>• Asesoría legal</p>
              <p>• Trámites especiales</p>
              <p>• Consultas personalizadas</p>
            </div>
            <div class="mt-4 flex justify-start">
              <button
                (click)="showOtrosModal = true"
                class="bg-notaria-wine text-white px-4 py-2 rounded-lg font-semibold hover:bg-notaria-wine/90 transition-colors shadow-md flex items-center gap-2 group"
              >
                Más información
                <fa-icon
                  [icon]="faArrowRight"
                  class="fa-lg group-hover:translate-x-1 transition-transform"
                ></fa-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Información Adicional -->
    <section class="py-16 bg-notaria-blue/5 fadeInOnScroll">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 text-center">
          <div>
            <h2 class="text-3xl font-bold text-notaria-blue mb-6">
              ¿Por qué elegir nuestros servicios?
            </h2>
            <div class="space-y-4">
              <div class="flex items-start space-x-4">
                <div
                  class="w-8 h-8 bg-notaria-wine/10 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <fa-icon
                    [icon]="faCheckCircle"
                    class="fa-sm text-notaria-wine"
                  ></fa-icon>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-notaria-blue mb-2">
                    Experiencia Garantizada
                  </h3>
                  <p class="text-notaria-blue/80">
                    Más de 20 años de experiencia en servicios notariales
                    profesionales.
                  </p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div
                  class="w-8 h-8 bg-notaria-wine/10 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <fa-icon
                    [icon]="faUserShield"
                    class="fa-sm text-notaria-wine"
                  ></fa-icon>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-notaria-blue mb-2">
                    Confidencialidad Total
                  </h3>
                  <p class="text-notaria-blue/80">
                    Garantizamos la confidencialidad de todos sus documentos y
                    trámites.
                  </p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div
                  class="w-8 h-8 bg-notaria-wine/10 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <fa-icon
                    [icon]="faUserTie"
                    class="fa-sm text-notaria-wine"
                  ></fa-icon>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-notaria-blue mb-2">
                    Atención Personalizada
                  </h3>
                  <p class="text-notaria-blue/80">
                    Cada cliente recibe atención personalizada y asesoría
                    especializada.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center">
            <h3 class="text-2xl font-bold text-notaria-blue mb-6">
              Lo que dicen nuestros clientes
            </h3>
            <app-testimonials></app-testimonials>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal para Autenticación de Documentos -->
    <app-modal
      [show]="showAuthModal"
      [title]="'Autenticación de Documentos'"
      [image]="'assets/images/coverportada.jpg'"
      (close)="showAuthModal = false"
    >
      <p class="text-notaria-blue/80 mb-4">
        La autenticación de documentos es un proceso mediante el cual se
        certifica la veracidad de firmas, copias y documentos para su uso legal
        y oficial. Nuestro servicio garantiza la validez y reconocimiento de sus
        documentos en cualquier institución.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        <div>
          <h3 class="text-lg font-semibold text-notaria-blue mb-2">
            ¿Qué incluye?
          </h3>
          <ul class="list-disc list-inside text-notaria-blue/80 mb-4">
            <li>Certificación de firmas</li>
            <li>Copias certificadas</li>
            <li>Legalización de documentos</li>
          </ul>
          <h3 class="text-lg font-semibold text-notaria-blue mb-2">
            Requisitos
          </h3>
          <ul class="list-disc list-inside text-notaria-blue/80 mb-4">
            <li>Documento original a autenticar</li>
            <li>Documento de identidad vigente</li>
            <li>Presencia del titular de la firma</li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-notaria-blue mb-2">Proceso</h3>
          <ol class="list-decimal list-inside text-notaria-blue/80 mb-4">
            <li>Presentación de documentos y verificación de identidad</li>
            <li>Revisión y validación por el notario</li>
            <li>Certificación y entrega del documento autenticado</li>
          </ol>
          <h3 class="text-lg font-semibold text-notaria-blue mb-2">
            Tiempo estimado
          </h3>
          <p class="text-notaria-blue/80 mb-4">
            El trámite se realiza en el mismo día, sujeto a la carga de trabajo.
          </p>
          <h3 class="text-lg font-semibold text-notaria-blue mb-2">
            Observaciones
          </h3>
          <p class="text-notaria-blue/80">
            Para documentos en idioma extranjero, se requiere traducción
            oficial. Consultar casos especiales en ventanilla.
          </p>
        </div>
      </div>
    </app-modal>
    <!-- Modales para los demás servicios -->
    <app-modal
      [show]="showPoderesModal"
      [title]="'Poderes Notariales'"
      [image]="'assets/images/poderes.jpg'"
      (close)="showPoderesModal = false"
    >
      <p class="text-notaria-blue/80 mb-4">
        Los poderes notariales permiten delegar facultades legales a otra
        persona para actuar en su nombre. Ofrecemos asesoría y redacción de
        poderes generales y especiales, así como su revocación.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        <div>
          <h3 class="text-lg font-semibold text-notaria-blue mb-2">
            ¿Qué incluye?
          </h3>
          <ul class="list-disc list-inside text-notaria-blue/80 mb-4">
            <li>Poderes generales</li>
            <li>Poderes especiales</li>
            <li>Revocación de poderes</li>
          </ul>
          <h3 class="text-lg font-semibold text-notaria-blue mb-2">
            Requisitos
          </h3>
          <ul class="list-disc list-inside text-notaria-blue/80 mb-4">
            <li>Documento de identidad vigente</li>
            <li>Datos completos del poderdante y apoderado</li>
            <li>Motivo del poder</li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-notaria-blue mb-2">Proceso</h3>
          <ol class="list-decimal list-inside text-notaria-blue/80 mb-4">
            <li>Presentación de requisitos y verificación de identidad</li>
            <li>Redacción y lectura del poder</li>
            <li>Firma y certificación notarial</li>
          </ol>
          <h3 class="text-lg font-semibold text-notaria-blue mb-2">
            Tiempo estimado
          </h3>
          <p class="text-notaria-blue/80 mb-4">
            El trámite se realiza en el mismo día, salvo casos complejos.
          </p>
          <h3 class="text-lg font-semibold text-notaria-blue mb-2">
            Observaciones
          </h3>
          <p class="text-notaria-blue/80">
            Para poderes en el extranjero, consultar requisitos adicionales.
          </p>
        </div>
      </div>
    </app-modal>
    <app-modal
      [show]="showContratosModal"
      [title]="'Contratos y Convenios'"
      [image]="'assets/images/contrato.jpg'"
      (close)="showContratosModal = false"
    >
      <p class="text-notaria-blue/80 mb-4">
        Asesoramos en la redacción, revisión y certificación de contratos de
        compraventa, arrendamiento y convenios legales, garantizando seguridad
        jurídica para todas las partes.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        <div>
          <h3 class="text-lg font-semibold text-notaria-blue mb-2">
            ¿Qué incluye?
          </h3>
          <ul class="list-disc list-inside text-notaria-blue/80 mb-4">
            <li>Contratos de compraventa</li>
            <li>Contratos de arrendamiento</li>
            <li>Convenios de pago</li>
          </ul>
          <h3 class="text-lg font-semibold text-notaria-blue mb-2">
            Requisitos
          </h3>
          <ul class="list-disc list-inside text-notaria-blue/80 mb-4">
            <li>Documentos de identidad de las partes</li>
            <li>Documentos del bien o servicio</li>
            <li>Condiciones acordadas</li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-notaria-blue mb-2">Proceso</h3>
          <ol class="list-decimal list-inside text-notaria-blue/80 mb-4">
            <li>Revisión de documentos y condiciones</li>
            <li>Redacción y lectura del contrato</li>
            <li>Firma y certificación notarial</li>
          </ol>
          <h3 class="text-lg font-semibold text-notaria-blue mb-2">
            Tiempo estimado
          </h3>
          <p class="text-notaria-blue/80 mb-4">
            El trámite puede variar según la complejidad del contrato.
          </p>
          <h3 class="text-lg font-semibold text-notaria-blue mb-2">
            Observaciones
          </h3>
          <p class="text-notaria-blue/80">
            Para contratos en moneda extranjera, consultar condiciones
            adicionales.
          </p>
        </div>
      </div>
    </app-modal>
    <app-modal
      [show]="showTestamentosModal"
      [title]="'Testamentos'"
      [image]="'assets/images/testamento.jpg'"
      (close)="showTestamentosModal = false"
    >
      <p class="text-notaria-blue/80 mb-4">
        Brindamos asesoría y certificación en la elaboración de testamentos
        públicos abiertos, garantizando la voluntad del testador y la seguridad
        jurídica de los herederos.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        <div>
          <h3 class="text-lg font-semibold text-notaria-blue mb-2">
            ¿Qué incluye?
          </h3>
          <ul class="list-disc list-inside text-notaria-blue/80 mb-4">
            <li>Testamentos públicos abiertos</li>
            <li>Asesoría legal especializada</li>
            <li>Custodia de documentos</li>
          </ul>
          <h3 class="text-lg font-semibold text-notaria-blue mb-2">
            Requisitos
          </h3>
          <ul class="list-disc list-inside text-notaria-blue/80 mb-4">
            <li>Documento de identidad vigente</li>
            <li>Declaración de voluntad</li>
            <li>Relación de bienes y herederos</li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-notaria-blue mb-2">Proceso</h3>
          <ol class="list-decimal list-inside text-notaria-blue/80 mb-4">
            <li>Asesoría y redacción del testamento</li>
            <li>Lectura y firma ante notario</li>
            <li>Certificación y custodia del documento</li>
          </ol>
          <h3 class="text-lg font-semibold text-notaria-blue mb-2">
            Tiempo estimado
          </h3>
          <p class="text-notaria-blue/80 mb-4">
            El trámite se realiza en el mismo día, salvo casos complejos.
          </p>
          <h3 class="text-lg font-semibold text-notaria-blue mb-2">
            Observaciones
          </h3>
          <p class="text-notaria-blue/80">
            La confidencialidad y seguridad están garantizadas en todo el
            proceso.
          </p>
        </div>
      </div>
    </app-modal>
    <app-modal
      [show]="showDeclaracionesModal"
      [title]="'Declaraciones Juradas'"
      [image]="'assets/images/declaracion.jpg'"
      (close)="showDeclaracionesModal = false"
    >
      <p class="text-notaria-blue/80 mb-4">
        Certificamos declaraciones juradas para trámites administrativos y
        legales, asegurando la veracidad y validez de la información presentada.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        <div>
          <h3 class="text-lg font-semibold text-notaria-blue mb-2">
            ¿Qué incluye?
          </h3>
          <ul class="list-disc list-inside text-notaria-blue/80 mb-4">
            <li>Declaraciones de estado civil</li>
            <li>Declaraciones de domicilio</li>
            <li>Declaraciones de soltería</li>
          </ul>
          <h3 class="text-lg font-semibold text-notaria-blue mb-2">
            Requisitos
          </h3>
          <ul class="list-disc list-inside text-notaria-blue/80 mb-4">
            <li>Documento de identidad vigente</li>
            <li>Información verídica</li>
            <li>Presencia del declarante</li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-notaria-blue mb-2">Proceso</h3>
          <ol class="list-decimal list-inside text-notaria-blue/80 mb-4">
            <li>Presentación de requisitos y verificación</li>
            <li>Redacción y lectura de la declaración</li>
            <li>Firma y certificación notarial</li>
          </ol>
          <h3 class="text-lg font-semibold text-notaria-blue mb-2">
            Tiempo estimado
          </h3>
          <p class="text-notaria-blue/80 mb-4">
            El trámite se realiza en el mismo día.
          </p>
          <h3 class="text-lg font-semibold text-notaria-blue mb-2">
            Observaciones
          </h3>
          <p class="text-notaria-blue/80">
            La información declarada es de responsabilidad del solicitante.
          </p>
        </div>
      </div>
    </app-modal>
    <app-modal
      [show]="showOtrosModal"
      [title]="'Otros Servicios'"
      [image]="'assets/images/otros.jpg'"
      (close)="showOtrosModal = false"
    >
      <p class="text-notaria-blue/80 mb-4">
        Ofrecemos asesoría legal personalizada y trámites especiales para casos
        particulares, adaptándonos a las necesidades de cada cliente.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        <div>
          <h3 class="text-lg font-semibold text-notaria-blue mb-2">
            ¿Qué incluye?
          </h3>
          <ul class="list-disc list-inside text-notaria-blue/80 mb-4">
            <li>Asesoría legal</li>
            <li>Trámites especiales</li>
            <li>Consultas personalizadas</li>
          </ul>
          <h3 class="text-lg font-semibold text-notaria-blue mb-2">
            Requisitos
          </h3>
          <ul class="list-disc list-inside text-notaria-blue/80 mb-4">
            <li>Consulta previa</li>
            <li>Documentos según el caso</li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-notaria-blue mb-2">Proceso</h3>
          <ol class="list-decimal list-inside text-notaria-blue/80 mb-4">
            <li>Evaluación del caso</li>
            <li>Asesoría y propuesta de solución</li>
            <li>Gestión y seguimiento del trámite</li>
          </ol>
          <h3 class="text-lg font-semibold text-notaria-blue mb-2">
            Tiempo estimado
          </h3>
          <p class="text-notaria-blue/80 mb-4">
            Depende del tipo de trámite o consulta.
          </p>
          <h3 class="text-lg font-semibold text-notaria-blue mb-2">
            Observaciones
          </h3>
          <p class="text-notaria-blue/80">
            Para casos complejos, se recomienda agendar una cita previa.
          </p>
        </div>
      </div>
    </app-modal>
  `,
  styles: [],
})
export class ServicesComponent {
  // FontAwesome icons
  faFileAlt = faFileAlt;
  faFileContract = faFileContract;
  faFileSignature = faFileSignature;
  faScroll = faScroll;
  faShieldAlt = faShieldAlt;
  faCog = faCog;
  faCheckCircle = faCheckCircle;
  faUserShield = faUserShield;
  faUserTie = faUserTie;
  faArrowRight = faArrowRight;

  showAuthModal: boolean = false;
  showPoderesModal: boolean = false;
  showContratosModal: boolean = false;
  showTestamentosModal: boolean = false;
  showDeclaracionesModal: boolean = false;
  showOtrosModal: boolean = false;
}
