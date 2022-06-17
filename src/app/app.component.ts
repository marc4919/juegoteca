import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'juegoteca';
  displayMaximizable: boolean = false;

  showMaximizableDialog() {
    this.displayMaximizable = true;
}



}
