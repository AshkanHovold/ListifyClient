import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { Constants } from 'src/app/shared/constants';

@Component({
  selector: 'app-add-item-to-list',
  templateUrl: './add-item-to-list.component.html',
  styleUrls: ['./add-item-to-list.component.scss']
})
export class AddItemToListComponent implements OnInit {
  searchTerm: string = "";
  listId: string;
  list: any;
  optionSelected: string = "all";
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  async ngOnInit() {
    this.listId = this.route.snapshot.paramMap.get('listId');
    this.list = await this.dataService.getDataFromStorage(Constants.LIST, this.listId);
  }

  async performSearch() {
    if (this.searchTerm.length >= 3) {

    }
  }

}
