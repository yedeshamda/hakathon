import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BesoinService} from "../../../Service/IdentificationBesoin/besoin.service";

@Component({
  selector: 'app-ajout-des-besoin',
  templateUrl: './ajout-des-besoin.component.html',
  styleUrls: ['./ajout-des-besoin.component.css']
})
export class AjoutDesBesoinComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(private besoinService: BesoinService,
              private route: Router) {
  }

  ajouterBesoin(data: any) {
    console.log(data);
    this.besoinService.ajouterBesoin(data).subscribe(value => this.route.navigate(['/listebesoin']));

  }


}

