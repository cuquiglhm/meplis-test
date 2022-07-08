import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/commons/services/http-request.service';
import { CommentModel } from '../../commons/components/comment-list/model/comments.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  commentsList: CommentModel[] = [];

  constructor(
    private httpReq: HttpRequestService
  ) { }

  ngOnInit(): void {
    this.commentsList = [
      {
        avatarURL: 'https://veja.abril.com.br/wp-content/uploads/2017/07/pessoa-neurocc81tica.jpg?quality=70&strip=info&resize=850,567',
        username: 'user032',
        title: 'How to get away from a murder',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend dignissim tortor at condimentum. Quisque at vulputate erat. Cras lacinia, neque ac maximus ullamcorper.',
      },
      {
        avatarURL: 'https://veja.abril.com.br/wp-content/uploads/2017/07/pessoa-neurocc81tica.jpg?quality=70&strip=info&resize=850,567',
        username: 'user032',
        title: 'How to get away from a murder',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend dignissim tortor at condimentum. Quisque at vulputate erat. Cras lacinia, neque ac maximus ullamcorper.',
        parentId: 0,
      },
      {
        avatarURL: 'https://veja.abril.com.br/wp-content/uploads/2017/07/pessoa-neurocc81tica.jpg?quality=70&strip=info&resize=850,567',
        username: 'user032',
        title: 'How to get away from a murder',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend dignissim tortor at condimentum. Quisque at vulputate erat. Cras lacinia, neque ac maximus ullamcorper.',
        parentId: 1,
      }
    ]
  }

  callCompany() {
    this.httpReq.get('http://public.company.com')
      .then((response)=>{
        console.log(response);
      })
  }

}
