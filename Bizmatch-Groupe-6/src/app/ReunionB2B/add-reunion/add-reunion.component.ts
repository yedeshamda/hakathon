import { Component, OnInit } from '@angular/core';
import {  ToolbarService,  LinkService,  ImageService,  HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
import {Reunion} from "../../Model/Reunion";
import {ActivatedRoute, Router} from "@angular/router";
import {ReunionService} from "../../Service/R&C B2B/ReunionB2B/reunion.service";
import {DatePipe} from "@angular/common";
import {FormBuilder} from "@angular/forms";
import Swal from "sweetalert2";
import {NotificationService} from "../../Service/Notification/notification.service";
let meetWindow: Window | null;

@Component({
  selector: 'app-add-reunion',
  templateUrl: './add-reunion.component.html',
  styleUrls: ['./add-reunion.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class AddReunionComponent implements OnInit {
  selectedvalue: any;
  isDisabled: boolean = false;

  Change(e: any) {
    console.log(e.target.value);
    this.selectedvalue = e.target.value;
    console.log(this.selectedvalue);
    localStorage.setItem('selectedvalue', this.selectedvalue); // save the selected value to localStorage

  }
  username: any;

  Reunion = {
    id: 0,
    Note: 0,
    dateTime: '0',
    description: "",
    Evenement: ""
  };

  currentDate;
  isActive: boolean = true;  constructor(private aRoute: ActivatedRoute,
                                         private route: Router,
                                         private reunionService: ReunionService,
                                         private datePipe: DatePipe,
                                         private fb: FormBuilder,
                                         private notificationService: NotificationService) {
    this.currentDate = new Date();
    this.isActive = true;
    this.selectedvalue = ''; }

  table: any;
  list: any;

  ngOnInit(): void {
    this.username = this.aRoute.snapshot.params['id'];
    this.Reunion.id = this.username; // Assure-toi que Reunion est correctement initialisé
    console.log(this.currentDate);
    this.selectedvalue = localStorage.getItem('selectedvalue'); // retrieve the selected value from localStorage
    this.Change({target: {value: this.selectedvalue}});
    setTimeout(() => {
      this.isDisabled = true;
    }, 500);
    // this.isDisabled = true;
  }

  onTypeChange(value: any) {
   // this.reunion?.reunionStatus = value; // set the selected type
  }

  async alertcannotUpdatetWithSuccess() {
    const msg = await Swal.fire(
      "FAILED",
      "Your Event cannot added !",
      "error"
    );
  }

  async alertAddWithSuccess() {
    const msg = await Swal.fire(
      "DONE",
      "Your Event added successfully!",
      "success"
    );
  }

  assignreunion(reunion: any) {
    console.log("hawhaw")
    console.log(reunion);
   // reunion.dateTime = new DatePipe('en-US').transform(reunion.dateTime, 'yyyy-MM-ddTHH:mm:ss');
    //reunion.dateTime = new DatePipe('en-US').transform(reunion.dateTime, 'yyyy-MM-ddTHH:mm:ss.SSSZ');
    reunion.dateTime = new DatePipe('en-US').transform(reunion.dateTime, 'yyyy-MM-ddTHH:mm:ss');

    // this.dutyPlanificationDTO.duty.type = this.selectedType; // set the selected type
    this.reunionService.addReunion(reunion).subscribe(
      () => {
        this.notificationService.notify('Meeting Added!');
        //this.route.navigate(['listReunion'])
      },
      (error) => {
        this.alertcannotUpdatetWithSuccess().then(() => {
          console.log(error);
        });
      },
      async () => {
        await this.alertAddWithSuccess();
      }
    );
    console.log(reunion)
  }
  showMeetInputs: boolean = false;
  meetLinkPart1: string = 'https://meet.google.com/';
  part2Addition: string = '';
  part3Addition: string = '';
  part4Addition: string = '';


  toggleMeetInputs() {
    // Ouvre une nouvelle fenêtre pour la page Google Meet
    const meetWindow = window.open('https://meet.google.com/new?hs', '_blank');

    // Attend 4 secondes (4000 millisecondes)
    setTimeout(() => {
      // Récupère le lien de la fenêtre fille (remplace avec la logique réelle)
      const meetLink = 'https://meet.google.com/exemple';  // Remplace 'exemple' par le vrai lien Meet

      // Envoie le lien à la fenêtre parente (ta page Angular)
      window.postMessage({ meetLink }, '*');

      // Désactive visuellement les champs Meet

      // Affiche les champs Meet
      this.showMeetInputs = true;
    }, 2000);
  }


// Reste de ton code...

  genererLien() {
    // Ouvre une nouvelle fenêtre pour la page Google Meet
    meetWindow = window.open('https://meet.google.com/new?hs', '_blank');

    // Attend 4 secondes (4000 millisecondes)
    setTimeout(() => {
      // Récupère le lien de la fenêtre fille
      const meetLink = 'https://meet.google.com/exemple';  // Remplace 'exemple' par le vrai lien Meet

      // Envoie le lien à la fenêtre parente (ta page Angular)
      window.postMessage({ meetLink }, '*');
    }, 2000);
  }
}
