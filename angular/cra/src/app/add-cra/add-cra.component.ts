import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-cra',
  templateUrl: './add-cra.component.html',
  styleUrls: ['./add-cra.component.scss']
})
export class AddCraComponent implements OnInit {
  craForm:FormGroup;
  client ='';
  mission='';
  date=null;
  heuredebut='';
  heurefin='';
  status='';
  isLoadingResults = false ;
  matcher = new MyErrorStateMatcher() ;

  constructor(private router:Router,private api:ApiService,private formBuilder:FormBuilder) { }
  
  ngOnInit() {
    this.craForm = this.formBuilder.group({
      'client':[null,Validators.required],
      'mission':[null,Validators.required],
      'heuredebut':[null,Validators.required],
      'heurefin':[null,Validators.required],
      'status':[null,Validators.required]
    })
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.api.addCra(this.craForm.value)
      .subscribe((res: any) => {
          const id = res._id;
          this.isLoadingResults = false;
          this.router.navigate(['/show-cra', id]);
        }, (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }


}
