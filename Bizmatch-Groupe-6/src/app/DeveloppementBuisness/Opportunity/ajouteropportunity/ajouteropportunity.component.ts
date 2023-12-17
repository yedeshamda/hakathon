import {Component, OnInit} from '@angular/core';
import {BesoinService} from "../../../Service/IdentificationBesoin/besoin.service";
import {Router} from "@angular/router";
import {OpportunityService} from "../../../Service/DeveloppementBuisness/opportunity.service";

@Component({
  selector: 'app-ajouteropportunity',
  templateUrl: './ajouteropportunity.component.html',
  styleUrls: ['./ajouteropportunity.component.css']
})
export class AjouteropportunityComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(private opportuniteService: OpportunityService,
              private route: Router) {
  }

  ajouterOpportunite(data: any) {
    console.log(data);
    this.opportuniteService.ajouterOpportunity(data).subscribe(value => this.route.navigate(['/listeopportunity']));

  }

}
