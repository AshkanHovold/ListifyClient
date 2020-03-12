import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { Constants } from 'src/app/shared/constants';
import { DefaultTheme } from 'src/app/shared/defaultTheme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-theme-manager',
  templateUrl: './theme-manager.component.html',
  styleUrls: ['./theme-manager.component.scss']
})
export class ThemeManagerComponent implements OnInit {

  // theme: any;

  themes: any[] = [];
  // themeNames: any[] = [];
  // selectedTheme: string = "";
  constructor(private dataService: DataService, private router: Router) { }

  async ngOnInit() {
    // this.theme = this.dataService.getCurrentTheme();
    // let loadedTheme = await this.dataService.getDataFromStorage(Constants.THEME, "main");
    // if (!loadedTheme) {
    //   await this.dataService.setDataToStorage(Constants.THEME, "main", this.theme);
    // } else {
    //   this.theme = loadedTheme;
    //   this.themeChanged();
    // }
    this.themes = await this.dataService.getAllDataFromStorage(Constants.THEME);
    // this.themeNames = this.themes.map(t => ({ name: t.name, value: t.name }));
  }

  // themeChanged() {
  //   this.dataService.setTheme(this.theme);

  // }

  // async saveTheme() {
  //   await this.dataService.setDataToStorage(Constants.THEME, this.theme.name, this.theme);
  // }

  // themeSelected() {
  //   let newTheme = this.themes.find(t => t.name == this.selectedTheme);
  //   this.theme = newTheme;
  //   this.themeChanged();
  // }
  createNewTheme() {
    debugger;
    this.router.navigate(['/theme/new']);
  }

}
