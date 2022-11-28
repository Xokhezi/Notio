import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor() { }

  getTags()
  {
    let tags = ["SAP","C#","ASP","JAVA"];
    return tags;
  }
}
