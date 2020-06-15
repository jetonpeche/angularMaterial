import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

// tableau angular material
import { MatTableModule } from '@angular/material/table';

// input material
import { MatInputModule } from '@angular/material/input';

// drag and drop
import {DragDropModule} from '@angular/cdk/drag-drop';

// components
import { AccueilComponent } from './components/accueil/accueil.component';

// services
import { AppComponent } from './app.component';
import { APIrouteService } from './services/apiroute.service';
import { VisiteurService } from './services/visiteur.service';
import { RegionSecteurComponent } from './components/region-secteur/region-secteur.component';
import { GeographieService } from './services/geographie.service';
import { UploadComponent } from './components/upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    RegionSecteurComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    DragDropModule
  ],
  providers: [APIrouteService, VisiteurService, GeographieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
