import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('componentHolder', { read: ViewContainerRef }) componentHolder: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
}
