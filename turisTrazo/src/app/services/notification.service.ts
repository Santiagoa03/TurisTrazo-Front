import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector } from '@angular/core';
import { NotificationComponent } from '../shared/components/notification/notification.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  showNotification(message: string, title?: string): void {
    const factory = this.componentFactoryResolver.resolveComponentFactory(NotificationComponent);
    const componentRef = factory.create(this.injector);
    componentRef.instance.message = message;
    componentRef.instance.title = title || 'Notification';

    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    // Opcional: Establecer un temporizador para ocultar la notificación después de un tiempo
    setTimeout(() => {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
    }, 5000); // Por ejemplo, ocultar la notificación después de 5 segundos
  }
}
