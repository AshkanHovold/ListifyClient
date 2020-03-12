import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { Constants } from 'src/app/shared/constants';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements OnInit {

  listId: string;
  list: any;
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  async ngOnInit() {
    this.listId = this.route.snapshot.paramMap.get('listId');
    this.list = await this.dataService.getDataFromStorage(Constants.LIST, this.listId);
  }

}
