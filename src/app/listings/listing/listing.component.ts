import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ListingsService } from 'src/app/shared/listings.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Listings } from 'src/app/shared/listings.modal';
import * as firebase from 'firebase';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  @Input() alisting: Listings;
  @Output() deleteList = new EventEmitter<any>();
  id: number;
  imageUrl;
  constructor(private listingService: ListingsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.alisting = this.listingService.getlisting(this.id);
        const storageRef = firebase.storage().ref();
        storageRef.child(this.alisting.path).getDownloadURL().then((url) => {
          this.imageUrl = url;
        }).catch((error) => {
          console.log(error);
        });
      }
    );
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    this.listingService.editListing.emit(this.alisting.id);
  }

  onDelete() {
    this.listingService.deleteListing(this.alisting);
    this.router.navigate(['listings']);
  }

}
