import { Component } from '@angular/core';
import {MatchingService} from "../../app/Service/Matching/matching.service";
import {BesoinService} from "../Service/IdentificationBesoin/besoin.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listeBesoin: any;
  // entreprises: any;
  itemsPerPage = 10;
  currentPage = 1;
  public entreprises: string[] = [
    '<h1>Spread love wherever you go.</h1>',
    '<h1>You are capable of amazing things.</h1>',
    '<h1>Believe in yourself and all that you are.</h1>',
    '<h1>Every day is a new beginning.</h1>',
    '<h1>The best is yet to come.</h1>',
    '<h1>You are loved more than you know.</h1>',
    '<h1>Chase your dreams with passion.</h1>',
    '<h1>Radiate positive energy.</h1>',
    '<h1>Your potential is limitless.</h1>',
    '<h1>Embrace the beauty of today.</h1>',
    // Add more positive vibes here...
  ];
  ngOnInit(): void {
    // this.besoinService.afficherToutBesoinParEntreprise().subscribe(
    //   (data:any)=>{
    //     this.listeBesoin=data;
    //     console.log("garbage")
    //
    //   });
    // this.matchservice.GetSuggestions().subscribe(
    //   (data:any)=>{
    //     this.entreprises=data;
    //     console.log("match")
    //
    //   });
  }
  constructor(private  matchservice: MatchingService) {
  }

}
