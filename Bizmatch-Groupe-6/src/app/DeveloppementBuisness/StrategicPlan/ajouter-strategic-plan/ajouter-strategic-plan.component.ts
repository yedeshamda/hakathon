import {Component, OnInit} from '@angular/core';
import {ProfilService} from "../../../Service/IdentificationBesoin/profil.service";
import {Router} from "@angular/router";
import {StrategicPlanService} from "../../../Service/DeveloppementBuisness/strategic-plan.service";

@Component({
  selector: 'app-ajouter-strategic-plan',
  templateUrl: './ajouter-strategic-plan.component.html',
  styleUrls: ['./ajouter-strategic-plan.component.css']
})
export class AjouterStrategicPlanComponent implements OnInit{
  today: Date = new Date();

  ngOnInit(): void {

  }
  constructor(private stragicPlanService: StrategicPlanService,
              private route: Router) {
  }


  ajouterStrategicPlan(data: any) {
    console.log(data);
    this.stragicPlanService.ajouterStrategicPlan(data).subscribe(value => this.route.navigate(['/listestrategicplan']));

  }

}
