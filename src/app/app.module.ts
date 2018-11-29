import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { ListingsComponent } from './listings/listings.component';
import { ListingComponent } from './listings/listing/listing.component';
import { AddListingsComponent } from './add-listings/add-listings.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ListingEditComponent } from './listings/listing-edit/listing-edit.component';
import { AuthService } from './auth/auth.service';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { AuthGuard } from './auth/auth.guard';
import { ListingsService } from './shared/listings.service';
import { ListingsTableComponent } from './listings/listings-table/listings-table.component';
import { UIService } from './shared/ui.service';

const route: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'listings', component: ListingsComponent, canActivate: [AuthGuard]},
  {path: 'listings/:id', component: ListingComponent, canActivate: [AuthGuard]},
  {path: 'listings/:id/edit', component: ListingEditComponent, canActivate: [AuthGuard]},
  {path: 'addlisting', component: AddListingsComponent, canActivate: [AuthGuard]},
  {path: 'signup', component: SignupComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    ListingComponent,
    AddListingsComponent,
    SignupComponent,
    ListingEditComponent,
    HeaderComponent,
    SidenavComponent,
    ListingsTableComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(route),
    FlexLayoutModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard, ListingsService, UIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
