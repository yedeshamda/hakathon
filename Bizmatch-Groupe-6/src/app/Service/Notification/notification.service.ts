import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService extends EventEmitter<string> {

  constructor() {
    super();
  }

  notify(message: string) {
    this.emit(message);
    console.log('Notification received:', message);

  }

}
