import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';

//COMPONENTS
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { UserRankCardComponent } from './user-rating-card/user-rating-card.component';
import { AddRankCardComponent } from './add-item/add-rank-card.component';
import { RatingInputComponent } from './rating-input/rating-input.component';

//SERVICES
import { UserSessionHandler } from './user-session-handler';

import { IUserService } from './_services/user.service';
import { UserMockService } from './_services/user-mock.service';
import { UserMongoService } from './_services/user-mongo.service';

import { ICategoryService } from './_services/category.service';
import { CategoryMockService } from './_services/category-mock.service';
import { CategoryMongoService } from './_services/category-mongo.service';

//PIPES
import { ListSortPipe } from './_pipes/list-sort.pipe';
import { NormalizeScorePipe } from './_pipes/normalize-score.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserRankCardComponent,
    AddRankCardComponent,
    RatingInputComponent,
    ListSortPipe,
    NormalizeScorePipe,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HighchartsChartModule
  ],
  providers: [
    UserSessionHandler, //*everything* goes through this session wrapper, this class contacts the injected IUserService
    
    { provide: ICategoryService, useClass: CategoryMockService }, 
    { provide: IUserService, useClass: UserMockService }, 

    // { provide: ICategoryService, useClass: CategoryMongoService }, 
    // { provide: IUserService, useClass: UserMongoService },

    // { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting ] } // add as factory to your providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
