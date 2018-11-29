import { Listings } from './listings.modal';
import { EventEmitter, Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map, switchMap, filter } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import * as firebase from 'firebase';

@Injectable()
export class ListingsService {
    constructor(private db: AngularFirestore) {
        this.toDoCollectionRef = this.db.collection<Listings>('availableListings');
    }
    folder = 'ListingImages';
    listingSubs: Subscription[] = [];

    listingsChanged = new EventEmitter<Listings[]>();
    editListing = new EventEmitter<any>();
    listingClicked = new EventEmitter<Listings>();
    Firestorefirst = new EventEmitter<Listings[]>();

    toDoCollectionRef: AngularFirestoreCollection<Listings>;
    toDo$: Observable<Listings[]>;

    private availableListings: Listings[] = [
    ];

    getAvailableListings() {
        this.listingSubs.push(this.db.collection('availableListings')
        .snapshotChanges()
        .pipe(map(docArray => {
            return docArray.map(doc => {
                const data = doc.payload.doc.data() as Listings;
                const id = doc.payload.doc.id;
                return {id, ...data};
            });
        }))
        .subscribe(
            (listings: Listings[]) => {
            this.availableListings = listings;
            this.Firestorefirst.emit([...this.availableListings]);
        }));
    }

    getlisting(index: number) {
        return this.availableListings[index];
    }

    addListing(listing: Listings) {
        const storageRef = firebase.storage().ref();
        for (const selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]) {
          const path = `/${this.folder}/${selectedFile.name}`;
          const iRef = storageRef.child(path);
          iRef.put(selectedFile).then((snapshot) => {
            listing.image = selectedFile.name;
            listing.path = path;
            return this.toDoCollectionRef.add({...listing});
          });
        }
        this.listingsChanged.emit(this.availableListings.slice());
    }

    updateListing(listing: Listings) {
        this.toDoCollectionRef.doc(listing.id).update({...listing});
        this.listingsChanged.emit(this.availableListings.slice());
    }

    deleteListing(listing: Listings) {
        this.toDoCollectionRef.doc(listing.id).delete();
        this.listingsChanged.emit(this.availableListings.slice());
    }

    cancelSubscriptions() {
        this.listingSubs.forEach(subs => subs.unsubscribe());
    }
}
