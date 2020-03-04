import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DataService } from 'src/app/shared/data.service';
import { Constants } from 'src/app/shared/constants';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: any;
  data: any;
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  async ngOnInit() {
    if (environment.debugOn) {
      console.log(this.item);
    }
    this.data = await this.dataService.getDataFromStorage(Constants.ITEM, this.item.id);

  }

}
