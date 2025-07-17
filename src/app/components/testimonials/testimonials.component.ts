import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faQuoteLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface Testimonial {
  id: number;
  name: string;
  service: string;
  comment: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <div class="relative">
      <!-- Testimonial Cards -->
      <div class="relative overflow-hidden">
        <div class="flex transition-transform duration-500 ease-in-out" [style.transform]="'translateX(-' + (currentIndex * 100) + '%)'">
          <div *ngFor="let testimonial of testimonials" class="w-full flex-shrink-0 px-4">
            <div class="bg-white rounded-lg shadow-lg p-8 text-center max-w-2xl mx-auto">
              <div class="w-16 h-16 bg-notaria-wine/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <fa-icon [icon]="faQuoteLeft" class="fa-2xl text-notaria-wine"></fa-icon>
              </div>
              <p class="text-lg text-notaria-blue/80 mb-6 italic leading-relaxed">
                "{{ testimonial.comment }}"
              </p>
              <div class="flex justify-center mb-4">
                <div class="flex space-x-1">
                  <span *ngFor="let star of [1,2,3,4,5]" class="text-yellow-400">
                    {{ star <= testimonial.rating ? '★' : '☆' }}
                  </span>
                </div>
              </div>
              <h4 class="text-lg font-semibold text-notaria-blue mb-1">{{ testimonial.name }}</h4>
              <p class="text-notaria-wine text-sm">{{ testimonial.service }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Arrows -->
      <button 
        (click)="previous()" 
        class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-notaria-blue p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <fa-icon [icon]="faChevronLeft" class="fa-lg"></fa-icon>
      </button>
      <button 
        (click)="next()" 
        class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-notaria-blue p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <fa-icon [icon]="faChevronRight" class="fa-lg"></fa-icon>
      </button>

      <!-- Dots Indicator -->
      <div class="flex justify-center mt-8 space-x-2">
        <button 
          *ngFor="let testimonial of testimonials; let i = index"
          (click)="goTo(i)"
          class="w-3 h-3 rounded-full transition-all duration-300"
          [class]="i === currentIndex ? 'bg-notaria-wine' : 'bg-notaria-blue/30 hover:bg-notaria-blue/50'"
        ></button>
      </div>
    </div>
  `,
  styles: []
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  faQuoteLeft = faQuoteLeft;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  currentIndex = 0;
  private interval: any;

  testimonials: Testimonial[] = [
    {
      id: 1,
      name: "María González",
      service: "Autenticación de Documentos",
      comment: "Excelente servicio y atención. El trámite fue rápido y profesional. Definitivamente los recomiendo para cualquier servicio notarial.",
      rating: 5
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      service: "Poderes Notariales",
      comment: "Muy satisfecho con el servicio. El notario fue muy claro explicando todo el proceso y los documentos quedaron perfectos.",
      rating: 5
    },
    {
      id: 3,
      name: "Ana Torres",
      service: "Contratos y Convenios",
      comment: "Profesionalismo y confianza desde el primer momento. El contrato quedó muy bien estructurado y nos sentimos seguros.",
      rating: 5
    },
    {
      id: 4,
      name: "Luis Mendoza",
      service: "Testamentos",
      comment: "Un proceso delicado que manejaron con mucha sensibilidad y profesionalismo. Me siento tranquilo con mi decisión.",
      rating: 5
    },
    {
      id: 5,
      name: "Patricia Silva",
      service: "Declaraciones Juradas",
      comment: "Servicio rápido y eficiente. El personal es muy amable y el trámite se realizó sin complicaciones.",
      rating: 5
    }
  ];

  ngOnInit() {
    this.startAutoRotation();
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  startAutoRotation() {
    this.interval = setInterval(() => {
      this.next();
    }, 5000);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  previous() {
    this.currentIndex = this.currentIndex === 0 ? this.testimonials.length - 1 : this.currentIndex - 1;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }
} 