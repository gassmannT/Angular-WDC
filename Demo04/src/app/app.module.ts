import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './person-detail/person-list.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { PersonService } from './person-detail/person.service';

const routes: Routes = [
  { path: '', component: PersonListComponent },
  { path: 'person/:personId', component: PersonDetailComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PersonDetailComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
