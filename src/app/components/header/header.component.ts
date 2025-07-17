import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="bg-notaria-blue text-white shadow-lg sticky top-0 z-50">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4">
          <!-- Logo -->
          <div class="flex items-center space-x-4">
            <img src="assets/images/logonuevobarra.svg" alt="Logo Notaría Flores Quille" 
                 class="w-12 h-12 lg:w-14 lg:h-14">
            <div>
              <h1 class="text-xl font-bold">Notaría Flores Quille</h1>
              <p class="text-white/70 text-sm">Servicios Notariales Profesionales</p>
            </div>
          </div>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex space-x-8">
            <a routerLink="/inicio" routerLinkActive="text-notaria-wine border-b-2 border-notaria-wine" 
               class="relative group px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:text-white transform">
              <span class="relative z-10">Inicio</span>
              <div class="absolute inset-0 bg-gradient-to-r from-notaria-wine/20 to-notaria-wine/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a routerLink="/sobre-nosotros" routerLinkActive="text-notaria-wine border-b-2 border-notaria-wine" 
               class="relative group px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:text-white transform">
              <span class="relative z-10">Sobre Nosotros</span>
              <div class="absolute inset-0 bg-gradient-to-r from-notaria-wine/20 to-notaria-wine/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a routerLink="/servicios" routerLinkActive="text-notaria-wine border-b-2 border-notaria-wine" 
               class="relative group px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:text-white transform">
              <span class="relative z-10">Servicios</span>
              <div class="absolute inset-0 bg-gradient-to-r from-notaria-wine/20 to-notaria-wine/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a routerLink="/informacion-legal" routerLinkActive="text-notaria-wine border-b-2 border-notaria-wine" 
               class="relative group px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:text-white transform">
              <span class="relative z-10">Información Legal</span>
              <div class="absolute inset-0 bg-gradient-to-r from-notaria-wine/20 to-notaria-wine/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a routerLink="/requisitos" routerLinkActive="text-notaria-wine border-b-2 border-notaria-wine" 
               class="relative group px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:text-white transform">
              <span class="relative z-10">Requisitos</span>
              <div class="absolute inset-0 bg-gradient-to-r from-notaria-wine/20 to-notaria-wine/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a routerLink="/horarios-ubicacion" routerLinkActive="text-notaria-wine border-b-2 border-notaria-wine" 
               class="relative group px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:text-white transform">
              <span class="relative z-10">Horarios</span>
              <div class="absolute inset-0 bg-gradient-to-r from-notaria-wine/20 to-notaria-wine/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a routerLink="/recursos" routerLinkActive="text-notaria-wine border-b-2 border-notaria-wine" 
               class="relative group px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:text-white transform">
              <span class="relative z-10">Recursos</span>
              <div class="absolute inset-0 bg-gradient-to-r from-notaria-wine/20 to-notaria-wine/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a routerLink="/contacto" routerLinkActive="text-notaria-wine border-b-2 border-notaria-wine" 
               class="relative group px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:text-white transform">
              <span class="relative z-10">Contacto</span>
              <div class="absolute inset-0 bg-gradient-to-r from-notaria-wine/20 to-notaria-wine/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </nav>

          <!-- Mobile menu button -->
          <button (click)="toggleMobileMenu()" class="lg:hidden p-2 rounded-md hover:bg-white/10 hover:scale-105 transition-all duration-300">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div *ngIf="mobileMenuOpen" class="lg:hidden py-4 border-t border-white/20">
          <nav class="flex flex-col space-y-2">
            <a routerLink="/inicio" (click)="closeMobileMenu()" 
               class="group relative px-4 py-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-lg transform">
              <span class="relative z-10">Inicio</span>
              <div class="absolute inset-0 bg-gradient-to-r from-notaria-wine/20 to-notaria-wine/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a routerLink="/sobre-nosotros" (click)="closeMobileMenu()" 
               class="group relative px-4 py-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-lg transform">
              <span class="relative z-10">Sobre Nosotros</span>
              <div class="absolute inset-0 bg-gradient-to-r from-notaria-wine/20 to-notaria-wine/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a routerLink="/servicios" (click)="closeMobileMenu()" 
               class="group relative px-4 py-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-lg transform">
              <span class="relative z-10">Servicios</span>
              <div class="absolute inset-0 bg-gradient-to-r from-notaria-wine/20 to-notaria-wine/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a routerLink="/informacion-legal" (click)="closeMobileMenu()" 
               class="group relative px-4 py-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-lg transform">
              <span class="relative z-10">Información Legal</span>
              <div class="absolute inset-0 bg-gradient-to-r from-notaria-wine/20 to-notaria-wine/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a routerLink="/requisitos" (click)="closeMobileMenu()" 
               class="group relative px-4 py-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-lg transform">
              <span class="relative z-10">Requisitos</span>
              <div class="absolute inset-0 bg-gradient-to-r from-notaria-wine/20 to-notaria-wine/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a routerLink="/horarios-ubicacion" (click)="closeMobileMenu()" 
               class="group relative px-4 py-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-lg transform">
              <span class="relative z-10">Horarios</span>
              <div class="absolute inset-0 bg-gradient-to-r from-notaria-wine/20 to-notaria-wine/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a routerLink="/recursos" (click)="closeMobileMenu()" 
               class="group relative px-4 py-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-lg transform">
              <span class="relative z-10">Recursos</span>
              <div class="absolute inset-0 bg-gradient-to-r from-notaria-wine/20 to-notaria-wine/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a routerLink="/contacto" (click)="closeMobileMenu()" 
               class="group relative px-4 py-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-lg transform">
              <span class="relative z-10">Contacto</span>
              <div class="absolute inset-0 bg-gradient-to-r from-notaria-wine/20 to-notaria-wine/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </nav>
        </div>
      </div>
    </header>
  `,
  styles: []
})
export class HeaderComponent {
  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
} 