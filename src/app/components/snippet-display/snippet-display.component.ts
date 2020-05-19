import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snippet-display',
  templateUrl: './snippet-display.component.html',
  styleUrls: ['./snippet-display.component.css']
})
export class SnippetDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  applyTheme(theme:string){
    console.log('current theme', theme);
    if(theme === 'atom'){
    document.documentElement.style.setProperty('--background',  '#4eaa32' );
    }else if(theme === 'sublime'){
    document.documentElement.style.setProperty('--background',  '#ec9523' );
    }else if(theme ==='vscode'){
    document.documentElement.style.setProperty('--background',  '#288cdd' );
    }else{
      return;
    }
  }

}
