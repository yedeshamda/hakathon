import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BesoinService} from "../../../Service/IdentificationBesoin/besoin.service";

@Component({
  selector: 'app-modifier-des-besoin',
  templateUrl: './modifier-des-besoin.component.html',
  styleUrls: ['./modifier-des-besoin.component.css']
})
export class ModifierDesBesoinComponent implements OnInit{
   idBesoin: any;
   typeDeBesoin: any;
   etatDuBesoin: any;
   besoinDetails: any='';
  ngOnInit(): void {
    this.aR.params.subscribe(params => {
      this.idBesoin = +params['id'];
      this.besoinService.afficherBesoinParId(this.idBesoin).subscribe(besoin => {
        this.besoinDetails = besoin;
      });

    });
  }
  constructor(private aR:ActivatedRoute,private besoinService:BesoinService,private route:Router) {

  }
  modifierbesoin(data:any){
    return this.besoinService.modifierBesoin(this.idBesoin,data).subscribe(()=>this.route.navigate(['/listebesoin']));
  }
}
