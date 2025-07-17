import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <section class="bg-notaria-blue text-white fadeInOnScroll">
      <div class="container mx-auto px-4 py-20 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Sobre Nosotros</h1>
        <p class="text-xl text-white/80 max-w-3xl mx-auto">
          Más de 20 años de experiencia brindando servicios notariales profesionales 
          con compromiso, excelencia y confianza.
        </p>
      </div>
    </section>

    <!-- Historia -->
    <section class="py-16 bg-white fadeInOnScroll">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-notaria-blue mb-6">Nuestra Historia</h2>
            <p class="text-lg text-notaria-blue/80 mb-6">
              Fundada en el año 2000, la Notaría Flores Quille nació con la misión de brindar 
              servicios notariales de la más alta calidad, respaldados por la experiencia 
              y profesionalismo de nuestro equipo.
            </p>
            <p class="text-lg text-notaria-blue/80 mb-6">
              A lo largo de más de dos décadas, hemos sido testigos del crecimiento y 
              evolución de nuestra comunidad, adaptándonos a las nuevas tecnologías 
              y regulaciones para ofrecer siempre el mejor servicio.
            </p>
            <p class="text-lg text-notaria-blue/80">
              Nuestro compromiso con la excelencia y la confianza de nuestros clientes 
              nos ha convertido en una de las notarías más respetadas de la región.
            </p>
          </div>
          <div class="bg-notaria-blue/5 rounded-lg p-8">
            <div class="text-center">
              <img src="assets/images/edificiocover.jpg" alt="Edificio de la Notaría Flores Quille" class="w-full h-80 object-cover rounded-lg shadow-lg">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Misión, Visión y Valores -->
    <section class="py-16 bg-notaria-blue/5 fadeInOnScroll">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-notaria-blue mb-4">Misión, Visión y Valores</h2>
          <p class="text-xl text-notaria-blue/80 max-w-3xl mx-auto">
            Los pilares que guían nuestro trabajo diario y nuestro compromiso con la excelencia.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Misión -->
          <div class="bg-white rounded-lg shadow-lg p-8 text-center">
            <div class="w-16 h-16 bg-notaria-wine/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-notaria-wine" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-notaria-blue mb-4">Misión</h3>
            <p class="text-gray-600">
              Brindar servicios notariales profesionales, confiables y eficientes, 
              garantizando la seguridad jurídica de nuestros clientes y contribuyendo 
              al desarrollo de nuestra comunidad.
            </p>
          </div>

          <!-- Visión -->
          <div class="bg-white rounded-lg shadow-lg p-8 text-center">
            <div class="w-16 h-16 bg-notaria-wine/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-notaria-wine" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-notaria-blue mb-4">Visión</h3>
            <p class="text-gray-600">
              Ser reconocidos como la notaría líder en servicios profesionales, 
              innovación tecnológica y compromiso con la excelencia, siendo 
              referentes en el sector notarial.
            </p>
          </div>

          <!-- Valores -->
          <div class="bg-white rounded-lg shadow-lg p-8 text-center">
            <div class="w-16 h-16 bg-notaria-wine/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-notaria-wine" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-notaria-blue mb-4">Valores</h3>
            <p class="text-gray-600">
              Profesionalismo, confidencialidad, integridad, responsabilidad 
              y compromiso con la excelencia en cada servicio que brindamos.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Equipo -->
    <section class="py-16 bg-white fadeInOnScroll">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-notaria-blue mb-4">Nuestro Equipo</h2>
          <p class="text-xl text-notaria-blue/80 max-w-3xl mx-auto">
            Profesionales altamente calificados comprometidos con brindar 
            el mejor servicio a nuestros clientes.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Notario Principal -->
          <div class="bg-gray-50 rounded-lg p-8 text-center">
            <div class="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
              <img src="assets/images/perfil1.jpg" alt="Dr. Carlos Flores - Notario Público" class="w-full h-full object-cover">
            </div>
            <h3 class="text-xl font-bold text-notaria-blue mb-2">Dr. Carlos Flores</h3>
            <p class="text-notaria-wine font-semibold mb-4">Notario Público</p>
            <p class="text-gray-600 mb-4">
              Más de 20 años de experiencia en servicios notariales, 
              especializado en derecho civil y comercial.
            </p>
            <div class="text-sm text-gray-500">
              <p>• Colegiado en el Colegio de Notarios</p>
              <p>• Especialista en Derecho Civil</p>
              <p>• Maestría en Derecho Notarial</p>
            </div>
          </div>

          <!-- Asistente Legal -->
          <div class="bg-gray-50 rounded-lg p-8 text-center">
            <div class="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
              <img src="assets/images/perfil2.jpg" alt="Lic. María Quille - Asesora Legal" class="w-full h-full object-cover">
            </div>
            <h3 class="text-xl font-bold text-notaria-blue mb-2">Lic. María Quille</h3>
            <p class="text-notaria-wine font-semibold mb-4">Asesora Legal</p>
            <p class="text-gray-600 mb-4">
              Especialista en derecho notarial y asesoría legal, 
              con amplia experiencia en trámites complejos.
            </p>
            <div class="text-sm text-gray-500">
              <p>• Abogada colegiada</p>
              <p>• Especialista en Derecho Notarial</p>
              <p>• 10 años de experiencia</p>
            </div>
          </div>

          <!-- Recepcionista -->
          <div class="bg-gray-50 rounded-lg p-8 text-center">
            <div class="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
              <img src="assets/images/perfil3.jpg" alt="Lic. Ana Torres - Atención al Cliente" class="w-full h-full object-cover">
            </div>
            <h3 class="text-xl font-bold text-notaria-blue mb-2">Lic. Ana Torres</h3>
            <p class="text-notaria-wine font-semibold mb-4">Tención al Cliente</p>
            <p class="text-gray-600 mb-4">
              Especialista en atención personalizada y gestión 
              eficiente de trámites notariales.
            </p>
            <div class="text-sm text-gray-500">
              <p>• Técnica en Administración</p>
              <p>• Especialista en Atención al Cliente</p>
              <p>• 8 años de experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certificaciones -->
    <section class="py-16 bg-notaria-blue/5 fadeInOnScroll">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-notaria-blue mb-4">Certificaciones y Reconocimientos</h2>
          <p class="text-xl text-notaria-blue/80 max-w-3xl mx-auto">
            Nuestro compromiso con la excelencia ha sido reconocido por diversas instituciones.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-white rounded-lg p-6 text-center shadow-lg">
            <div class="w-16 h-16 bg-notaria-wine/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-notaria-wine" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-notaria-blue mb-2">Colegio de Notarios</h3>
            <p class="text-notaria-blue/80 text-sm">Miembro Activo</p>
          </div>

          <div class="bg-white rounded-lg p-6 text-center shadow-lg">
            <div class="w-16 h-16 bg-notaria-wine/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-notaria-wine" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-notaria-blue mb-2">ISO 9001</h3>
            <p class="text-notaria-blue/80 text-sm">Certificación de Calidad</p>
          </div>

          <div class="bg-white rounded-lg p-6 text-center shadow-lg">
            <div class="w-16 h-16 bg-notaria-wine/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-notaria-wine" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-notaria-blue mb-2">Premio Excelencia</h3>
            <p class="text-notaria-blue/80 text-sm">2023</p>
          </div>

          <div class="bg-white rounded-lg p-6 text-center shadow-lg">
            <div class="w-16 h-16 bg-notaria-wine/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-notaria-wine" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-notaria-blue mb-2">Acreditación</h3>
            <p class="text-notaria-blue/80 text-sm">Ministerio de Justicia</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class AboutComponent {} 