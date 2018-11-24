import { NgModule } from '@angular/core';
import {MatInputModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCardModule} from '@angular/material';


@NgModule({
    imports: [MatInputModule,
              MatButtonModule,
              MatSidenavModule,
              MatToolbarModule,
              MatIconModule,
              MatListModule,
              MatDatepickerModule,
              MatNativeDateModule,
              MatCardModule],

    exports: [MatInputModule,
              MatButtonModule,
              MatSidenavModule,
              MatToolbarModule,
              MatIconModule,
              MatListModule,
              MatDatepickerModule,
              MatNativeDateModule,
              MatCardModule]
})

export class MaterialModule {}
