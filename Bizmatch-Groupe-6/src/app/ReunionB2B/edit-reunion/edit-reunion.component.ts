import { Component } from '@angular/core';
import Swal from "sweetalert2";
import {HtmlEditorService, ImageService, LinkService, ToolbarService} from "@syncfusion/ej2-angular-richtexteditor";
import {Reunion} from "../../Model/Reunion";
import {ActivatedRoute, Router} from "@angular/router";
import {ReunionService} from "../../Service/R&C B2B/ReunionB2B/reunion.service";
import {DatePipe} from "@angular/common";
import {FormBuilder} from "@angular/forms";
import {NotificationService} from "../../Service/Notification/notification.service";
let meetWindow: Window | null;

@Component({
  selector: 'app-edit-reunion',
  templateUrl: './edit-reunion.component.html',
  styleUrls: ['./edit-reunion.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class EditReunionComponent {

  selectedvalue: any;
  isDisabled: boolean = false;
  reunionDetails: any='';

  Change(e: any) {
    console.log(e.target.value);
    this.selectedvalue = e.target.value;
    console.log(this.selectedvalue);
    localStorage.setItem('selectedvalue', this.selectedvalue); // save the selected value to localStorage

  }
  ide: any;
  idr: any;

  Reunion = {
    id: 0,
    Note: 0,
    dateTime: '0',
    description: "",
    Evenement: ""
  };
  selectedType1: String = "Desactiver ";
  selectedType2: Date = new Date();
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
  ngOnInit() {
    this.ide = this.aRoute.snapshot.params['ide'];
    this.idr = this.aRoute.snapshot.params['idr'];
    this.selectedvalue = localStorage.getItem('selectedvalue'); // retrieve the selected value from localStorage
    this.Change({ target: { value: this.selectedvalue } });
    setTimeout(() => {
      this.isDisabled = true;
    }, 500);
    this.aRoute.params.subscribe(params => {
      this.idr = +params['idr'];
      this.reunionService.ReunionById(this.idr).subscribe(reunion => {
        this.reunionDetails = reunion;
      });

    });
    // this.dutyService.getdutyy(id).subscribe(
    //   (result: DutyPlanificationDTO) => {
    //     this.dutyPlanificationDTO = result;
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
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
  updateduty( reunion: Reunion) {
    console.log("labaleb"+this.ide)
    console.log("kaleb"+this.idr)

    this.reunionService.Update(reunion,this.idr).subscribe(
      () => {
        this.route.navigate(['listReunion/entreprise'+this.ide])
      },
      (error) => {
        this.alertcannotUpdatetWithSuccess().then(() => {
          console.log(error);
        });
      },
      async () => {
        await this.alertAddWithSuccess();
        this.notificationService.notify('Meeting Updated!');

      }
    );
    // console.log(planificationData)
  }
  showMeetInputs: boolean = false;
  meetLinkPart1: string = 'https://meet.google.com/';
  part2Addition: string = '';
  part3Addition: string = '';
  part4Addition: string = '';

  updateMeetLink() {
    this.reunionDetails.meetingLink = `${this.meetLinkPart1}${this.part2Addition}-${this.part3Addition}-${this.part4Addition}`;
  }

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
