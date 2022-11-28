import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  dummy = "lorem ipsum testum jedum apodobnum testum";


  constructor() { }
  getPosts() {
    let posts = [{
      id: 1,
      title: "Some Note 1",
      summary: this.dummy,
      text: "alej",
      url: "https://github.com/twbs.png",
      autor: "User1",
      tags: ["SAP", "C#"],
      public: true,
      date: "4.2.2018"
    },
    {
      id: 2,
      title: "Some Note 2",
      summary: this.dummy,
      text: "alej",
      url: "https://github.com/twbs.png",
      autor: "User3",
      tags: ["SAP", "ASP"],
      public: true,
      date: "10.11.2022"
    },
    {
      id: 3,
      title: "Some Note3",
      summary: this.dummy,
      text: "alejjaslfj afaůo jaůsjf ajsf afůlajfjaw fjaůfůajsů. jafůijsaůifjaůijfůiajsfjasů jfůsajfůja fůasjfůia jfůsaj fa.f ajflianwfi ansianf asfů afh saůfh afhbawf wa .saf napfbapwufb aukbfl kasbb bkalfbkaaf",
      url: "https://github.com/twbs.png",
      autor: "User3",
      tags: ["JAVA"],
      public: false,
      date: "1.1.2016"
    }];


    return posts;



  }
  getExactPost(id:any)
  {
    let posts=this.getPosts();
    let result;
    
    for(let post of posts)
    {
      if(id==post.id)
        result= post;      
    }
    return result;
   }
}
