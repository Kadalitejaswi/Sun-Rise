import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//Importing Routes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { HotelEventsComponent } from './home/hotel-events/hotel-events.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { TopRatedHotelsComponent } from './home/top-rated-hotels/top-rated-hotels.component';
import { HotelsComponent } from './hotels/hotels/hotels.component';
import { HotelsDetailsComponent } from './hotels/hotels-details/hotels-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HotelsService } from './services/hotels.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { RoutingGuard } from './auth/routing.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';

//Registering Routes
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    CarouselComponent,
    HotelEventsComponent,
    NavbarComponent,
    TopRatedHotelsComponent,
    HotelsComponent,
    HotelsDetailsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HotelsService,AuthService,RoutingGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
