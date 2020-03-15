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
  msg: string = "";
  valid: boolean = false;
  availableTemplates: any[];
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  async ngOnInit() {
    this.listId = this.route.snapshot.paramMap.get('listId');
    this.list = await this.dataService.getDataFromStorage(Constants.LIST, this.listId);
    let templates = await this.dataService.getAllDataFromStorage(Constants.TEMPLATE);
    this.availableTemplates = templates.map(t => ({ name: t.name, value: t.id }));
  }

  async performSearch() {
    this.validate();
    if (!this.validate) {
      return;
    }

    let all = this.optionSelected === "all";
    if (all) {

    }
  }

  validate() {
    if (!this.searchTerm) {
      this.msg = "Field is required";
      this.valid = false;
    } else if (this.searchTerm.length < 3) {
      this.msg = "Atleast 3 characters required";
      this.valid = false;
    } else {
      this.msg = "";
      this.valid = true;
    }
  }

}
