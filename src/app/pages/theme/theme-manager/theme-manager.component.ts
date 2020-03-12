import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { Constants } from 'src/app/shared/constants';

@Component({
  selector: 'app-theme-manager',
  templateUrl: './theme-manager.component.html',
  styleUrls: ['./theme-manager.component.scss']
})
export class ThemeManagerComponent implements OnInit {

  theme: any = {
    background: 'silver',
    padding: '2px',
    font: 'Times New Roman',
    toolbarheight: '30px',
    bigtext: '25px',
    mediumtext: '20px',
    smalltext: '15px',
    tinytext: '10px',
    warningcolor: 'yellow',
    primary: 'purple',
    name: 'main',
    fontcolor: 'black',
    cardBorderColor: 'black',
    linkTextDecoration: 'none',
    linkFontWeight: 'bold',
    linkColor: 'black'
  };

  themes: any[] = [];
  themeNames: any[] = [];
  selectedTheme: string = "";
  constructor(private dataService: DataService) { }

  async ngOnInit() {
    let loadedTheme = await this.dataService.getDataFromStorage(Constants.THEME, "main");
    if (!loadedTheme) {
      await this.dataService.setDataToStorage(Constants.THEME, "main", this.theme);
    } else {
      this.theme = loadedTheme;
      this.themeChanged();
    }
    this.themes = await this.dataService.getAllDataFromStorage(Constants.THEME);
    this.themeNames = this.themes.map(t => ({ name: t.name, value: t.name }));
  }

  themeChanged() {
    document.documentElement.style.setProperty('--background', this.theme.background);
    document.documentElement.style.setProperty('--smalltext', this.theme.smalltext);
    document.documentElement.style.setProperty('--bigtext', this.theme.bigtext);
    document.documentElement.style.setProperty('--tinytext', this.theme.tinytext);
    document.documentElement.style.setProperty('--mediumtext', this.theme.mediumtext);
    document.documentElement.style.setProperty('--primary', this.theme.primary);
    document.documentElement.style.setProperty('--toolbarheight', this.theme.toolbarheight);
    document.documentElement.style.setProperty('--warningcolor', this.theme.warningcolor);
    document.documentElement.style.setProperty('--padding', this.theme.padding);
    document.documentElement.style.setProperty('--font', this.theme.font);
    document.documentElement.style.setProperty('--fontcolor', this.theme.fontcolor);
    document.documentElement.style.setProperty('--card-border-color', this.theme.cardBorderColor);
    document.documentElement.style.setProperty('--link-text-decoration', this.theme.linkTextDecoration);
    document.documentElement.style.setProperty('--link-font-weight', this.theme.linkFontWeight);
    document.documentElement.style.setProperty('--linkcolor', this.theme.linkColor);

  }

  async saveTheme() {
    await this.dataService.setDataToStorage(Constants.THEME, this.theme.name, this.theme);
  }

  themeSelected() {
    let newTheme = this.themes.find(t => t.name == this.selectedTheme);
    this.theme = newTheme;
    this.themeChanged();
  }

}
