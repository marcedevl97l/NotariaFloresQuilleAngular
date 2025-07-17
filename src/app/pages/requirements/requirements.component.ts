import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInOnScrollDirective } from '../../components/fade-in-on-scroll.directive';

@Component({
  selector: 'app-requirements',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-notaria-blue to-notaria-blue/90 text-white overflow-hidden">
      <!-- Logo difuminado de fondo -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src="assets/images/logonuevo.svg" alt="Logo Notaría" class="w-96 h-96 object-contain">
        </div>
      </div>
      
      <div class="container mx-auto px-4 py-20 text-center relative z-10">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
          Requisitos y Documentación
        </h1>
        <p class="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto animate-fade-in-up animation-delay-200">
          Conozca los documentos necesarios para cada trámite notarial y descargue los formatos requeridos
        </p>
      </div>
    </section>

    <!-- Documentos Generales -->
    <section class="relative py-20 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-16 animate-fade-in-up">
          <h2 class="text-3xl md:text-5xl font-bold text-notaria-blue mb-6">Documentos Requeridos</h2>
          <p class="text-xl md:text-2xl text-notaria-blue/80 max-w-4xl mx-auto">
            Documentación básica necesaria para la mayoría de trámites notariales
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 animate-fade-in-up animation-delay-300">
            <div class="w-16 h-16 bg-gradient-to-br from-notaria-blue/10 to-notaria-blue/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i class="fas fa-user text-2xl text-notaria-blue"></i>
            </div>
            <h3 class="text-2xl font-bold text-notaria-blue mb-4 group-hover:text-notaria-blue/80 transition-colors">Documento de Identidad</h3>
            <p class="text-notaria-blue/80 mb-6 text-lg leading-relaxed">
              Documento nacional de identidad vigente o pasaporte en buen estado.
            </p>
            <ul class="text-sm text-notaria-blue/70 space-y-3">
              <li class="flex items-center space-x-3">
                <i class="fas fa-check-circle text-green-500"></i>
                <span>DNI vigente</span>
              </li>
              <li class="flex items-center space-x-3">
                <i class="fas fa-check-circle text-green-500"></i>
                <span>Pasaporte vigente</span>
              </li>
              <li class="flex items-center space-x-3">
                <i class="fas fa-check-circle text-green-500"></i>
                <span>Carné de extranjería</span>
              </li>
            </ul>
          </div>
          
          <div class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 animate-fade-in-up animation-delay-400">
            <div class="w-16 h-16 bg-gradient-to-br from-notaria-blue/10 to-notaria-blue/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i class="fas fa-file-alt text-2xl text-notaria-blue"></i>
            </div>
            <h3 class="text-2xl font-bold text-notaria-blue mb-4 group-hover:text-notaria-blue/80 transition-colors">Documentos Originales</h3>
            <p class="text-notaria-blue/80 mb-6 text-lg leading-relaxed">
              Los documentos que se van a autenticar o protocolizar deben ser originales.
            </p>
            <ul class="text-sm text-notaria-blue/70 space-y-3">
              <li class="flex items-center space-x-3">
                <i class="fas fa-check-circle text-green-500"></i>
                <span>Sin tachaduras</span>
              </li>
              <li class="flex items-center space-x-3">
                <i class="fas fa-check-circle text-green-500"></i>
                <span>Sin enmiendas</span>
              </li>
              <li class="flex items-center space-x-3">
                <i class="fas fa-check-circle text-green-500"></i>
                <span>En buen estado</span>
              </li>
            </ul>
          </div>
          
          <div class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 animate-fade-in-up animation-delay-500">
            <div class="w-16 h-16 bg-gradient-to-br from-notaria-blue/10 to-notaria-blue/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i class="fas fa-address-book text-2xl text-notaria-blue"></i>
            </div>
            <h3 class="text-2xl font-bold text-notaria-blue mb-4 group-hover:text-notaria-blue/80 transition-colors">Información de Contacto</h3>
            <p class="text-notaria-blue/80 mb-6 text-lg leading-relaxed">
              Datos actualizados para comunicación y seguimiento del trámite.
            </p>
            <ul class="text-sm text-notaria-blue/70 space-y-3">
              <li class="flex items-center space-x-3">
                <i class="fas fa-check-circle text-green-500"></i>
                <span>Teléfono móvil</span>
              </li>
              <li class="flex items-center space-x-3">
                <i class="fas fa-check-circle text-green-500"></i>
                <span>Email válido</span>
              </li>
              <li class="flex items-center space-x-3">
                <i class="fas fa-check-circle text-green-500"></i>
                <span>Dirección actual</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Requisitos por Trámite -->
    <section class="bg-gradient-to-br from-gray-50 to-white py-20 animate-fade-in-up">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in-up animation-delay-200">
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Requisitos por Tipo de Trámite</h2>
          <p class="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Documentación específica requerida para cada servicio notarial
          </p>
        </div>

        <div class="space-y-12">
          <!-- Poderes Notariales -->
          <div class="group bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-all duration-500 border border-gray-100 animate-fade-in-up animation-delay-300">
            <h3 class="text-3xl font-bold text-gray-900 mb-8 flex items-center space-x-4">
              <i class="fas fa-gavel text-notaria-blue text-4xl"></i>
              <span>Poderes Notariales</span>
            </h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h4 class="text-xl font-semibold text-notaria-blue mb-6 flex items-center space-x-3">
                  <i class="fas fa-list-check text-lg"></i>
                  <span>Documentos Requeridos:</span>
                </h4>
                <ul class="space-y-4 text-gray-600">
                  <li class="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <i class="fas fa-check-circle text-green-500 text-lg"></i>
                    <span class="text-lg">DNI o pasaporte del poderdante</span>
                  </li>
                  <li class="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <i class="fas fa-check-circle text-green-500 text-lg"></i>
                    <span class="text-lg">DNI o pasaporte del apoderado</span>
                  </li>
                  <li class="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <i class="fas fa-check-circle text-green-500 text-lg"></i>
                    <span class="text-lg">Especificación de actos a realizar</span>
                  </li>
                  <li class="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <i class="fas fa-check-circle text-green-500 text-lg"></i>
                    <span class="text-lg">Información de contacto actualizada</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 class="text-xl font-semibold text-notaria-blue mb-6 flex items-center space-x-3">
                  <i class="fas fa-download text-lg"></i>
                  <span>Formatos Disponibles:</span>
                </h4>
                <div class="space-y-4">
                  <a href="#" class="group block p-4 bg-gradient-to-r from-notaria-blue/5 to-notaria-blue/10 rounded-xl hover:from-notaria-blue/10 hover:to-notaria-blue/20 transition-all duration-300 border border-notaria-blue/20 hover:border-notaria-blue/40">
                    <div class="flex items-center justify-between">
                      <span class="text-notaria-blue font-semibold text-lg group-hover:text-notaria-blue/80 transition-colors">Poder General</span>
                      <i class="fas fa-download text-notaria-blue text-xl group-hover:scale-110 transition-transform"></i>
                    </div>
                  </a>
                  <a href="#" class="group block p-4 bg-gradient-to-r from-notaria-blue/5 to-notaria-blue/10 rounded-xl hover:from-notaria-blue/10 hover:to-notaria-blue/20 transition-all duration-300 border border-notaria-blue/20 hover:border-notaria-blue/40">
                    <div class="flex items-center justify-between">
                      <span class="text-notaria-blue font-semibold text-lg group-hover:text-notaria-blue/80 transition-colors">Poder Especial</span>
                      <i class="fas fa-download text-notaria-blue text-xl group-hover:scale-110 transition-transform"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Contratos -->
          <div class="group bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-all duration-500 border border-gray-100 animate-fade-in-up animation-delay-400">
            <h3 class="text-3xl font-bold text-gray-900 mb-8 flex items-center space-x-4">
              <i class="fas fa-file-contract text-notaria-blue text-4xl"></i>
              <span>Contratos y Convenios</span>
            </h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h4 class="text-xl font-semibold text-notaria-blue mb-6 flex items-center space-x-3">
                  <i class="fas fa-list-check text-lg"></i>
                  <span>Documentos Requeridos:</span>
                </h4>
                <ul class="space-y-4 text-gray-600">
                  <li class="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <i class="fas fa-check-circle text-green-500 text-lg"></i>
                    <span class="text-lg">DNI de todas las partes</span>
                  </li>
                  <li class="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <i class="fas fa-check-circle text-green-500 text-lg"></i>
                    <span class="text-lg">Documentos de respaldo (títulos, facturas)</span>
                  </li>
                  <li class="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <i class="fas fa-check-circle text-green-500 text-lg"></i>
                    <span class="text-lg">Información detallada del bien o servicio</span>
                  </li>
                  <li class="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <i class="fas fa-check-circle text-green-500 text-lg"></i>
                    <span class="text-lg">Condiciones y términos acordados</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 class="text-xl font-semibold text-notaria-blue mb-6 flex items-center space-x-3">
                  <i class="fas fa-download text-lg"></i>
                  <span>Formatos Disponibles:</span>
                </h4>
                <div class="space-y-4">
                  <a href="#" class="group block p-4 bg-gradient-to-r from-notaria-blue/5 to-notaria-blue/10 rounded-xl hover:from-notaria-blue/10 hover:to-notaria-blue/20 transition-all duration-300 border border-notaria-blue/20 hover:border-notaria-blue/40">
                    <div class="flex items-center justify-between">
                      <span class="text-notaria-blue font-semibold text-lg group-hover:text-notaria-blue/80 transition-colors">Contrato de Compraventa</span>
                      <i class="fas fa-download text-notaria-blue text-xl group-hover:scale-110 transition-transform"></i>
                    </div>
                  </a>
                  <a href="#" class="group block p-4 bg-gradient-to-r from-notaria-blue/5 to-notaria-blue/10 rounded-xl hover:from-notaria-blue/10 hover:to-notaria-blue/20 transition-all duration-300 border border-notaria-blue/20 hover:border-notaria-blue/40">
                    <div class="flex items-center justify-between">
                      <span class="text-notaria-blue font-semibold text-lg group-hover:text-notaria-blue/80 transition-colors">Contrato de Arrendamiento</span>
                      <i class="fas fa-download text-notaria-blue text-xl group-hover:scale-110 transition-transform"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Testamentos -->
          <div class="group bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-all duration-500 border border-gray-100 animate-fade-in-up animation-delay-500">
            <h3 class="text-3xl font-bold text-gray-900 mb-8 flex items-center space-x-4">
              <i class="fas fa-scroll text-notaria-blue text-4xl"></i>
              <span>Testamentos</span>
            </h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h4 class="text-xl font-semibold text-notaria-blue mb-6 flex items-center space-x-3">
                  <i class="fas fa-list-check text-lg"></i>
                  <span>Documentos Requeridos:</span>
                </h4>
                <ul class="space-y-4 text-gray-600">
                  <li class="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <i class="fas fa-check-circle text-green-500 text-lg"></i>
                    <span class="text-lg">DNI del testador</span>
                  </li>
                  <li class="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <i class="fas fa-check-circle text-green-500 text-lg"></i>
                    <span class="text-lg">Información de herederos y legatarios</span>
                  </li>
                  <li class="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <i class="fas fa-check-circle text-green-500 text-lg"></i>
                    <span class="text-lg">Lista de bienes y propiedades</span>
                  </li>
                  <li class="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <i class="fas fa-check-circle text-green-500 text-lg"></i>
                    <span class="text-lg">Testigos (2 personas)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 class="text-xl font-semibold text-notaria-blue mb-6 flex items-center space-x-3">
                  <i class="fas fa-download text-lg"></i>
                  <span>Formatos Disponibles:</span>
                </h4>
                <div class="space-y-4">
                  <a href="#" class="group block p-4 bg-gradient-to-r from-notaria-blue/5 to-notaria-blue/10 rounded-xl hover:from-notaria-blue/10 hover:to-notaria-blue/20 transition-all duration-300 border border-notaria-blue/20 hover:border-notaria-blue/40">
                    <div class="flex items-center justify-between">
                      <span class="text-notaria-blue font-semibold text-lg group-hover:text-notaria-blue/80 transition-colors">Testamento Público Abierto</span>
                      <i class="fas fa-download text-notaria-blue text-xl group-hover:scale-110 transition-transform"></i>
                    </div>
                  </a>
                  <a href="#" class="group block p-4 bg-gradient-to-r from-notaria-blue/5 to-notaria-blue/10 rounded-xl hover:from-notaria-blue/10 hover:to-notaria-blue/20 transition-all duration-300 border border-notaria-blue/20 hover:border-notaria-blue/40">
                    <div class="flex items-center justify-between">
                      <span class="text-notaria-blue font-semibold text-lg group-hover:text-notaria-blue/80 transition-colors">Formulario de Información</span>
                      <i class="fas fa-download text-notaria-blue text-xl group-hover:scale-110 transition-transform"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Checklist -->
    <section class="relative bg-gradient-to-br from-white to-gray-50 py-20 overflow-hidden">
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-16 animate-fade-in-up">
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Checklist de Verificación</h2>
          <p class="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Lista de verificación para asegurar que tiene todo lo necesario antes de acudir a la notaría
          </p>
        </div>

        <div class="max-w-5xl mx-auto">
          <div class="bg-gradient-to-br from-notaria-blue/5 to-notaria-blue/10 rounded-2xl p-10 shadow-xl border border-notaria-blue/20 animate-fade-in-up animation-delay-200">
            <h3 class="text-3xl font-bold text-gray-900 mb-8 flex items-center justify-center space-x-4">
              <i class="fas fa-clipboard-check text-notaria-blue text-4xl"></i>
              <span>Antes de Acudir a la Notaría</span>
            </h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div class="space-y-6">
                <h4 class="text-2xl font-semibold text-notaria-blue flex items-center space-x-3">
                  <i class="fas fa-folder-open text-xl"></i>
                  <span>Documentación:</span>
                </h4>
                <div class="space-y-4">
                  <label class="flex items-center space-x-4 cursor-pointer group p-4 bg-white rounded-xl hover:bg-gray-50 transition-colors border border-gray-200 hover:border-notaria-blue/30">
                    <input type="checkbox" class="w-6 h-6 text-notaria-blue rounded-lg focus:ring-2 focus:ring-notaria-blue/50">
                    <span class="text-gray-700 text-lg group-hover:text-gray-900 transition-colors">DNI o pasaporte vigente</span>
                  </label>
                  <label class="flex items-center space-x-4 cursor-pointer group p-4 bg-white rounded-xl hover:bg-gray-50 transition-colors border border-gray-200 hover:border-notaria-blue/30">
                    <input type="checkbox" class="w-6 h-6 text-notaria-blue rounded-lg focus:ring-2 focus:ring-notaria-blue/50">
                    <span class="text-gray-700 text-lg group-hover:text-gray-900 transition-colors">Documentos originales a autenticar</span>
                  </label>
                  <label class="flex items-center space-x-4 cursor-pointer group p-4 bg-white rounded-xl hover:bg-gray-50 transition-colors border border-gray-200 hover:border-notaria-blue/30">
                    <input type="checkbox" class="w-6 h-6 text-notaria-blue rounded-lg focus:ring-2 focus:ring-notaria-blue/50">
                    <span class="text-gray-700 text-lg group-hover:text-gray-900 transition-colors">Información de contacto actualizada</span>
                  </label>
                  <label class="flex items-center space-x-4 cursor-pointer group p-4 bg-white rounded-xl hover:bg-gray-50 transition-colors border border-gray-200 hover:border-notaria-blue/30">
                    <input type="checkbox" class="w-6 h-6 text-notaria-blue rounded-lg focus:ring-2 focus:ring-notaria-blue/50">
                    <span class="text-gray-700 text-lg group-hover:text-gray-900 transition-colors">Documentos de respaldo necesarios</span>
                  </label>
                </div>
              </div>
              <div class="space-y-6">
                <h4 class="text-2xl font-semibold text-notaria-blue flex items-center space-x-3">
                  <i class="fas fa-calendar-check text-xl"></i>
                  <span>Preparación:</span>
                </h4>
                <div class="space-y-4">
                  <label class="flex items-center space-x-4 cursor-pointer group p-4 bg-white rounded-xl hover:bg-gray-50 transition-colors border border-gray-200 hover:border-notaria-blue/30">
                    <input type="checkbox" class="w-6 h-6 text-notaria-blue rounded-lg focus:ring-2 focus:ring-notaria-blue/50">
                    <span class="text-gray-700 text-lg group-hover:text-gray-900 transition-colors">Agendar cita previamente</span>
                  </label>
                  <label class="flex items-center space-x-4 cursor-pointer group p-4 bg-white rounded-xl hover:bg-gray-50 transition-colors border border-gray-200 hover:border-notaria-blue/30">
                    <input type="checkbox" class="w-6 h-6 text-notaria-blue rounded-lg focus:ring-2 focus:ring-notaria-blue/50">
                    <span class="text-gray-700 text-lg group-hover:text-gray-900 transition-colors">Llegar 10 minutos antes</span>
                  </label>
                  <label class="flex items-center space-x-4 cursor-pointer group p-4 bg-white rounded-xl hover:bg-gray-50 transition-colors border border-gray-200 hover:border-notaria-blue/30">
                    <input type="checkbox" class="w-6 h-6 text-notaria-blue rounded-lg focus:ring-2 focus:ring-notaria-blue/50">
                    <span class="text-gray-700 text-lg group-hover:text-gray-900 transition-colors">Tener claro el tipo de trámite</span>
                  </label>
                  <label class="flex items-center space-x-4 cursor-pointer group p-4 bg-white rounded-xl hover:bg-gray-50 transition-colors border border-gray-200 hover:border-notaria-blue/30">
                    <input type="checkbox" class="w-6 h-6 text-notaria-blue rounded-lg focus:ring-2 focus:ring-notaria-blue/50">
                    <span class="text-gray-700 text-lg group-hover:text-gray-900 transition-colors">Preparar el monto de pago</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative bg-gradient-to-br from-notaria-blue to-notaria-blue/90 text-white py-20 overflow-hidden">
      <!-- Logo difuminado de fondo -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src="assets/images/logonuevo.svg" alt="Logo Notaría" class="w-96 h-96 object-contain">
        </div>
      </div>
      
      <div class="container mx-auto px-4 text-center relative z-10">
        <h2 class="text-3xl md:text-5xl font-bold mb-8 animate-fade-in-up">¿Necesita Ayuda con los Requisitos?</h2>
        <p class="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto animate-fade-in-up animation-delay-200">
          Nuestro equipo está disponible para asesorarle sobre la documentación necesaria 
          y resolver cualquier duda sobre los requisitos.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-400">
          <a href="tel:(01) 234-5678" 
             class="group bg-white text-notaria-blue px-10 py-4 rounded-xl font-semibold text-lg hover:bg-notaria-blue/10 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3">
            <i class="fas fa-phone text-xl"></i>
            <span>Llamar para Consultar</span>
          </a>
          <a href="mailto:contacto&#64;notariafloresquille.com" 
             class="group border-2 border-white text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-notaria-blue hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3">
            <i class="fas fa-envelope text-xl"></i>
            <span>Enviar Consulta por Email</span>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class RequirementsComponent {} 