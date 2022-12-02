import { TagsService } from './../services/tags.service';
import { PostsService } from './../services/posts-service';
import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  existingTags = this.serviceTags.getTags();
  topics = new Array;
  field = "";
  posts = this.service.getPosts()
  validTag = true;
  

  //dummy posty - naplnit z API 

  constructor(private service: PostsService, private serviceTags:TagsService) { }

  ngOnInit(): void {
  }

  addTopic(input: string) {    
    console.log(input);
    let toUp = input.toUpperCase();
    console.log(toUp);
    
    if(this.validateTag(toUp))
    {
    this.topics?.push(toUp);
    this.field = ''    
    }      
    this.search();
    console.log(input);

  }
  delete(topic: any) {
    let i = this.topics.indexOf(topic)
    this.topics.splice(i, 1);
    this.validTag=true;

    this.search();
  }

  search() {    
    this.field='';
    this.posts=this.service.getPosts()
    

    if (this.topics.length === 0)
      this.posts = this.service.getPosts();    
    else {
      let lenght = this.topics.length;
      let results = new Array;

      for (let post of this.posts) {
        let included = 0;

        for (let topic of this.topics) {
          if (post.tags.includes(topic)) {
            included++
          }
        }
        if (included === lenght)
          results.push(post);
        included = 0;
      }
      this.posts = results;
      console.log(results)
    }
  }
  validateTag(tag:any)
  {
    if(this.existingTags.includes(tag))
      {
        this.validTag=true;
        return true;
      }
    this.validTag =false;   
    return false;
  }
}
