import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-chap3',
  templateUrl: './chap3.component.html',
  styleUrls: ['./chap3.component.css']
})
export class Chap3Component {

  isDropdownHidden: boolean[] = [true, true, true, false];
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
