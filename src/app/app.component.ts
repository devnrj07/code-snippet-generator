import { Component, ElementRef } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { ShareFormDataService } from './services/share-form-data.service';
import {themes} from '../app/common/model/themes'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'snippet-generator';

  constructor(private router: Router, private elementRef:ElementRef,) {

    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // Navigation started.
        const getParams = event.url.split('/');
        const getTheCurrentTheme = getParams[getParams.length-1];
        console.log('theme', getTheCurrentTheme)
        //apply theme
        this.updateAppThemeWithRouteChange(getTheCurrentTheme);

      }
    })
  }


  updateAppThemeWithRouteChange(themeName) {
     const currentTheme  = themes[themeName];
    for (const key in currentTheme) {
      // not safe, replace with renderer2 method
      document.documentElement.style.setProperty(key, currentTheme[key]);
    }


  }
}
