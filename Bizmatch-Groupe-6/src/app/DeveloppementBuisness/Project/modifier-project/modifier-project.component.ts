import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OpportunityService} from "../../../Service/DeveloppementBuisness/opportunity.service";
import {ProjectService} from "../../../Service/DeveloppementBuisness/project.service";

@Component({
  selector: 'app-modifier-project',
  templateUrl: './modifier-project.component.html',
  styleUrls: ['./modifier-project.component.css']
})
export class ModifierProjectComponent implements OnInit{
  idProject:any;
  projectName:any;
  entrepriseId:any;
  projectDescription:any;
  projectStartDate:any;
  estimatedProjectEndDate:any;
  projectMangerEmail:any;
  projectBudget:any;
  projectStatus:any;
  objective:any;
  projectDetails: any='';
  ngOnInit(): void {
    this.aR.params.subscribe(params => {
      this.idProject = +params['id'];
      this.projectService.afficherProjectParId(this.idProject).subscribe(project => {
        this.projectDetails = project;
      });

    });
  }
  constructor(private aR:ActivatedRoute,private projectService:ProjectService,private route:Router) {

  }
  modifierproject(data:any){
    return this.projectService.modifierProject(this.idProject,data).subscribe(()=>this.route.navigate(['/listeproject']));
  }

}
