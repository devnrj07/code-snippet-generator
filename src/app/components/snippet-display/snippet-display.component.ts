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

  applyTheme(theme: string) {
    //console.log('current theme', theme);
    /* if(theme === 'atom'){
    document.documentElement.style.setProperty('--background',  '#4eaa32' );
    document.documentElement.style.setProperty('--btn-primary','#fff');
    document.documentElement.style.setProperty('--btn-secondary','#4eaa32');
    document.documentElement.style.setProperty('--btn-tertiary','#fff');

    }else if(theme === 'sublime'){
    document.documentElement.style.setProperty('--background',  '#ec9523' );
    document.documentElement.style.setProperty('--btn-primary','#fff');
    document.documentElement.style.setProperty('--btn-secondary','#fff');
    document.documentElement.style.setProperty('--btn-tertiary','#ec9523');

    }else if(theme ==='vscode'){
    document.documentElement.style.setProperty('--background',  '#288cdd' );
    document.documentElement.style.setProperty('--btn-primary','#288cdd');
    document.documentElement.style.setProperty('--btn-secondary','#fff');
    document.documentElement.style.setProperty('--btn-tertiary','#fff'); */
    }
  }
  
