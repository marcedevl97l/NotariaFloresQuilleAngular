import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="show" class="fixed inset-0 z-50 flex items-center justify-center">
      <div class="modal-backdrop absolute inset-0 bg-black/50 transition-opacity duration-300"></div>
      <div class="modal-fade bg-white rounded-lg shadow-2xl max-w-3xl w-full p-10 relative z-10">
        <button (click)="close.emit()" class="absolute top-3 right-3 text-notaria-wine hover:text-notaria-blue text-2xl font-bold">&times;</button>
        <h2 class="text-3xl font-bold text-notaria-blue mb-4">{{ title }}</h2>
        <img *ngIf="image" [src]="image" alt="{{ title }}" class="w-full h-64 object-cover rounded mb-6">
        <ng-content></ng-content>
        <div class="text-right mt-6">
          <button (click)="close.emit()" class="bg-notaria-blue text-white px-4 py-2 rounded-lg font-semibold hover:bg-notaria-blue/90 transition-colors">Cerrar</button>
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
        transform: scale(0.95);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
    .modal-backdrop {
      animation: backdropIn 0.3s cubic-bezier(0.4,0,0.2,1);
    }
    @keyframes backdropIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
  `]
})
export class ModalComponent {
  @Input() show: boolean = false;
  @Input() title: string = '';
  @Input() image: string = '';
  @Output() close = new EventEmitter<void>();

  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (this.show && event.key === 'Escape') {
      this.close.emit();
    }
  }
} 