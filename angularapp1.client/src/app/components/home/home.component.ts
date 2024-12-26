import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { 
  
  isDropdownHidden: boolean[] = [true, true, true,true];

  toggleDropdown(index: number) {
    this.isDropdownHidden[index] = !this.isDropdownHidden[index];
  }
}
