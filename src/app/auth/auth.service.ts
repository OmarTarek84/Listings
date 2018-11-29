import { AuthData } from './auth-data.modal';
import { EventEmitter, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ListingsService } from '../shared/listings.service';
import { UIService } from '../shared/ui.service';

@Injectable()
export class AuthService {
    isAuthenticated = false;
    user;
    authChanged = new EventEmitter<boolean>();
    constructor(private router: Router,
                private route: ActivatedRoute ,
                private firebaseauth: AngularFireAuth,
                private listingService: ListingsService,
                private uiService: UIService) {}

    registerUser(authdata: AuthData) {
        this.firebaseauth.auth.createUserWithEmailAndPassword(authdata.email, authdata.password);
        this.isAuthenticated = true;
        this.authChanged.emit(true);
        this.router.navigate(['/addlisting'], {relativeTo: this.route});
    }

    logInUser(authdata: AuthData) {
        this.firebaseauth.auth.signInWithEmailAndPassword(authdata.email, authdata.password)
        .then(
            (result => {
                this.isAuthenticated = true;
                this.authChanged.emit(true);
                this.router.navigate(['/listings']);
            })
        )
        .catch(
            (error => {
                this.isAuthenticated = false;
                this.uiService.loadError.emit(true);
            })
        );
    }

    isUser() {
        return this.isAuthenticated;
    }

    logOutUser() {
        this.firebaseauth.auth.signOut();
        this.listingService.cancelSubscriptions();
        this.isAuthenticated = false;
        this.authChanged.emit(false);
        this.router.navigate(['']);
    }

}
