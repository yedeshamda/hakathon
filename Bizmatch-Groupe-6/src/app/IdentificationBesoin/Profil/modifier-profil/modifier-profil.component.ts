import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProfilService} from "../../../Service/IdentificationBesoin/profil.service";

@Component({
  selector: 'app-modifier-profil',
  templateUrl: './modifier-profil.component.html',
  styleUrls: ['./modifier-profil.component.css']
})
export class ModifierProfilComponent implements OnInit{
  idProfil: any;
  nomProfil: any;
  descriptionProfil: any;
  service: any;
  typeDeProfils: any;
  dateRejoin:any;
  estActif: any ;
  profilDetails: any='';
  ngOnInit(): void {
    this.aR.params.subscribe(params => {
      this.idProfil = +params['id'];
      this.profilService.afficherProfilParId(this.idProfil).subscribe(profil => {
        this.profilDetails = profil;
      });

    });
  }
  constructor(private aR:ActivatedRoute,private profilService:ProfilService,private route:Router) {

  }
  modifierProfil(data:any){
    return this.profilService.modifierProfil(this.idProfil,data).subscribe(()=>this.route.navigate(['/listeprofil']));
  }
}
