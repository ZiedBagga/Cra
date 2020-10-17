import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Route, Router } from '@angular/router' ;
import { ApiService } from '../api.service';
import { Cra } from '../cra' ;

@Component({
  selector: 'app-show-cra',
  templateUrl: './show-cra.component.html',
  styleUrls: ['./show-cra.component.scss']
})
export class ShowCraComponent implements OnInit {
  
  cra:Cra ={ _id: '',client:'',mission:'',date:null,heuredebut:'',heurefin:'',status:''}
  isLoadingResults=true;
  constructor(private route : ActivatedRoute , private api:ApiService,private router:Router) { }
  getCraDetails(id: any) {
    this.api.getCra(id)
      .subscribe((data: any) => {
        this.cra = data;
        console.log(this.cra);
        this.isLoadingResults = false;
      });
  }

  ngOnInit() { 
    this.getCraDetails(this.route.snapshot.params.id) ;
  }

  deleteCra(id: any) {
    this.isLoadingResults = true;
    this.api.deleteCra(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/cras']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
