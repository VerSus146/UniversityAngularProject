import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('componentHolder', { read: ViewContainerRef }) componentHolder: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private router: Router) {
  }

  ngAfterViewInit(){
    this.router.navigate(['UserAccount'])
  }
}
