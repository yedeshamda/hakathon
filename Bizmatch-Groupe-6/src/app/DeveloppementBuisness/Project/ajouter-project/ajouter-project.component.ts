import {Component, OnInit} from '@angular/core';
import {ProfilService} from "../../../Service/IdentificationBesoin/profil.service";
import {Router} from "@angular/router";
import {ProjectService} from "../../../Service/DeveloppementBuisness/project.service";

@Component({
  selector: 'app-ajouter-project',
  templateUrl: './ajouter-project.component.html',
  styleUrls: ['./ajouter-project.component.css']
})
export class AjouterProjectComponent implements OnInit{

  ngOnInit(): void {

  }
  constructor(private projetService: ProjectService,
              private route: Router) {
  }


  ajouterprojet(data: any) {
    console.log(data);
    this.projetService.ajouterProject(data).subscribe(value => this.route.navigate(['/listeproject']));

  }
}
