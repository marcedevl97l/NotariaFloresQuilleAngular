import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[fadeInOnScroll]',
  standalone: true
})
export class FadeInOnScrollDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const element = this.el.nativeElement;
    // Estado inicial: oculto y desplazado
    this.renderer.addClass(element, 'opacity-0');
    this.renderer.addClass(element, 'translate-y-8');
    this.renderer.addClass(element, 'transition-all');
    this.renderer.addClass(element, 'duration-700');
    this.renderer.addClass(element, 'ease-out');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.removeClass(element, 'opacity-0');
          this.renderer.removeClass(element, 'translate-y-8');
          observer.disconnect();
        }
      });
    }, { threshold: 0.15 });

    observer.observe(element);
  }
} 