import { Component, Input, Output, EventEmitter, HostListener, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="show" class="fixed inset-0 z-50 flex items-start justify-center p-4 overflow-y-auto">
      <!-- Backdrop con click para cerrar -->
      <div 
        class="modal-backdrop fixed inset-0 bg-black/50 transition-opacity duration-300"
        (click)="close.emit()"
      ></div>
      
      <!-- Contenedor del modal -->
      <div class="modal-fade bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] my-8 relative z-10 flex flex-col">
        <!-- Header del modal -->
        <div class="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 class="text-2xl md:text-3xl font-bold text-notaria-blue">{{ title }}</h2>
          <button 
            (click)="close.emit()" 
            class="text-gray-400 hover:text-gray-600 text-3xl font-bold p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Cerrar modal"
          >
            &times;
          </button>
        </div>
        
        <!-- Contenido del modal con scroll -->
        <div class="flex-1 overflow-y-auto p-6">
          <img 
            *ngIf="image" 
            [src]="image" 
            [alt]="title" 
            class="w-full h-48 md:h-64 object-cover rounded-lg mb-6"
          >
          <ng-content></ng-content>
        </div>
        
        <!-- Footer del modal -->
        <div class="flex justify-end p-6 border-t border-gray-200 bg-gray-50">
          <button 
            (click)="close.emit()" 
            class="bg-notaria-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-notaria-blue/90 transition-colors flex items-center space-x-2"
          >
            <i class="fas fa-times"></i>
            <span>Cerrar</span>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal-fade {
      animation: modalIn 0.3s cubic-bezier(0.4,0,0.2,1);
    }
    
    @keyframes modalIn {
      0% {
        opacity: 0;
        transform: scale(0.95) translateY(-20px);
      }
      100% {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }
    
    .modal-backdrop {
      animation: backdropIn 0.3s cubic-bezier(0.4,0,0.2,1);
    }
    
    @keyframes backdropIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
    
    /* Prevenir scroll del body cuando el modal está abierto */
    :host {
      display: block;
    }
    
    /* Estilos específicos para móviles */
    @media (max-width: 768px) {
      .modal-fade {
        margin: 0;
        max-height: 100vh;
        border-radius: 0;
      }
    }
  `]
})
export class ModalComponent implements OnChanges {
  @Input() show: boolean = false;
  @Input() title: string = '';
  @Input() image: string = '';
  @Output() close = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['show']) {
      if (this.show) {
        this.disableBodyScroll();
      } else {
        this.enableBodyScroll();
      }
    }
  }

  private disableBodyScroll() {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
  }

  private enableBodyScroll() {
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
  }

  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (this.show && event.key === 'Escape') {
      this.close.emit();
    }
  }

  // Prevenir scroll del body cuando el modal está abierto
  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: Event) {
    if (this.show && (event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.close.emit();
    }
  }
} 