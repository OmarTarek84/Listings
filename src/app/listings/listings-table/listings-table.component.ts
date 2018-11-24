import { Component, OnInit, Input } from '@angular/core';
import { Listings } from 'src/app/shared/listings.modal';
import { ListingsService } from 'src/app/shared/listings.service';

@Component({
  selector: 'app-listings-table',
  templateUrl: './listings-table.component.html',
  styleUrls: ['./listings-table.component.css']
})
export class ListingsTableComponent implements OnInit {

  @Input() index: number;
  @Input() listing: Listings;
  constructor(private listingService: ListingsService) { }

  ngOnInit() {
  }

  onClick() {
    this.listingService.listingClicked.emit(this.listing);
  }

}
