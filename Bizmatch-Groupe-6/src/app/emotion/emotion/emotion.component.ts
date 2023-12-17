import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ReunionService } from '../../Service/R&C B2B/ReunionB2B/reunion.service';  // Assurez-vous de spécifier le bon chemin


@Component({
  selector: 'app-emotion',
  templateUrl: './emotion.component.html',
  styleUrls: ['./emotion.component.css']
})
export class EmotionComponent {
  constructor(private reunionService: ReunionService) {}


  handleStarClick() {
    // Appeler la méthode etat du service lorsque l'utilisateur clique sur une étoile
    this.reunionService.etat().subscribe(response => {
      // Faire quelque chose avec la réponse si nécessaire
      console.log(response);
    });
  }
}
