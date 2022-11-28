import { PostsService } from './../services/posts-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  id:any;
  post:any;
  constructor(private route:Router, private active:ActivatedRoute,private service:PostsService) { }

  ngOnInit(): void {
    this.active.paramMap.subscribe(params=>{
        this.id = params.get('id');
        this.post=this.service.getExactPost(this.id);        
    });
  }

}
