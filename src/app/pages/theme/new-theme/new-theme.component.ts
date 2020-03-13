import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { Constants } from 'src/app/shared/constants';
import { DefaultTheme } from 'src/app/shared/defaultTheme';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.scss']
})
export class NewThemeComponent implements OnInit {

  themeId: string;
  theme: any;
  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
    this.theme = new DefaultTheme().theme;
    this.theme.id = this.dataService.getNewId();
  }

  async saveTheme() {
    await this.dataService.setDataToStorage(Constants.THEME, this.theme.id, this.theme);
    this.router.navigate(['/themes']);
  }

  themeChanged() {
    this.dataService.setTheme(this.theme);
  }

}
