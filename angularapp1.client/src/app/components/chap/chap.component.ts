import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-chap',
  templateUrl: './chap.component.html',
  styleUrls: ['./chap.component.css']
})
export class ChapComponent {
  isDropdownHidden: boolean[] = [true, false, true, true];
  constructor(private el: ElementRef) { }
  toggleDropdown(index: number) {
    this.isDropdownHidden[index] = !this.isDropdownHidden[index];
  }
  scrollTo(target: string): void {
    const element = this.el.nativeElement.querySelector(`#${target}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
