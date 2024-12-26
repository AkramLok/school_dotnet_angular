import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  toggleNavbar() {
    const navbar = this.el.nativeElement.querySelector('#navbar-solid-bg');
    if (navbar.classList.contains('hidden')) {
      this.renderer.removeClass(navbar, 'hidden');
    } else {
      this.renderer.addClass(navbar, 'hidden');
    }
  }

}
