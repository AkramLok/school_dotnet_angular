import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-chap2',
  templateUrl: './chap2.component.html',
  styleUrls: ['./chap2.component.css']
})
export class Chap2Component {
  isDropdownHidden: boolean[] = [true, true, false, true];
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
