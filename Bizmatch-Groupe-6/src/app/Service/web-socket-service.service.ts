import { Injectable } from '@angular/core';
import { Client } from '@stomp/stompjs';
import {Observable , of} from 'rxjs';
 import {HttpClient, HttpResponse} from "@angular/common/http";
import {Messaggio} from "../Model/Messaggio";
 export type Message = {
  type: string,
  message: string,
  from: string,
  to: string
};

@Injectable({
  providedIn: 'root'
})



export class WebSocketServiceService {

  private url = 'http://localhost:9050/'; // Replace with your WebSocket server URL

  constructor(private client: Client) { }

  private receiveMessage(body: string): Message {
    const message = JSON.parse(body) as Message;
    return message;
  }
  public connect(): Observable<Message> {
    return new Observable(observer => {
      this.client.onConnect = () => {
        this.client.subscribe('/topic/response', message => {
          observer.next(this.receiveMessage(message.body));


        });
      };
      this.client.activate();
    });
  }

  /*public sendMessage(message: any): void {
    if (this.client && this.client.connected) {
      this.client.publish({destination: '/app/message', body:JSON.stringify(message)});
    } else {
      console.error('WebSocket not connected');
    }
  }*/

  public sendMessage(message: any): void {
    if (this.client && this.client.connected) {
      const destination = `/app/message`;
      this.client.publish({ destination, body: JSON.stringify(message) });
      console.log("done");
    } else {
      console.error('WebSocket not connected');
    }
  }
/*
  public getMsg():Observable<Messaggio>{

  }*/
  //getChats(user: string): Observable<HttpResponse<any>> {
    //return this.http.get<any>(this.url+"getChats/"+user,{observe:'response'});
      /*const destination = `/getChats/${user}`;
      const observable = new Observable<Chat[]>((observer) => {
        const subscription = this.client.subscribe(destination, (message) => {
          // Handle the incoming message here
          const chatData: Chat[] = JSON.parse(message.body);
          observer.next(chatData);
        });

        // Unsubscribe from the WebSocket topic when the observable is unsubscribed
        return () => {
          subscription.unsubscribe();
        };
      });

      return observable;
*/
  //}

  getMessages(chat: string): Observable<Messaggio[]> {
    if (this.client && this.client.connected) {
      const destination = `/app/getMessages/${chat}`;
      const observable = new Observable<Messaggio[]>((observer) => {
        const subscription = this.client.subscribe(destination, (message) => {
          // Handle the incoming message here
          const MsgData: Messaggio[] = JSON.parse(message.body);
          observer.next(MsgData);
        });

        // Unsubscribe from the WebSocket topic when the observable is unsubscribed
        return () => {
          subscription.unsubscribe();
        };
      });

      return observable;
    } else {
      console.error('WebSocket not connected');
      return of([]); // Return an empty array or handle the error as needed
    }
  }

}
