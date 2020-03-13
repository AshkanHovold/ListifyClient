import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/data.service';
import { Constants } from './shared/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'listyClient';
  constructor(private dataService: DataService) {

  }

  async ngOnInit() {
    let themes = await this.dataService.getAllDataFromStorage(Constants.THEME);
    let selectedTheme = themes.find(t => t.selectedTheme);
    this.dataService.setTheme(selectedTheme);
  }
}
