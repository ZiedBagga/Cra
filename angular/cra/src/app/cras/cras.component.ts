import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Cra} from '../cra'

@Component({
  selector: 'app-cras',
  templateUrl: './cras.component.html',
  styleUrls: ['./cras.component.scss']
})
export class CrasComponent implements OnInit {
  displayedColumns:string[] =['client','mission'] ;
  data:Cra[] =[] ;
  isLoadingResults = true ;           
  constructor(private api:ApiService) { }

  ngOnInit()  {
    this.api.getCras()
      .subscribe((res:any) => {
        this.data=res ;
        console.log(this.data);
        this.isLoadingResults=false;
      }, err => { 
        console.log(err)
        this.isLoadingResults=false;        
      } );
  }

}
