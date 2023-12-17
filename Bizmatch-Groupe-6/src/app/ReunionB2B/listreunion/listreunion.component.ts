import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe} from "@angular/common";
import {ReunionService} from "../../Service/R&C B2B/ReunionB2B/reunion.service";
import {HttpClient} from "@angular/common/http";
import {NotificationService} from "../../Service/Notification/notification.service";

let meetWindow: Window | null;

@Component({
  selector: 'app-listreunion',
  templateUrl: './listreunion.component.html',
  styleUrls: ['./listreunion.component.css']
})
export class ListreunionComponent implements OnInit {
  itemsPerPage = 10;
  currentPage = 1;
  username: any;
  username1: any;

  table: any;
  isApproved: boolean = false;

  public searchTerm: string = '';
  meetLink: string = '';

  status: any;

  constructor(private aRoute:ActivatedRoute,
              private route:Router, private reunionService:ReunionService,
              private datePipe: DatePipe,private http: HttpClient,private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.username=this.aRoute.snapshot.params['id']
    this.username1=this.aRoute.snapshot.params['role']
    this.notificationService.notify('Meeting showed!');
    if (this.username1=='entreprise'){
      this.reunionService.ReunionList(this.username).subscribe((data) => { console.log(data)
        // Parcourir la liste des devoirs et formater les dates de début et de fin
        this.table = data.map((reunion) => ({
          ...reunion,
          dateTime: this.datePipe.transform(
            reunion.dateTime,
            'yyyy-MM-dd hh-mm'
          ),
        }));
      });
    }
    else{
      // this.nom = this.route.snapshot.paramMap.get('nom');
      //this.dutyService.Dutylist().subscribe(k =>{this.table=k});
      this.reunionService.ReunionListPartner(this.username).subscribe((data) => { console.log(data)
        // Parcourir la liste des devoirs et formater les dates de début et de fin
        this.table = data.map((reunion) => ({
          ...reunion,
          dateTime: this.datePipe.transform(
            reunion.dateTime,
            'yyyy-MM-dd hh-mm'
          ),
        }));
      });
    }
    window.addEventListener('message', this.handleMessage.bind(this));
  }
  handleMessage(event: MessageEvent) {
    // Vérifie que le message provient de la fenêtre fille
    if (event.source === meetWindow && event.data && event.data.meetLink) {
      // Récupère et traite le lien Meet
      const meetLink = event.data.meetLink;
      this.recupererLienMeet(meetLink);
    }
  }
// app.component.ts
// ...

  // app.component.ts
// ...

  // genererLien() {
  //   // Ouvre une nouvelle fenêtre pour la page Google Meet
  //   meetWindow = window.open('https://meet.google.com/new?hs', '_blank');
  //
  //   // Attend 4 secondes (4000 millisecondes)
  //   setTimeout(() => {
  //     // Récupère le lien de la fenêtre fille
  //     const meetLink = 'https://meet.google.com/exemple';  // Remplace 'exemple' par le vrai lien Meet
  //
  //     // Envoie le lien à la fenêtre parente (ta page Angular)
  //     window.postMessage({ meetLink }, '*');
  //   }, 4000);
  // }

  // Fonction pour récupérer le lien Meet
  recupererLienMeet(meetLink: string) {
    if (meetLink.indexOf('https://meet.google.com/') !== -1) {
      this.meetLink = meetLink;
    } else {
      console.error('Le lien Meet n\'a pas été trouvé dans la barre d\'adresse.');
    }
  }


  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


// ...


  afficherLien() {
    // Affiche le lien dans la console (à adapter selon tes besoins)
    console.log('Lien Meet récupéré :', this.meetLink);
  }

// ...



  addev(){
    Swal.fire({
      title: 'Are you sure want to Delete this Event?',
      text: 'You will not be able to recover this Event!',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
      confirmButtonColor:'blue',
    }).then(async (result) => {
      if (result.value) {
        this.route.navigate(['addreunion'])

        //delete Event confirmation
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.route.navigate(['AddHoliday/'+this.username])

      }
    })
  }
  accederLien(meet: any) {
    // Ouvre une nouvelle fenêtre pour la page Google Meet
    meetWindow = window.open(meet, '_blank');

  }
  async Acceptrec(id: number) {
    // if (confirm("Are you sure you want to delete this duty?")) {
    this.reunionService.Accept(id).subscribe(
      () => {
        this.route.navigate(['listReunion/'+this.username1+'/'+this.username])
        location.reload();
      },
      (error) => {
        console.log("zzzzz"+error);
      }
    );
    //  }
  }
  accepter(id:number){
    Swal.fire({
      title: 'Are you sure want to accpet this meeting?',
      text: 'You will not be able to recover this meeting!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes !',
      cancelButtonText: 'No, keep it',
      confirmButtonColor:'green',
    }).then(async (result) => {
      if (result.value) {
        //delete Event confirmation
        await this.Acceptrec(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your Event is safe :)',
          'error'
        )
      }
    })
  }
  async Rejectrec(id: number) {
    // if (confirm("Are you sure you want to delete this duty?")) {
    this.reunionService.reject(id).subscribe(
      () => {
        this.route.navigate(['Reclamation/'+this.username])
        location.reload();
      },
      (error) => {
        console.log("zzzzz"+error);
      }
    );
    //  }
  }
  rejeter(id:number){
    Swal.fire({
      title: 'Are you sure want to Reject this Reclamation?',
      text: 'You will not be able to recover this Reclamation!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes !',
      cancelButtonText: 'No, keep it',
      confirmButtonColor:'red',
    }).then(async (result) => {
      if (result.value) {
        //delete Event confirmation
        await this.Rejectrec(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your Event is safe :)',
          'error'
        )
      }
    })
  }
  async deleteReunion(id: number) {
    // if (confirm("Are you sure you want to delete this duty?")) {
    this.reunionService.deleteReunion(id).subscribe(
      (res) => {
        // Refresh duty list
        this.reunionService.ReunionList(this.username).subscribe((data) => {
          // Parcourir la liste des devoirs et formater les dates de début et de fin
          this.table = data.map((reunion) => ({
            ...reunion,
            startdate: this.datePipe.transform(
              reunion.dateTime,
              'yyyy-MM-dd'
            ),
          }));
        });
        if(res == null){
          console.log("here delete")
          this.alertDeleteWithSuccess();
        }else{this.alertcannotDeleteWithSuccess()}
      },
      (error) => {
        console.log("zzzzz"+error);
      }
    );
    //  }
  }
  async alertcannotDeleteWithSuccess() {
    const msg = await Swal.fire(
      "Meeting passed or ongoing",
      "Your Meeting wont deleted :)",
      "error"
    );
  }
  async alertDeleteWithSuccess() {
    const msg = await Swal.fire(
      "Deleted!",
      "Your Meeting has been deleted.",
      "success"
    );
  }

  deleteEvent(id: any){
    Swal.fire({
      title: 'Are you sure want to remove this Event?',
      text: 'You will not be able to recover this Event!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
      confirmButtonColor:'red',
    }).then(async (result) => {
      if (result.value) {
        //delete Event confirmation
        await this.deleteReunion(id);
        this.notificationService.notify('Duty Deleted!');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your Event is safe :)',
          'error'
        )
      }
    })
  }
}
