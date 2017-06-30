import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public allDiagrams: string[];
  public openDiagrams: string[];
  public selectedTab: string;

  constructor( private sanitizer: DomSanitizer ) {
    this.allDiagrams = [ 'diagram-1', 'diagram-2', 'diagram-3' ];
    this.openDiagrams = [];
    this.selectedTab = null;
  }

  public open(name: string) {
    const index = this.openDiagrams.indexOf(name);
    if (index === -1) {
      this.openDiagrams.push(name);
    }
    this.select(name);
  }

  public close(name: string) {
    const index = this.openDiagrams.indexOf(name);
    if (index !== -1) {
      this.openDiagrams.splice(index, 1);
    }
    this.select(null);
  }

  public select(name: string) {
    this.selectedTab = name;
  }

  public getUrl(name: string) {
    const url = `viewer.html?diagram=${name}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
