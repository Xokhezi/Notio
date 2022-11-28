import { TagsService } from './../services/tags.service';
import { Component, OnInit } from '@angular/core';
import { core } from '@angular/compiler';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  constructor(private service: TagsService) { }
  tags = this.service.getTags();
  field: any;

  ngOnInit(): void {
  }

  search(input: string) {
    let inputUp = input.toUpperCase();
    let arrayInput = inputUp.split('');
    let arrayTag = new Array;
    let results = new Array;
    let split = inputUp.split('');




    if (inputUp == '')
      results = this.service.getTags();

    else if (inputUp.split('').length === 1) {
      for (let tag of this.tags) {
        arrayTag = tag.split('');

        for (let letter of arrayTag) {
          if (arrayInput.includes(letter))
            if (!results.includes(tag))
              results.push(tag)
        }
      }
    }
    else {

      for (let tag of this.tags) {
        let correct = 0;
        arrayTag = tag.split('');

        for (let letter of arrayTag) {
          for (let l of split) {
            if (l == letter)
              correct++;
          }
        }
        if (correct >= inputUp.length)
          results.push(tag);



      }
    }
    this.tags = results;




  }
}


