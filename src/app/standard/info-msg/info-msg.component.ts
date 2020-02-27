import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-info-msg",
  templateUrl: "./info-msg.component.html",
  styleUrls: ["./info-msg.component.scss"]
})
export class InfoMsgComponent implements OnInit {
  @Input() msg: string;
  constructor() {}

  ngOnInit() {}
}
