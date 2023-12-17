import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListeDesBesoinComponent} from "./IdentificationBesoin/Besoin/liste-des-besoin/liste-des-besoin.component";
import {AjoutDesBesoinComponent} from "./IdentificationBesoin/Besoin/ajout-des-besoin/ajout-des-besoin.component";
import {
  ModifierDesBesoinComponent
} from "./IdentificationBesoin/Besoin/modifier-des-besoin/modifier-des-besoin.component";
import {ModifierProfilComponent} from "./IdentificationBesoin/Profil/modifier-profil/modifier-profil.component";
import {AjoutProfilComponent} from "./IdentificationBesoin/Profil/ajout-profil/ajout-profil.component";
import {ListeProfilComponent} from "./IdentificationBesoin/Profil/liste-profil/liste-profil.component";
import {
  ListeopportunityComponent
} from "./DeveloppementBuisness/Opportunity/listeopportunity/listeopportunity.component";
import {
  AjouteropportunityComponent
} from "./DeveloppementBuisness/Opportunity/ajouteropportunity/ajouteropportunity.component";
import {ListeProjectComponent} from "./DeveloppementBuisness/Project/liste-project/liste-project.component";
import {AjouterProjectComponent} from "./DeveloppementBuisness/Project/ajouter-project/ajouter-project.component";
import {ModifierProjectComponent} from "./DeveloppementBuisness/Project/modifier-project/modifier-project.component";
import {
  ListeStrategicPlanComponent
} from "./DeveloppementBuisness/StrategicPlan/liste-strategic-plan/liste-strategic-plan.component";
import {
  AjouterStrategicPlanComponent
} from "./DeveloppementBuisness/StrategicPlan/ajouter-strategic-plan/ajouter-strategic-plan.component";
import {
  ModifierStrategicPlanComponent
} from "./DeveloppementBuisness/StrategicPlan/modifier-strategic-plan/modifier-strategic-plan.component";
import {
  ModifieropportunityComponent
} from "./DeveloppementBuisness/Opportunity/modifieropportunity/modifieropportunity.component";
import {AddReunionComponent} from "./ReunionB2B/add-reunion/add-reunion.component";
import {ListreunionComponent} from "./ReunionB2B/listreunion/listreunion.component";
import {CalendarComponent} from "./Calendar/calendar/calendar.component";
import {EditReunionComponent} from "./ReunionB2B/edit-reunion/edit-reunion.component";
import {EmotionComponent} from "./emotion/emotion/emotion.component";
import {ChatModuleComponent} from "./chat-module/chat-module.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: 'listebesoin',
    component: ListeDesBesoinComponent
  },
  {
    path: 'ajouterbesoin',
    component: AjoutDesBesoinComponent
  },
  {
    path:'modifierbesoin/:id',
    component:ModifierDesBesoinComponent
  },
  {
    path:'modifierprofil/:id',
    component:ModifierProfilComponent
  },
  {
    path: 'ajouterprofil',
    component: AjoutProfilComponent
  },
  {
    path:'listeprofil',
    component:ListeProfilComponent
  },
  {
    path:'listeopportunity',
    component:ListeopportunityComponent
  },
  {
    path:'ajouteropportunity',
    component:AjouteropportunityComponent
  },
  {
    path:'modifieropportunity/:id',
    component:ModifieropportunityComponent
  },
  {
    path:'listeproject',
    component:ListeProjectComponent
  },
  {
    path:'ajouterproject',
    component:AjouterProjectComponent
  },
  {
    path:'modifierproject/:id',
    component:ModifierProjectComponent
  },
  {
    path:'listestrategicplan',
    component:ListeStrategicPlanComponent
  },
  {
    path:'ajouterstrategicplan',
    component:AjouterStrategicPlanComponent
  },
  {
    path:'modifierstrategicplan/:id',
    component:ModifierStrategicPlanComponent
  },{
    path:"addreunion/:id",
    component:AddReunionComponent
  },{
    path:"editreunion/:ide/:idr",
    component:EditReunionComponent
  },{
    path:"quiz/:role/:id",
    component:AddReunionComponent
  },{
    path:"calendar/:role/:id",
    component:CalendarComponent
  },{
    path:"emo",
    component: EmotionComponent
  },
  {
    path:"chat",
    component:ChatModuleComponent
  },
  {
    path:"",
    component:HomeComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
