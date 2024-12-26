import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent {
  constructor(public globalService: GlobalService) { }
  currentDate: Date = new Date();
  public isTest1: boolean = this.globalService.isBoolean1;
  public isTest2: boolean = this.globalService.isBoolean2;
  public isTest3: boolean = this.globalService.isBoolean3;
  
}
