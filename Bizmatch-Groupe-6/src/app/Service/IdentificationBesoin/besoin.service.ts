import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Besoin} from "../../Model/IdentificationBesoin/Besoin";

@Injectable({
  providedIn: 'root'
})
export class BesoinService {
  private baseurl = environment.baseUrlIdentifcBesoin + '/api/besoin/'

  constructor(private http: HttpClient) { }

  afficherToutBesoinParEntreprise():Observable<Besoin[]>{
    const id:any = localStorage.getItem('id');
    const parsedValue = JSON.parse(id);
    return this.http.get<Besoin[]>(this.baseurl+'getallbesoinbyid/'+parsedValue);
  }
  afficherBesoinParId(id:any):Observable<Besoin>{
    return this.http.get<Besoin>(this.baseurl+'getbesoinbyid/'+id);
  }
  ajouterBesoin(data: any) {
    const id:any = localStorage.getItem('id');
    const parsedValue = JSON.parse(id);
    return this.http.post(this.baseurl + 'addbesoin/' + parsedValue, data);
  }
  modifierBesoin(id:any,data:any):Observable<Besoin>{
    return this.http.patch<Besoin>(this.baseurl+'updatebesoin/'+id,data);
  }

}
