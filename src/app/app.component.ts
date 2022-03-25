import { HttpClient } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { switchMap } from 'rxjs';
import { webSocket } from "rxjs/webSocket";
import { io } from "socket.io-client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'browserunload';

  constructor(private http: HttpClient) {
    const socket = io("http://localhost:3000");
  }

  connectWs() {
    
  }

  // @HostListener('window:beforeunload', ['$event'])
  // confirmLeavingPageBeforeSaving(eventClose: Event): boolean {
  //   return false;
  // }

  // @HostListener('window:unload', ['$event'])
  // saveBeforeLeaving(eventClose: Event) {
  //   this.http.get("http://localhost:5000/test").pipe(switchMap((data) => {
  //     console.log("data");
  //     return this.http.get("http://localhost:5000/data")
  //   })).subscribe((a) => {
  //     console.log(a);
  //     console.log("done!")
  //   })
    

  // }
}
