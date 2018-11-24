import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListingsService } from '../shared/listings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-listings',
  templateUrl: './add-listings.component.html',
  styleUrls: ['./add-listings.component.css']
})
export class AddListingsComponent implements OnInit {
  @ViewChild('f') addForm: NgForm;
  url;

  constructor(private listingService: ListingsService, private router: Router) { }

  ngOnInit() {
  }


  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent) => {
        this.url = (<FileReader>e.target).result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  onAdd() {
    this.listingService.addListing({
      bedrooms: this.addForm.value.bedrooms,
      city: this.addForm.value.city,
      image: this.addForm.value.image,
      owner: this.addForm.value.owner,
      price: this.addForm.value.price,
      title: this.addForm.value.title,
      type: this.addForm.value.type
    });
    this.router.navigate(['/listings']);
  }

}
