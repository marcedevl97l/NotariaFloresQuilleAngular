import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="bg-notaria-blue text-white">
      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Información de la Notaría -->
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center space-x-3 mb-4">
              <div
                class="w-8 h-8 bg-notaria-wine rounded-full flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 class="text-lg font-bold">Notaría Flores Quille</h3>
            </div>
            <p class="text-white/70 mb-4">
              Brindamos servicios notariales profesionales con más de 20 años de
              experiencia, comprometidos con la excelencia y la confianza de
              nuestros clientes.
            </p>
            <div class="space-y-2 text-white/70">
              <div class="flex items-center space-x-2">
                <svg
                  class="w-4 h-4 text-notaria-wine"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Av. Universitaria 6822 – segundo piso – Comas</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg
                  class="w-4 h-4 text-notaria-wine"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                  ></path>
                </svg>
                <span>(01) 12329738</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg
                  class="w-4 h-4 text-notaria-wine"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  ></path>
                  <path
                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  ></path>
                </svg>
                <span>contacto&#64;notariafloresquille.com</span>
              </div>
            </div>
          </div>

          <!-- Enlaces Rápidos -->
          <div>
            <h4 class="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul class="space-y-2">
              <li>
                <a
                  routerLink="/servicios"
                  class="text-white/70 hover:text-notaria-wine transition-colors"
                  >Servicios</a
                >
              </li>
              <li>
                <a
                  routerLink="/requisitos"
                  class="text-white/70 hover:text-notaria-wine transition-colors"
                  >Requisitos</a
                >
              </li>
              <li>
                <a
                  routerLink="/horarios-ubicacion"
                  class="text-white/70 hover:text-notaria-wine transition-colors"
                  >Horarios</a
                >
              </li>
              <li>
                <a
                  routerLink="/contacto"
                  class="text-white/70 hover:text-notaria-wine transition-colors"
                  >Contacto</a
                >
              </li>
              <li>
                <a
                  routerLink="/recursos"
                  class="text-white/70 hover:text-notaria-wine transition-colors"
                  >Recursos</a
                >
              </li>
            </ul>
          </div>

          <!-- Horarios -->
          <div>
            <h4 class="text-lg font-semibold mb-4">Horarios de Atención</h4>
            <div class="space-y-2 text-white/70">
              <div class="flex justify-between">
                <span>Lunes - Viernes:</span>
                <span>8:30 AM - 1:30 PM</span>
              </div>
              <div class="flex justify-between">
                <span>Sábados:</span>
                <span>8:00 AM - 1:30 PM</span>
              </div>
              <div class="flex justify-between">
                <span>Domingos:</span>
                <span>Cerrado</span>
              </div>
            </div>
            <!-- Redes Sociales -->
            <div class="mt-6">
              <h4 class="text-lg font-semibold mb-4">Síguenos</h4>
              <div class="flex space-x-4">
                <a
                  href="https://www.facebook.com/NotariaFlores.PaginaOficial "
                  target="_blank" 
                  class="text-white/70 hover:text-notaria-wine transition-colors"
                >
                  <i class="fab fa-facebook-f text-xl"></i>
                </a>
                <a
                  href="#"
                  class="text-white/70 hover:text-notaria-wine transition-colors"
                >
                  <i class="fab fa-twitter text-xl"></i>
                </a>
                <a
                  href="#"
                  class="text-white/70 hover:text-notaria-wine transition-colors"
                >
                  <i class="fab fa-instagram text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Línea divisoria -->
        <div class="border-t border-white/20 mt-8 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-white/70 text-sm">
              © 2025 Notaría Flores Quille. Todos los derechos reservados.
            </p>
            <div class="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                class="text-white/70 hover:text-notaria-wine text-sm transition-colors"
                >Política de Privacidad</a
              >
              <a
                href="#"
                class="text-white/70 hover:text-notaria-wine text-sm transition-colors"
                >Términos de Servicio</a
              >
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [],
})
export class FooterComponent {}
