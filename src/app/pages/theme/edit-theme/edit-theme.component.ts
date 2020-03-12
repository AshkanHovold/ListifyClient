import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { Constants } from 'src/app/shared/constants';

@Component({
  selector: 'app-edit-theme',
  templateUrl: './edit-theme.component.html',
  styleUrls: ['./edit-theme.component.scss']
})
export class EditThemeComponent implements OnInit {

  themeId: string;
  theme: any;
  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) { }

  async ngOnInit() {
    debugger;
    this.themeId = this.route.snapshot.paramMap.get('themeId');
    this.theme = await this.dataService.getDataFromStorage(Constants.THEME, this.themeId);
  }

  async saveTheme() {
    await this.dataService.setDataToStorage(Constants.THEME, this.theme.id, this.theme);
    this.router.navigate(['/themes']);
  }



}
