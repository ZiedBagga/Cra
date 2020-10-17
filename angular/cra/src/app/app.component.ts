import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    data=1;
  changeFromParent(){
    this.data += 1;
  }
  title = 'cra';
}
