import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProfilService} from "../../../Service/IdentificationBesoin/profil.service";

@Component({
  selector: 'app-ajout-profil',
  templateUrl: './ajout-profil.component.html',
  styleUrls: ['./ajout-profil.component.css']
})
export class AjoutProfilComponent implements OnInit{
  today: Date = new Date();

  ngOnInit(): void {

  }
  constructor(private profilService: ProfilService,
              private route: Router) {
  }


  ajouterProfil(data: any) {
    console.log(data);
    this.profilService.ajouterBesoin(data).subscribe(value => this.route.navigate(['/listeprofil']));

  }

}
