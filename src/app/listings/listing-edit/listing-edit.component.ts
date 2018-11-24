import { Component, OnInit, ViewChild } from '@angular/core';
import { ListingsService } from 'src/app/shared/listings.service';
import { Listings } from 'src/app/shared/listings.modal';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing-edit',
  templateUrl: './listing-edit.component.html',
  styleUrls: ['./listing-edit.component.css']
})
export class ListingEditComponent implements OnInit {

  constructor(private listingService: ListingsService, private router: Router, private route: ActivatedRoute) { }
  id;
  title;
  city;
  owner;
  bedrooms;
  type;
  image;
  price;
  url;
  normalValues: Listings;
  @ViewChild('f') editForm: NgForm;
  editMode = false;
  editedItemIndex: number;
  editedItem: Listings;


  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.normalValues = this.listingService.getlisting(this.id);
    this.title = this.normalValues.title;
    this.owner = this.normalValues.owner;
    this.bedrooms = this.normalValues.bedrooms;
    this.city = this.normalValues.city;
    this.image = this.normalValues.image;
    this.price = this.normalValues.price;
    this.type = this.normalValues.type;
    this.listingService.editListing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.listingService.getlisting(index);
      }
    );
  }

  onEdit() {
    const newListing: Listings = {
      bedrooms: this.editForm.value.bedrooms,
      city: this.editForm.value.city,
      image: this.editForm.value.image,
      owner: this.editForm.value.owner,
      price: this.editForm.value.price,
      title: this.editForm.value.title,
      type: this.editForm.value.type,
      id: this.normalValues.id
    };
      this.listingService.updateListing(newListing);
      this.router.navigate(['/listings'], {relativeTo: this.route});
  }

}
