import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="isLoading" class="fixed inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-8 shadow-2xl flex flex-col items-center space-y-4">
        <!-- Spinner animado -->
        <div class="relative">
          <div class="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          <div class="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-blue-400 rounded-full animate-ping"></div>
        </div>
        <!-- Texto de carga -->
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Cargando...</h3>
          <p class="text-gray-600">{{ message || 'Por favor espera un momento' }}</p>
        </div>
        <!-- Puntos animados -->
        <div class="flex space-x-1">
          <div class="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style="animation-delay: 0ms;"></div>
          <div class="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style="animation-delay: 150ms;"></div>
          <div class="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style="animation-delay: 300ms;"></div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class LoadingComponent {
  @Input() isLoading: boolean = false;
  @Input() message: string = '';
} 