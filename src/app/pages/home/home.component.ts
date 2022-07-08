import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/commons/services/http-request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private httpReq: HttpRequestService
  ) { }

  ngOnInit(): void {
  }

  callCompany() {
    this.httpReq.get('http://public.company.com')
      .then((response)=>{
        console.log(response);
      })
  }

}
