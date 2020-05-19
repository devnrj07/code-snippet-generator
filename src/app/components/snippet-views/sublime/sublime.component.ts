import { Component, OnInit } from '@angular/core';
import { ShareFormDataService } from 'src/app/services/share-form-data.service';
import { Observable } from 'rxjs';
import { Snippet } from 'src/app/common/model/snippet';

@Component({
  selector: 'app-sublime',
  templateUrl: './sublime.component.html',
  styleUrls: ['./sublime.component.css']
})
export class SublimeComponent implements OnInit {

  synatx = ``


  $snippetData: Observable<Snippet>;
  constructor(private snippetDataService: ShareFormDataService) { }

  ngOnInit(): void {
    this.$snippetData = this.snippetDataService.getSnippet();

    console.log('Sublime', this.$snippetData)
  }

}
