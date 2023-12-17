import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Besoin} from "../../Model/IdentificationBesoin/Besoin";
import {Profil} from "../../Model/IdentificationBesoin/Profil";

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  private baseurl = environment.baseUrlIdentifcBesoin + '/api/profil/'


  constructor(private http: HttpClient) { }
  afficherToutProfilParEntreprise():Observable<Profil[]>{
    const id:any = localStorage.getItem('id');
    const parsedValue = JSON.parse(id);
    return this.http.get<Profil[]>(this.baseurl+'getallprofilsbyid/'+parsedValue);
  }
  afficherProfilParId(id:any):Observable<Profil>{
    return this.http.get<Profil>(this.baseurl+'getprofilbyid/'+id);
  }
  ajouterBesoin(data: any) {
    const id:any = localStorage.getItem('id');
    const parsedValue = JSON.parse(id);
    return this.http.post(this.baseurl + 'addprofil/' + parsedValue, data);
  }
  modifierProfil(id:any,data:any):Observable<Profil>{
    return this.http.patch<Profil>(this.baseurl+'updateprofil/'+id,data);
  }
}
