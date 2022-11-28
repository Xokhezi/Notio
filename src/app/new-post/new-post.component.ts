import { TagsService } from './../services/tags.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  tag:any;
  existingTags=this.service.getTags();
  existingTag=true;

//post properties
  title:any;
  summary:any;
  text:any;
  url:any;
  autor:any;
  tags= new Array;
  public=false;


  constructor(private service:TagsService) { }

  ngOnInit(): void {
  }


submit(f:object)
{ 
  let post ={
    title:this.title,
    summary:this.summary,
    text:this.text,
    url:this.url,
    autor:this.autor,
    tags:this.tags,
    public:this.public,
    date: new Date()}

  console.log(post)
}
lock()
{
  this.public=!this.public;
}
addTag()
{
  let tagToUp=this.tag.toUpperCase()
  this.tags.push(tagToUp)

  if(this.existingTags.includes(tagToUp))
    this.existingTag=true;
  else
    this.existingTag=false;  
  
  this.tag='';
}

delete(tag:any)
{
  this.tags.splice(tag,1);
  

}


}
