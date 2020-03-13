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
  currentTheme: string;
  constructor(private dataService: DataService) { }

  async ngOnInit() {
    this.themes = await this.dataService.getAllDataFromStorage(Constants.THEME);
    this.themeNames = this.themes.map(t => ({ name: t.name, value: t.id }));
    let found = this.themes.find(t => t.selectedTheme);
    if (found) {
      this.currentTheme = found.name;
      this.selectedTheme = found.id;
    }
  }

  async themeSelected() {
    this.themes.forEach(theme => {
      theme.selectedTheme = false;
    });

    for (const themeItem of this.themes) {
      await this.dataService.setDataToStorage(Constants.THEME, themeItem.id, themeItem);
    }

    let themeSelected = this.themes.find(t => t.id === this.selectedTheme);
    themeSelected.selectedTheme = true;
    this.currentTheme = themeSelected.name;
    await this.dataService.setDataToStorage(Constants.THEME, themeSelected.id, themeSelected);
    this.dataService.setTheme(themeSelected);
  }

}
