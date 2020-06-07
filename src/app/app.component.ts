import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { ShareFormDataService } from './services/share-form-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'snippet-generator';

  constructor(private router: Router, private themeService: ShareFormDataService) {

    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // Navigation started.
        console.log(event.url);
        const getParams = event.url.split('/');
        const getTheCurrentTheme = getParams[0];

        //apply theme
        this.updateAppThemeWithRouteChange(getTheCurrentTheme);

      }
    })
  }


  updateAppThemeWithRouteChange(theme: String) {
    this.themeService.updateAppTheme(theme);


  }
}
