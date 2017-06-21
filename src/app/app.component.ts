import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public allDiagrams: string[];
  public openDiagrams: string[];

  constructor() {
    this.allDiagrams = [ 'Diagram 1', 'Diagram 2', 'Diagram 3' ];
    this.openDiagrams = [];
  }

  public open(name: string) {
    const index = this.openDiagrams.indexOf(name);
    if (index === -1) {
      this.openDiagrams.push(name);
    }
  }

  public close(name: string) {
    const index = this.openDiagrams.indexOf(name);
    if (index !== -1) {
      this.openDiagrams.splice(index, 1);
    }
  }
}
