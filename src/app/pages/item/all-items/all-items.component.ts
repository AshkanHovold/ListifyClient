import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { Constants } from 'src/app/shared/constants';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.scss']
})
export class AllItemsComponent implements OnInit {

  items: any[];
  constructor(private dataService: DataService) { }

  async ngOnInit() {
    this.items = await this.dataService.getAllDataFromStorage(Constants.ITEM);
    if (environment.debugOn) {
      console.log(this.items);
    }
  }



}
