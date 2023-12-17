import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {StrategicPlan} from "../../Model/DeveloppementBusiness/StrategicPlan";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseurl = environment.baseUrlDevBuis + '/api/project/'


  constructor(private http: HttpClient) { }
  afficherToutProjectParEntreprise():Observable<StrategicPlan[]>{
    const id:any = localStorage.getItem('id');
    const parsedValue = JSON.parse(id);
    return this.http.get<StrategicPlan[]>(this.baseurl+'getallprojectplanbyid/'+parsedValue);
  }
  afficherProjectParId(id:any):Observable<StrategicPlan>{
    return this.http.get<StrategicPlan>(this.baseurl+'getprojectbyid/'+id);
  }
  ajouterProject(data: any) {
    const id:any = localStorage.getItem('id');
    const parsedValue = JSON.parse(id);
    return this.http.post(this.baseurl + 'addproject/' + parsedValue, data);
  }
  modifierProject(id:any,data:any):Observable<StrategicPlan>{
    return this.http.patch<StrategicPlan>(this.baseurl+'updateproject/'+id,data);
  }

}
