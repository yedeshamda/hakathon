import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {
  private url = 'http://localhost:9050/'; // Replace with your WebSocket server URL

  constructor(private http:HttpClient) { }


  getChats(user: string): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.url+"getChats/"+user,{observe:'response'});}
  getMessages(chat: string): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.url+"getMessages/"+chat,{observe:'response'});}

}
