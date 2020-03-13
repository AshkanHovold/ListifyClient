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

  themes: any[] = [];

  constructor(private dataService: DataService, private router: Router) { }

  async ngOnInit() {
    this.themes = await this.dataService.getAllDataFromStorage(Constants.THEME);
  }

  createNewTheme() {
    this.router.navigate(['/theme/new']);
  }

}
