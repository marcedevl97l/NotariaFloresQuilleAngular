import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faBalanceScale, 
  faGavel, 
  faBookOpen, 
  faShieldAlt, 
  faUserShield, 
  faFileAlt,
  faCheckCircle,
  faExclamationTriangle,
  faInfoCircle,
  faArrowRight,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
  faUsers,
  faHandshake,
  faLock,
  faEye,
  faFileContract,
  faScroll,
  faCertificate,
  faQuestionCircle,
  faDollarSign
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-legal-info',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-notaria-blue to-notaria-blue/90 text-white relative overflow-hidden fadeInOnScroll">
      <!-- Background Logo -->
      <div class="absolute inset-0 flex items-center justify-center opacity-5">
        <img 
          src="assets/images/logonuevo.svg" 
          alt="Logo Notaría Flores Quille" 
          class="w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] object-cover"
        >
      </div>
      
      <div class="container mx-auto px-4 py-20 text-center relative z-10">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Información Legal
          </h1>
          <div class="w-16 h-1 bg-notaria-wine mx-auto mb-6 animate-slide-in"></div>
          <p class="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
            Conozca los aspectos legales importantes relacionados con los servicios notariales 
            y sus derechos como ciudadano.
          </p>
          <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <a href="#rol-notario" 
               class="bg-notaria-wine text-white px-8 py-3 rounded-lg font-semibold hover:bg-notaria-wine/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 group">
              <fa-icon [icon]="faBalanceScale" class="fa-lg"></fa-icon>
              Conocer Más
              <fa-icon [icon]="faArrowRight" class="fa-lg group-hover:translate-x-1 transition-transform"></fa-icon>
            </a>
            <a href="#contacto" 
               class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-notaria-blue transition-all duration-300 flex items-center justify-center gap-2 group">
              <fa-icon [icon]="faPhone" class="fa-lg"></fa-icon>
              Consultar
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Rol del Notario -->
    <section id="rol-notario" class="bg-white py-16 fadeInOnScroll">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-notaria-blue/10 to-notaria-blue/20 rounded-full flex items-center justify-center">
                <fa-icon [icon]="faGavel" class="fa-2xl text-notaria-blue"></fa-icon>
              </div>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900">¿Qué es un Notario Público?</h2>
            </div>
            <div class="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p class="hover:text-gray-800 transition-colors duration-300">
                El notario público es un profesional del derecho que ejerce la función notarial, 
                la cual consiste en dar fe pública de los actos y contratos que ante él se celebren, 
                así como de los hechos que presencie.
              </p>
              <p class="hover:text-gray-800 transition-colors duration-300">
                Su función es esencial para garantizar la seguridad jurídica, la autenticidad 
                y la validez de los documentos que se otorgan ante su fe, proporcionando 
                certeza legal a las relaciones jurídicas entre particulares.
              </p>
              <p class="hover:text-gray-800 transition-colors duration-300">
                El notario actúa como un funcionario público imparcial, independiente y 
                profesional, que asesora a las partes sobre las consecuencias jurídicas 
                de sus actos.
              </p>
            </div>
          </div>
          <div class="bg-gradient-to-br from-notaria-blue/5 to-notaria-blue/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 class="text-2xl font-bold text-notaria-blue mb-6 flex items-center gap-3">
              <fa-icon [icon]="faShieldAlt" class="fa-lg"></fa-icon>
              Funciones Principales
            </h3>
            <div class="space-y-6">
              <div class="flex items-start space-x-4 group hover:bg-white/50 p-3 rounded-lg transition-all duration-300">
                <div class="w-10 h-10 bg-notaria-wine/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                  <fa-icon [icon]="faCertificate" class="fa-sm text-notaria-wine"></fa-icon>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Dar Fe Pública</h4>
                  <p class="text-gray-600">Certificar la autenticidad de documentos, firmas y hechos</p>
                </div>
              </div>
              <div class="flex items-start space-x-4 group hover:bg-white/50 p-3 rounded-lg transition-all duration-300">
                <div class="w-10 h-10 bg-notaria-wine/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                  <fa-icon [icon]="faBookOpen" class="fa-sm text-notaria-wine"></fa-icon>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Asesorar</h4>
                  <p class="text-gray-600">Proporcionar orientación legal sobre las consecuencias de los actos</p>
                </div>
              </div>
              <div class="flex items-start space-x-4 group hover:bg-white/50 p-3 rounded-lg transition-all duration-300">
                <div class="w-10 h-10 bg-notaria-wine/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                  <fa-icon [icon]="faHandshake" class="fa-sm text-notaria-wine"></fa-icon>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Prevenir Conflictos</h4>
                  <p class="text-gray-600">Reducir litigios mediante documentos claros y precisos</p>
                </div>
              </div>
              <div class="flex items-start space-x-4 group hover:bg-white/50 p-3 rounded-lg transition-all duration-300">
                <div class="w-10 h-10 bg-notaria-wine/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                  <fa-icon [icon]="faLock" class="fa-sm text-notaria-wine"></fa-icon>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Conservar</h4>
                  <p class="text-gray-600">Mantener y custodiar los documentos notariales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Marco Legal -->
    <section class="py-16 bg-gradient-to-br from-gray-50 to-white fadeInOnScroll">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <div class="flex items-center justify-center gap-4 mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-notaria-blue/10 to-notaria-blue/20 rounded-full flex items-center justify-center">
              <fa-icon [icon]="faBookOpen" class="fa-2xl text-notaria-blue"></fa-icon>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-notaria-blue">Marco Legal</h2>
          </div>
          <p class="text-xl text-notaria-blue/80 max-w-3xl mx-auto">
            Base legal que regula los servicios notariales en nuestro país
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
            <div class="w-16 h-16 bg-gradient-to-br from-notaria-blue/10 to-notaria-blue/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <fa-icon [icon]="faFileAlt" class="fa-2xl text-notaria-blue"></fa-icon>
            </div>
            <h3 class="text-xl font-semibold mb-4 text-notaria-blue">Constitución Política</h3>
            <p class="text-notaria-blue/80 mb-6 leading-relaxed">
              Artículos que establecen los derechos fundamentales y el marco legal para los servicios notariales.
            </p>
            <div class="space-y-3 text-sm text-notaria-blue/70">
              <div class="flex items-center gap-2">
                <fa-icon [icon]="faCheckCircle" class="fa-sm text-notaria-wine"></fa-icon>
                <p>Art. 139 - Función jurisdiccional</p>
              </div>
              <div class="flex items-center gap-2">
                <fa-icon [icon]="faCheckCircle" class="fa-sm text-notaria-wine"></fa-icon>
                <p>Art. 149 - Derechos de propiedad</p>
              </div>
              <div class="flex items-center gap-2">
                <fa-icon [icon]="faCheckCircle" class="fa-sm text-notaria-wine"></fa-icon>
                <p>Art. 2 - Derechos fundamentales</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
            <div class="w-16 h-16 bg-gradient-to-br from-notaria-blue/10 to-notaria-blue/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <fa-icon [icon]="faScroll" class="fa-2xl text-notaria-blue"></fa-icon>
            </div>
            <h3 class="text-xl font-semibold mb-4 text-notaria-blue">Código Civil</h3>
            <p class="text-notaria-blue/80 mb-6 leading-relaxed">
              Normas que regulan las relaciones civiles y los actos jurídicos notariales.
            </p>
            <div class="space-y-3 text-sm text-notaria-blue/70">
              <div class="flex items-center gap-2">
                <fa-icon [icon]="faCheckCircle" class="fa-sm text-notaria-wine"></fa-icon>
                <p>Libro I - Personas</p>
              </div>
              <div class="flex items-center gap-2">
                <fa-icon [icon]="faCheckCircle" class="fa-sm text-notaria-wine"></fa-icon>
                <p>Libro II - Actos jurídicos</p>
              </div>
              <div class="flex items-center gap-2">
                <fa-icon [icon]="faCheckCircle" class="fa-sm text-notaria-wine"></fa-icon>
                <p>Libro III - Derecho de familia</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
            <div class="w-16 h-16 bg-gradient-to-br from-notaria-blue/10 to-notaria-blue/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <fa-icon [icon]="faBalanceScale" class="fa-2xl text-notaria-blue"></fa-icon>
            </div>
            <h3 class="text-xl font-semibold mb-4 text-notaria-blue">Ley del Notariado</h3>
            <p class="text-notaria-blue/80 mb-6 leading-relaxed">
              Ley específica que regula la función notarial y los servicios que prestamos.
            </p>
            <div class="space-y-3 text-sm text-notaria-blue/70">
              <div class="flex items-center gap-2">
                <fa-icon [icon]="faCheckCircle" class="fa-sm text-notaria-wine"></fa-icon>
                <p>Decreto Ley 26002</p>
              </div>
              <div class="flex items-center gap-2">
                <fa-icon [icon]="faCheckCircle" class="fa-sm text-notaria-wine"></fa-icon>
                <p>Reglamento del Notariado</p>
              </div>
              <div class="flex items-center gap-2">
                <fa-icon [icon]="faCheckCircle" class="fa-sm text-notaria-wine"></fa-icon>
                <p>Código de Ética</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Preguntas Frecuentes -->
    <section class="py-16 bg-white fadeInOnScroll">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <div class="flex items-center justify-center gap-4 mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-notaria-blue/10 to-notaria-blue/20 rounded-full flex items-center justify-center">
              <fa-icon [icon]="faQuestionCircle" class="fa-2xl text-notaria-blue"></fa-icon>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Preguntas Frecuentes</h2>
          </div>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros servicios notariales
          </p>
        </div>

        <div class="max-w-4xl mx-auto space-y-6">
          <div class="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 border border-gray-100">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-notaria-wine/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <fa-icon [icon]="faFileContract" class="fa-lg text-notaria-wine"></fa-icon>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-notaria-blue transition-colors">¿Qué documentos necesito para un poder notarial?</h3>
                <p class="text-gray-600 leading-relaxed">
                  Para otorgar un poder notarial, necesitará: documento de identidad vigente (DNI, pasaporte), 
                  especificar claramente los actos para los que se otorga el poder, y en algunos casos, 
                  documentación adicional según el tipo de poder (especial o general).
                </p>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 border border-gray-100">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-notaria-wine/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <fa-icon [icon]="faClock" class="fa-lg text-notaria-wine"></fa-icon>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-notaria-blue transition-colors">¿Cuánto tiempo tarda en estar listo un documento notarial?</h3>
                <p class="text-gray-600 leading-relaxed">
                  El tiempo varía según el tipo de documento. Las declaraciones juradas y autenticaciones 
                  simples pueden estar listas el mismo día. Los poderes notariales y contratos complejos 
                  pueden tomar 2-3 días hábiles. Para casos urgentes, ofrecemos servicios exprés.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 border border-gray-100">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-notaria-wine/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <fa-icon [icon]="faUserShield" class="fa-lg text-notaria-wine"></fa-icon>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-notaria-blue transition-colors">¿Puedo hacer un trámite notarial sin estar presente?</h3>
                <p class="text-gray-600 leading-relaxed">
                  En general, no es posible. La mayoría de trámites notariales requieren la presencia 
                  física de las partes para verificar su identidad y voluntad. Sin embargo, en casos 
                  especiales y con autorización previa, pueden realizarse trámites a domicilio.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 border border-gray-100">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-notaria-wine/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <fa-icon [icon]="faBalanceScale" class="fa-lg text-notaria-wine"></fa-icon>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-notaria-blue transition-colors">¿Qué diferencia hay entre un poder general y uno especial?</h3>
                <p class="text-gray-600 leading-relaxed">
                  El poder general permite al apoderado realizar múltiples actos en nombre del poderdante. 
                  El poder especial se limita a actos específicos determinados. El poder general es más 
                  amplio pero también más restrictivo en términos de responsabilidad.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 border border-gray-100">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-notaria-wine/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <fa-icon [icon]="faExclamationTriangle" class="fa-lg text-notaria-wine"></fa-icon>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-notaria-blue transition-colors">¿Los documentos notariales tienen fecha de vencimiento?</h3>
                <p class="text-gray-600 leading-relaxed">
                  Los documentos notariales no tienen fecha de vencimiento automática. Sin embargo, 
                  algunos poderes pueden tener plazos específicos establecidos por las partes. 
                  Es recomendable revisar la vigencia según el uso específico del documento.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 border border-gray-100">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-notaria-wine/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <fa-icon [icon]="faHandshake" class="fa-lg text-notaria-wine"></fa-icon>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-notaria-blue transition-colors">¿Puedo revocar un poder notarial?</h3>
                <p class="text-gray-600 leading-relaxed">
                  Sí, puede revocar un poder notarial en cualquier momento. Para hacerlo, debe 
                  acudir a la notaría y otorgar un documento de revocación. Es importante notificar 
                  al apoderado sobre la revocación para evitar el uso indebido del poder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Glosario -->
    <section class="bg-gray-50 py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Glosario de Términos</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Conozca los términos jurídicos más comunes utilizados en trámites notariales
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-lg font-bold text-gray-900 mb-4">Términos Básicos</h3>
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-blue-600">Fe Pública</h4>
                <p class="text-sm text-gray-600">Garantía de autenticidad que otorga el notario a los documentos</p>
              </div>
              <div>
                <h4 class="font-semibold text-blue-600">Protocolo</h4>
                <p class="text-sm text-gray-600">Libro oficial donde se registran los documentos notariales</p>
              </div>
              <div>
                <h4 class="font-semibold text-blue-600">Autenticación</h4>
                <p class="text-sm text-gray-600">Certificación de la autenticidad de un documento o firma</p>
              </div>
              <div>
                <h4 class="font-semibold text-blue-600">Legalización</h4>
                <p class="text-sm text-gray-600">Proceso de validación de documentos para uso en el extranjero</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-lg font-bold text-gray-900 mb-4">Términos de Poderes</h3>
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-blue-600">Poderdante</h4>
                <p class="text-sm text-gray-600">Persona que otorga el poder a otra</p>
              </div>
              <div>
                <h4 class="font-semibold text-blue-600">Apoderado</h4>
                <p class="text-sm text-gray-600">Persona que recibe el poder para actuar en nombre de otro</p>
              </div>
              <div>
                <h4 class="font-semibold text-blue-600">Revocación</h4>
                <p class="text-sm text-gray-600">Acto mediante el cual se cancela un poder otorgado</p>
              </div>
              <div>
                <h4 class="font-semibold text-blue-600">Substitución</h4>
                <p class="text-sm text-gray-600">Facultad del apoderado de delegar el poder en otra persona</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Derechos y Obligaciones -->
    <section class="py-16 bg-gradient-to-br from-notaria-blue/5 to-notaria-blue/10 fadeInOnScroll">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <div class="flex items-center justify-center gap-4 mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-notaria-blue/10 to-notaria-blue/20 rounded-full flex items-center justify-center">
              <fa-icon [icon]="faUserShield" class="fa-2xl text-notaria-blue"></fa-icon>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-notaria-blue">Derechos y Obligaciones</h2>
          </div>
          <p class="text-xl text-notaria-blue/80 max-w-3xl mx-auto">
            Conozca sus derechos como cliente y nuestras obligaciones como notarios
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
            <h3 class="text-2xl font-bold text-notaria-blue mb-8 flex items-center gap-3">
              <fa-icon [icon]="faShieldAlt" class="fa-lg"></fa-icon>
              Derechos del Cliente
            </h3>
            <div class="space-y-6">
              <div class="flex items-start space-x-4 group/item hover:bg-gray-50 p-3 rounded-lg transition-all duration-300">
                <div class="w-8 h-8 bg-notaria-wine/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                  <fa-icon [icon]="faLock" class="fa-sm text-notaria-wine"></fa-icon>
                </div>
                <div>
                  <h4 class="font-semibold text-notaria-blue mb-2">Confidencialidad</h4>
                  <p class="text-notaria-blue/80 text-sm leading-relaxed">Derecho a que sus documentos y trámites sean tratados con absoluta confidencialidad.</p>
                </div>
              </div>
              <div class="flex items-start space-x-4 group/item hover:bg-gray-50 p-3 rounded-lg transition-all duration-300">
                <div class="w-8 h-8 bg-notaria-wine/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                  <fa-icon [icon]="faInfoCircle" class="fa-sm text-notaria-wine"></fa-icon>
                </div>
                <div>
                  <h4 class="font-semibold text-notaria-blue mb-2">Información Clara</h4>
                  <p class="text-notaria-blue/80 text-sm leading-relaxed">Derecho a recibir información clara sobre los trámites y costos involucrados.</p>
                </div>
              </div>
              <div class="flex items-start space-x-4 group/item hover:bg-gray-50 p-3 rounded-lg transition-all duration-300">
                <div class="w-8 h-8 bg-notaria-wine/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                  <fa-icon [icon]="faUsers" class="fa-sm text-notaria-wine"></fa-icon>
                </div>
                <div>
                  <h4 class="font-semibold text-notaria-blue mb-2">Atención Profesional</h4>
                  <p class="text-notaria-blue/80 text-sm leading-relaxed">Derecho a recibir atención profesional y respetuosa en todo momento.</p>
                </div>
              </div>
              <div class="flex items-start space-x-4 group/item hover:bg-gray-50 p-3 rounded-lg transition-all duration-300">
                <div class="w-8 h-8 bg-notaria-wine/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                  <fa-icon [icon]="faEye" class="fa-sm text-notaria-wine"></fa-icon>
                </div>
                <div>
                  <h4 class="font-semibold text-notaria-blue mb-2">Documentos Seguros</h4>
                  <p class="text-notaria-blue/80 text-sm leading-relaxed">Derecho a que sus documentos sean custodiados con la máxima seguridad.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
            <h3 class="text-2xl font-bold text-notaria-blue mb-8 flex items-center gap-3">
              <fa-icon [icon]="faBalanceScale" class="fa-lg"></fa-icon>
              Obligaciones del Notario
            </h3>
            <div class="space-y-6">
              <div class="flex items-start space-x-4 group/item hover:bg-gray-50 p-3 rounded-lg transition-all duration-300">
                <div class="w-8 h-8 bg-notaria-wine/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                  <fa-icon [icon]="faUserShield" class="fa-sm text-notaria-wine"></fa-icon>
                </div>
                <div>
                  <h4 class="font-semibold text-notaria-blue mb-2">Identificación de Identidad</h4>
                  <p class="text-notaria-blue/80 text-sm leading-relaxed">Obligación de verificar la identidad de todas las partes involucradas.</p>
                </div>
              </div>
              <div class="flex items-start space-x-4 group/item hover:bg-gray-50 p-3 rounded-lg transition-all duration-300">
                <div class="w-8 h-8 bg-notaria-wine/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                  <fa-icon [icon]="faBookOpen" class="fa-sm text-notaria-wine"></fa-icon>
                </div>
                <div>
                  <h4 class="font-semibold text-notaria-blue mb-2">Asesoría Legal</h4>
                  <p class="text-notaria-blue/80 text-sm leading-relaxed">Obligación de brindar asesoría legal adecuada sobre los actos jurídicos.</p>
                </div>
              </div>
              <div class="flex items-start space-x-4 group/item hover:bg-gray-50 p-3 rounded-lg transition-all duration-300">
                <div class="w-8 h-8 bg-notaria-wine/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                  <fa-icon [icon]="faLock" class="fa-sm text-notaria-wine"></fa-icon>
                </div>
                <div>
                  <h4 class="font-semibold text-notaria-blue mb-2">Custodia de Documentos</h4>
                  <p class="text-notaria-blue/80 text-sm leading-relaxed">Obligación de custodiar los documentos con la máxima seguridad.</p>
                </div>
              </div>
              <div class="flex items-start space-x-4 group/item hover:bg-gray-50 p-3 rounded-lg transition-all duration-300">
                <div class="w-8 h-8 bg-notaria-wine/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                  <fa-icon [icon]="faEye" class="fa-sm text-notaria-wine"></fa-icon>
                </div>
                <div>
                  <h4 class="font-semibold text-notaria-blue mb-2">Secreto Profesional</h4>
                  <p class="text-notaria-blue/80 text-sm leading-relaxed">Obligación de mantener el secreto profesional sobre todos los actos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Información Importante -->
    <section class="py-16 bg-gradient-to-br from-gray-50 to-white fadeInOnScroll">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <div class="flex items-center justify-center gap-4 mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-notaria-blue/10 to-notaria-blue/20 rounded-full flex items-center justify-center">
              <fa-icon [icon]="faInfoCircle" class="fa-2xl text-notaria-blue"></fa-icon>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-notaria-blue">Información Importante</h2>
          </div>
          <p class="text-xl text-notaria-blue/80 max-w-3xl mx-auto">
            Aspectos importantes que debe conocer antes de realizar trámites notariales
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-notaria-wine/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <fa-icon [icon]="faCertificate" class="fa-lg text-notaria-wine"></fa-icon>
              </div>
              <h3 class="text-xl font-semibold text-notaria-blue">Validez de Documentos</h3>
            </div>
            <div class="space-y-4 text-notaria-blue/80">
              <div class="flex items-start gap-3">
                <fa-icon [icon]="faCheckCircle" class="fa-sm text-notaria-wine mt-1 flex-shrink-0"></fa-icon>
                <p class="text-sm leading-relaxed">Los documentos notariales tienen validez legal en todo el territorio nacional</p>
              </div>
              <div class="flex items-start gap-3">
                <fa-icon [icon]="faCheckCircle" class="fa-sm text-notaria-wine mt-1 flex-shrink-0"></fa-icon>
                <p class="text-sm leading-relaxed">Para uso internacional, pueden requerir apostilla o legalización</p>
              </div>
              <div class="flex items-start gap-3">
                <fa-icon [icon]="faCheckCircle" class="fa-sm text-notaria-wine mt-1 flex-shrink-0"></fa-icon>
                <p class="text-sm leading-relaxed">Los testamentos públicos abiertos tienen validez inmediata</p>
              </div>
              <div class="flex items-start gap-3">
                <fa-icon [icon]="faCheckCircle" class="fa-sm text-notaria-wine mt-1 flex-shrink-0"></fa-icon>
                <p class="text-sm leading-relaxed">Los poderes notariales pueden ser revocados en cualquier momento</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-notaria-wine/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <fa-icon [icon]="faClock" class="fa-lg text-notaria-wine"></fa-icon>
              </div>
              <h3 class="text-xl font-semibold text-notaria-blue">Plazos y Tiempos</h3>
            </div>
            <div class="space-y-4 text-notaria-blue/80">
              <div class="flex items-start gap-3">
                <fa-icon [icon]="faCheckCircle" class="fa-sm text-notaria-wine mt-1 flex-shrink-0"></fa-icon>
                <p class="text-sm leading-relaxed">La mayoría de trámites se realizan el mismo día</p>
              </div>
              <div class="flex items-start gap-3">
                <fa-icon [icon]="faCheckCircle" class="fa-sm text-notaria-wine mt-1 flex-shrink-0"></fa-icon>
                <p class="text-sm leading-relaxed">Documentos complejos pueden tomar 2-3 días hábiles</p>
              </div>
              <div class="flex items-start gap-3">
                <fa-icon [icon]="faCheckCircle" class="fa-sm text-notaria-wine mt-1 flex-shrink-0"></fa-icon>
                <p class="text-sm leading-relaxed">Los testamentos requieren cita previa</p>
              </div>
              <div class="flex items-start gap-3">
                <fa-icon [icon]="faCheckCircle" class="fa-sm text-notaria-wine mt-1 flex-shrink-0"></fa-icon>
                <p class="text-sm leading-relaxed">Las copias certificadas se entregan inmediatamente</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-notaria-wine/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <fa-icon [icon]="faFileAlt" class="fa-lg text-notaria-wine"></fa-icon>
              </div>
              <h3 class="text-xl font-semibold text-notaria-blue">Requisitos Generales</h3>
            </div>
            <div class="space-y-4 text-notaria-blue/80">
              <div class="flex items-start gap-3">
                <fa-icon [icon]="faCheckCircle" class="fa-sm text-notaria-wine mt-1 flex-shrink-0"></fa-icon>
                <p class="text-sm leading-relaxed">Documento de identidad vigente (DNI, CE, pasaporte)</p>
              </div>
              <div class="flex items-start gap-3">
                <fa-icon [icon]="faCheckCircle" class="fa-sm text-notaria-wine mt-1 flex-shrink-0"></fa-icon>
                <p class="text-sm leading-relaxed">Documentos originales para certificación</p>
              </div>
              <div class="flex items-start gap-3">
                <fa-icon [icon]="faCheckCircle" class="fa-sm text-notaria-wine mt-1 flex-shrink-0"></fa-icon>
                <p class="text-sm leading-relaxed">Pago de aranceles correspondientes</p>
              </div>
              <div class="flex items-start gap-3">
                <fa-icon [icon]="faCheckCircle" class="fa-sm text-notaria-wine mt-1 flex-shrink-0"></fa-icon>
                <p class="text-sm leading-relaxed">Presencia física de las partes involucradas</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-notaria-wine/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <fa-icon [icon]="faDollarSign" class="fa-lg text-notaria-wine"></fa-icon>
              </div>
              <h3 class="text-xl font-semibold text-notaria-blue">Costos y Aranceles</h3>
            </div>
            <div class="space-y-4 text-notaria-blue/80">
              <div class="flex items-start gap-3">
                <fa-icon [icon]="faCheckCircle" class="fa-sm text-notaria-wine mt-1 flex-shrink-0"></fa-icon>
                <p class="text-sm leading-relaxed">Los aranceles están regulados por ley</p>
              </div>
              <div class="flex items-start gap-3">
                <fa-icon [icon]="faCheckCircle" class="fa-sm text-notaria-wine mt-1 flex-shrink-0"></fa-icon>
                <p class="text-sm leading-relaxed">Varían según el tipo de documento</p>
              </div>
              <div class="flex items-start gap-3">
                <fa-icon [icon]="faCheckCircle" class="fa-sm text-notaria-wine mt-1 flex-shrink-0"></fa-icon>
                <p class="text-sm leading-relaxed">Se aceptan diferentes formas de pago</p>
              </div>
              <div class="flex items-start gap-3">
                <fa-icon [icon]="faCheckCircle" class="fa-sm text-notaria-wine mt-1 flex-shrink-0"></fa-icon>
                <p class="text-sm leading-relaxed">Se emite comprobante de pago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contacto para Consultas -->
    <section id="contacto" class="py-16 bg-gradient-to-r from-notaria-blue to-notaria-blue/90 text-white relative overflow-hidden fadeInOnScroll">
      <!-- Background Logo -->
      <div class="absolute inset-0 flex items-center justify-center opacity-5">
        <img 
          src="assets/images/logonuevo.svg" 
          alt="Logo Notaría Flores Quille" 
          class="w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] object-cover"
        >
      </div>
      
      <div class="container mx-auto px-4 text-center relative z-10">
        <div class="max-w-4xl mx-auto">
          <div class="flex items-center justify-center gap-4 mb-6">
            <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <fa-icon [icon]="faQuestionCircle" class="fa-2xl text-white"></fa-icon>
            </div>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white">¿Tiene Dudas Legales?</h2>
          </div>
          <div class="w-16 h-1 bg-notaria-wine mx-auto mb-6"></div>
          <p class="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Nuestro equipo está disponible para resolver sus consultas legales y brindarle 
            la asesoría que necesita para sus trámites notariales.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <a routerLink="/contacto" 
               class="group bg-notaria-wine text-white px-10 py-4 rounded-full font-semibold hover:bg-notaria-wine/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3 text-lg">
              <fa-icon [icon]="faEnvelope" class="fa-lg"></fa-icon>
              Consultar Ahora
              <fa-icon [icon]="faArrowRight" class="fa-lg group-hover:translate-x-1 transition-transform"></fa-icon>
            </a>
            <a href="tel:+51977458056" 
               class="group border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-notaria-blue transition-all duration-300 flex items-center justify-center gap-3 text-lg">
              <fa-icon [icon]="faPhone" class="fa-lg"></fa-icon>
              Llamar Ahora
            </a>
          </div>
          
          <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div class="w-12 h-12 bg-notaria-wine/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <fa-icon [icon]="faMapMarkerAlt" class="fa-lg text-white"></fa-icon>
              </div>
              <h3 class="text-lg font-semibold mb-2">Ubicación</h3>
              <p class="text-white/80 text-sm">Av. Universitaria 6822 – segundo piso – Comas</p>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div class="w-12 h-12 bg-notaria-wine/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <fa-icon [icon]="faPhone" class="fa-lg text-white"></fa-icon>
              </div>
              <h3 class="text-lg font-semibold mb-2">Teléfono</h3>
              <p class="text-white/80 text-sm">+51 977458056</p>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div class="w-12 h-12 bg-notaria-wine/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <fa-icon [icon]="faEnvelope" class="fa-lg text-white"></fa-icon>
              </div>
              <h3 class="text-lg font-semibold mb-2">Email</h3>
              <p class="text-white/80 text-sm">contacto&#64;notariafloresquille.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class LegalInfoComponent {
  // FontAwesome icons
  faBalanceScale = faBalanceScale;
  faGavel = faGavel;
  faBookOpen = faBookOpen;
  faShieldAlt = faShieldAlt;
  faUserShield = faUserShield;
  faFileAlt = faFileAlt;
  faCheckCircle = faCheckCircle;
  faExclamationTriangle = faExclamationTriangle;
  faInfoCircle = faInfoCircle;
  faArrowRight = faArrowRight;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faMapMarkerAlt = faMapMarkerAlt;
  faClock = faClock;
  faUsers = faUsers;
  faHandshake = faHandshake;
  faLock = faLock;
  faEye = faEye;
  faFileContract = faFileContract;
  faScroll = faScroll;
  faCertificate = faCertificate;
  faQuestionCircle = faQuestionCircle;
  faDollarSign = faDollarSign;
} 