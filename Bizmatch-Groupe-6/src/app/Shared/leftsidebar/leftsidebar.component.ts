import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ReunionService} from "../../Service/R&C B2B/ReunionB2B/reunion.service";
import {DatePipe} from "@angular/common";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.css']
})
export class LeftsidebarComponent {

  constructor(private aRoute:ActivatedRoute,
              private route:Router
              ,private reunionService:ReunionService,
              private datePipe: DatePipe,private http: HttpClient) { }
  ngOnInit(): void {
    // this.username=this.aRoute.snapshot.params['role']
    // this.username1=this.aRoute.snapshot.params['id']
  }
  username=this.aRoute.snapshot.params['role']
  username1=this.aRoute.snapshot.params['id']
}
