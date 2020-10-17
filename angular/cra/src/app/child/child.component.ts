import {AfterViewInit,OnInit , Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table'



export interface PeriodicElement {
    mois : string ;
    client : string ;
    mission : string ;
    journees : number ;
    Status : string ;
  }
  
  const ELEMENT_DATA: PeriodicElement[] =  [
    {mois:'Janvier 2020' , client:'Ahmed', mission:'abc',journees:15,Status:'A'} ,
    {mois:'Fevrier 2020' , client:'med Salah', mission:'abc',journees:15,Status:'B'} ,
    {mois:'Mars 2020' , client:'achraf', mission:'abc',journees:15,Status:'A'} ,
    {mois:'Avril 2020' , client:'Rami', mission:'abc',journees:15,Status:'B'} ,
    {mois:'Mai 2020' , client:'Ahmed', mission:'abc',journees:15,Status:'C'} ,
    {mois:'Juin 2020' , client:'Ahmed', mission:'abc',journees:15,Status:'C'}
  ];

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements AfterViewInit {
    
    displayedColumns: string[] = ['mois', 'client', 'mission', 'journees' ,'Status'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }
  }
    
