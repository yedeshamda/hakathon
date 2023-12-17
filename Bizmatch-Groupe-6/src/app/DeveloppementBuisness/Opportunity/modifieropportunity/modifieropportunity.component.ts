import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BesoinService} from "../../../Service/IdentificationBesoin/besoin.service";
import {OpportunityService} from "../../../Service/DeveloppementBuisness/opportunity.service";

@Component({
  selector: 'app-modifieropportunity',
  templateUrl: './modifieropportunity.component.html',
  styleUrls: ['./modifieropportunity.component.css']
})
export class ModifieropportunityComponent implements OnInit{
  idOpportunity:any;
  prospectEmail:any;
  entrepriseId:any;
  service:any;
  prospectStatus:any;
  date:any;
  location:any;
  priority:any;
  opportunityDetails: any='';
  ngOnInit(): void {
    this.aR.params.subscribe(params => {
      this.idOpportunity = +params['id'];
      this.opportunityService.afficherOpportunityParId(this.idOpportunity).subscribe(opportunity => {
        this.opportunityDetails = opportunity;
      });

    });
  }
  constructor(private aR:ActivatedRoute,private opportunityService:OpportunityService,private route:Router) {

  }
  modifierOpportunity(data:any){
    return this.opportunityService.modifierOpportunity(this.idOpportunity,data).subscribe(()=>this.route.navigate(['/listeopportunity']));
  }
}
