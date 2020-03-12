import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { Constants } from 'src/app/shared/constants';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent implements OnInit {

  themes: any[];
  themeNames: any[];
  selectedTheme: any;
  constructor(private dataService: DataService) { }

  async ngOnInit() {
    let loadedTheme = await this.dataService.getDataFromStorage(Constants.THEME, "main");
    this.themes = await this.dataService.getAllDataFromStorage(Constants.THEME);
    this.themeNames = this.themes.map(t => ({ name: t.name, value: t.name }));
  }

  async themeSelected() {
    debugger;
    this.themes.forEach(theme => {
      theme.selected = false;
    });

    for (let i = 0; i < this.themes.length; i++) {
      const element = this.themes[i];
      await this.dataService.setDataToStorage(Constants.THEME, element.id, element);
    }


    this.selectedTheme.selected = true;
    await this.dataService.setDataToStorage(Constants.THEME, this.selectedTheme.id, this.selectedTheme);
  }

}
