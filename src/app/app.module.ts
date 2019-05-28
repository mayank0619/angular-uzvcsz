import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrandListingComponent } from './brand-listing/brand-listing.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrandListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [BrandListingComponent]
})
export class AppModule { }
