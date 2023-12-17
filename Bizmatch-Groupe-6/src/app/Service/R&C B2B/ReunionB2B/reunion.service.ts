import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reunion} from "../../../Model/Reunion";


@Injectable({
  providedIn: 'root'
})
export class ReunionService {
  private baseUrl = environment.baseUrl + '/feedbackB2B/';


  constructor(private http: HttpClient) {
  }
  addReunion(data: any): Observable<Reunion> {
    return this.http.post<Reunion>(this.baseUrl + '', data);
  }
  ReunionList(idEntreprise: any): Observable<Reunion[]> {
    return this.http.get<Reunion[]>(this.baseUrl + 'ReunionsList/'+idEntreprise);
  }
  ReunionById(idr: any): Observable<Reunion> {
    return this.http.get<Reunion>(this.baseUrl + 'ReunionById/'+idr);
  }
  ReunionListPartner(idEntreprise: any): Observable<Reunion[]> {
    return this.http.get<Reunion[]>(this.baseUrl + 'ReunionsListPartner/'+idEntreprise);
  }
  ReunionListCal(idEntreprise: any): Observable<Reunion[]> {
    return this.http.get<Reunion[]>(this.baseUrl + 'ReunionsList/'+idEntreprise);
  }
  ReunionListCalbypartner(idPartner: any): Observable<Reunion[]> {
    return this.http.get<Reunion[]>(this.baseUrl + 'ReunionsListbyPartner/'+idPartner);
  }
  ReunionListPartnerSelect(idEntreprise: any): Observable<Reunion[]> {
    return this.http.get<Reunion[]>(this.baseUrl + 'ReunionsListbyPartner/'+idEntreprise);
  }
  ReunionListPartnerSelect1(idEntreprise: any): Observable<Reunion[]> {
    return this.http.get<Reunion[]>(this.baseUrl + 'ReunionsListbyPartner1/'+idEntreprise);
  }
  Accept(id: any): Observable<any> {
    return this.http.put<any>(this.baseUrl + 'Accept/'+id,{});
  }
  reject(id: any): Observable<any> {
    return this.http.put<any>(this.baseUrl + 'Reject/'+id,{});
  }
  Update(data: any, id: any):Observable<Reunion> {
    console.log("data : ",data)
    return this.http.put<Reunion>(this.baseUrl + 'Update/' +id, data);
  }
  deleteReunion(id: any) :Observable<any> {
    return this.http.delete(this.baseUrl + '' + id);
  }
  etat() :Observable<any> {
    return this.http.put<void>(this.baseUrl + 'etat',{});
  }
  // userlist(): Observable<User[]> {
  //   return this.http.get<User[]>(this.baseUrl + 'users');
  // }
  // JustDutylist(): Observable<number[]> {
  //   return this.http.get<number[]>(this.baseUrl + 'lastid');
  // }
  // Usernamelist(): Observable<String[]> {
  //   return this.http.get<String[]>(this.baseUrl + 'username');
  // }
  // DutylistbyUser(username: any): Observable<PlanificationDuty[]> {
  //   return this.http.get<PlanificationDuty[]>(this.baseUrl + 'PlanificationDutylistbyuser/'+username);
  // }
  // getdutyy(id: any): Observable<DutyPlanificationDTO> {
  //   return this.http.get<DutyPlanificationDTO>(this.baseUrl + 'PlanificationDutylistbyid/'+id);
  // }
  //
  // JustaddDuty(data: any): Observable<ReunionB2B> {
  //   return this.http.post<ReunionB2B>(this.baseUrl + 'addDuty/', data);
  // }
  // deleteDuty(id: any) :Observable<any> {
  //   return this.http.delete(this.baseUrl + '' + id);
  // }
  // deleteDutyduty(id: any) :Observable<any> {
  //   return this.http.delete(this.baseUrl + 'removeduty/' + id);
  // }
  // updateDuty(dto: { duty: {  id_duty: number;dateHeureDebut: string; dateHeureFin: string; type: string }}, id: any, username: any):Observable<PlanificationDuty> {
  //   return this.http.put<PlanificationDuty>(this.baseUrl + 'UpdatePlanificationDutyangular/'+id+'/'+username, dto);
  // }
  // updateDutydate(data: any, id: any):Observable<ReunionB2B> {
  //   return this.http.put<ReunionB2B>(this.baseUrl + 'UpdateDuty/'+id, data);
  // }
  // mostuserchange():Observable<any>{
  //   return this.http.get<any>(this.baseUrl + 'mostUserChange');
  // }

}
