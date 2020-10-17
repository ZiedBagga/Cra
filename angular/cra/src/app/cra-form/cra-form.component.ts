import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker'; 
import { NativeDateAdapter, DateAdapter,MAT_DATE_FORMATS } from '@angular/material/core';
 import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { Time } from '@angular/common';

 export const PICK_FORMATS = {
  parse: {dateInput: {month: 'short', year: 'numeric', day: 'numeric'}},
  display: {
      dateInput: 'input',
      monthYearLabel: {year: 'numeric', month: 'short'},
      dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
      monthYearA11yLabel: {year: 'numeric', month: 'long'}
  }
};
@Injectable()
class PickDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
      if (displayFormat === 'input') {
          return formatDate(date,'dd-MMM-yyyy',this.locale);;
      } else {
          return date.toDateString();
      }
  }
}

@Component({
  selector:  'cra-form',
  templateUrl: './cra-form.component.html',
  styleUrls: ['./cra-form.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: PickDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: PICK_FORMATS}
]
})
export class CraFormComponent implements OnInit {
  dateOf  =new Date ;
  client :string ;
  mission :string ; 
  debut ="08:00:00" ;
  fin ="17:00:00" ; 
  
  formClass="not-active" ;

   
  
   formatDate(date):string  {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    
    return [year, month, day].join('-');
}
  
   
  
  
  
  ngOnInit(): void {
    //convertir la date en francais 
    this._adapter.setLocale('fr');
  }
  constructor(private _adapter: DateAdapter<any>) {}
  //eliminer les samedis et les dimanches
  dateFilter: (date: Date | null) => boolean =
    (date: Date | null) => {                                          
      const day = date.getDay();
      return day !== 0 && day !== 6;
      //0 means sunday
      //6 means saturday
  }
}