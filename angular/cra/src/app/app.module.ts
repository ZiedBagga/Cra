import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CraFormComponent } from './cra-form/cra-form.component';
import { AppComponent } from './app.component';
import { CraCalendarComponent } from './cra-calendar/cra-calendar.component';
import { CraHomeComponent } from './cra-home/cra-home.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
  

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    CraCalendarComponent,
    CraHomeComponent,
    ParentComponent,
    ChildComponent,
    CraFormComponent,
    
  ],
  imports: [ 
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule, 
    MatPaginatorModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
