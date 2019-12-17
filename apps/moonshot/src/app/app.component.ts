import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@ngrx-basics/api-interfaces';

@Component({
  selector: 'ngrx-basics-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hello$ = this.http.get<Message>('http://localhost:3111/api/hello');
  
  constructor(private http: HttpClient) {
    this.fn();
  }

  async fn () {
    let hell;
    this.hello$.subscribe(res =>  {hell=res.message, 
      console.log({h:hell});
    
    });
  }
}
