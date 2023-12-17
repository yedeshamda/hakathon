import {Component, OnInit} from '@angular/core';
import {BesoinService} from "../../../Service/IdentificationBesoin/besoin.service";
import {MatchingService} from "../../../Service/Matching/matching.service";

@Component({
  selector: 'app-liste-des-besoin',
  templateUrl: './liste-des-besoin.component.html',
  styleUrls: ['./liste-des-besoin.component.css']
})
export class ListeDesBesoinComponent implements OnInit{
   listeBesoin: any;
  entreprises: any;
  itemsPerPage = 10;
  currentPage = 1;
      ngOnInit(): void {
    // this.besoinService.afficherToutBesoinParEntreprise().subscribe(
    //   (data:any)=>{
    //     this.listeBesoin=data;
    //     console.log("garbage")
    //
    //   });
  //       this.matchservice.GetSuggestions().subscribe(
  //         (data:any)=>{
  //           this.entreprises=data;
  //           console.log("match")
  //
  //         });
  }
  constructor(private besoinService:BesoinService, private  matchservice: MatchingService) {
  }

}
