import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { RegionSecteurComponent } from './components/region-secteur/region-secteur.component';
import { UploadComponent } from './components/upload/upload.component';


const routes: Routes = [
  { path: "", component: AccueilComponent },
  { path: "regionSecteur", component: RegionSecteurComponent },
  { path: "upload", component: UploadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
