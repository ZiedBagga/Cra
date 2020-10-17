import {AfterViewInit,OnInit , Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
 
export interface PeriodicElement {
  mois : string ;
  annee: string ;
  client : string ;
  mission : string ;
  journees : number ;
  Status : string ;
}

const ELEMENT_DATA: PeriodicElement[] =  [
  {mois:'1' ,annee:'2020', client:'Ahmed', mission:'mission1',journees:19,Status:'M'} ,
  {mois:'2' ,annee:'2020', client:'med Salah', mission:'mission2',journees:20,Status:'M'} ,
  {mois:'3' ,annee:'2020', client:'achraf', mission:'mission3',journees:20,Status:'M'} ,
  {mois:'4' ,annee:'2020', client:'Rami', mission:'mission4',journees:19,Status:'M'} ,
  {mois:'5' ,annee:'2020', client:'Ahmed', mission:'mission',journees:18,Status:'C'} ,
  {mois:'6' ,annee:'2020', client:'Ahmed', mission:'mission',journees:20,Status:'C'}
];


 
@Component({
  selector: 'app-cra-home',
  templateUrl: './cra-home.component.html',
  styleUrls: ['./cra-home.component.scss']
})
  
export class CraHomeComponent implements AfterViewInit {
  moisId: { [id: string]: String; } = {
    '1':'Janvier' ,'2':'Fevrier' ,'3':'Mars' ,'4':'Avril' ,
    '5':'Mai' ,'6':'Juin' ,'7':'Juillet' ,'8':'Aout' ,
    '9':'Septembre' ,'10':'Octobre' ,'11':'Novembre' ,'12':'decembre' 
    }
  
  displayedColumns: string[] = ['mois','annee', 'client', 'mission', 'journees' ,'Status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  Onclick(a:any) {
    console.log(a) ;
  }
  gtdate(){
    
  } 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
  
