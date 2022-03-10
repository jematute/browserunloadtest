import { HttpClient } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'browserunload';

  constructor(private http: HttpClient) {

  }

  @HostListener('window:beforeunload', ['$event'])
  confirmLeavingPageBeforeSaving(eventClose: Event): boolean {
    eventClose.preventDefault();
    return false; 
  }

  @HostListener('window:unload', ['$event'])
  saveBeforeLeaving(eventClose: Event) {
    this.http.get("http://localhost:5000/test").pipe(switchMap((data) => {
      console.log("data");
      return this.http.get("http://localhost:5000/data")
    })).subscribe((a) => {
      console.log(a);
      console.log("done!")
    })
    

  }
}
