import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { Constants } from 'src/app/shared/constants';

@Component({
  selector: 'app-all-lists',
  templateUrl: './all-lists.component.html',
  styleUrls: ['./all-lists.component.scss']
})
export class AllListsComponent implements OnInit {
  lists: any[];

  constructor(private router: Router, private dataService: DataService) { }

  async ngOnInit() {
    this.lists = await this.dataService.getAllDataFromStorage(Constants.LIST);
  }

  newList() {
    this.router.navigate(['/list/new']);
  }

}
