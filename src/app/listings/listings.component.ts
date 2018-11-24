import { Component, OnInit} from '@angular/core';
import { Listings } from '../shared/listings.modal';
import { ListingsService } from '../shared/listings.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  selectedListing: Listings;
  listings: Listings[] = [];
  constructor(private listingService: ListingsService, private db: AngularFirestore) { }

  ngOnInit() {

    this.listingService.listingClicked
    .subscribe(
      (listing: Listings) => {
        this.selectedListing = listing;
      }
    );

    this.listingService.listingsChanged
    .subscribe(
      (listings: Listings[]) => {
        this.listings = listings;
      }
    );

    this.listingService.Firestorefirst.subscribe(
      listings => this.listings = listings
    );
    this.listingService.getAvailableListings();

  }

}
