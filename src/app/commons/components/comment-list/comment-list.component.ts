import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  @Input() commentsList: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  changeAction(comment: any, action: number){
    console.log(comment, action);
    switch (action){
      case 0:
        comment.like = true;
        comment.deslike = false;
        comment.ban = false;
        break;
      case 1:
        comment.deslike = true;
        comment.like = false;
        comment.ban = false;
        break;
      case 2:
        comment.like = false;
        comment.deslike = false;
        comment.ban = true;
    }
    
  }

}
