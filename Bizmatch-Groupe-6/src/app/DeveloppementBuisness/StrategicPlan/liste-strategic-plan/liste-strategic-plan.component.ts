import {Component, OnInit} from '@angular/core';
import {StrategicPlanService} from "../../../Service/DeveloppementBuisness/strategic-plan.service";

@Component({
  selector: 'app-liste-strategic-plan',
  templateUrl: './liste-strategic-plan.component.html',
  styleUrls: ['./liste-strategic-plan.component.css']
})
export class ListeStrategicPlanComponent implements OnInit {
  listePlan: any;
  itemsPerPage = 10;
  currentPage = 1;

  ngOnInit(): void {
    this.strategicPlanService.afficherToutStrategicPlanParEntreprise().subscribe(
      (data: any) => {
        this.listePlan = data;
        console.log("garbage")

      })
  }

  constructor(private strategicPlanService: StrategicPlanService) {

  }

}
