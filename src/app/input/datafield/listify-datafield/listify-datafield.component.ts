import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-li",
  templateUrl: "./listify-datafield.component.html",
  styleUrls: ["./listify-datafield.component.scss"]
})
export class ListifyDatafieldComponent implements OnInit {
  @Input() render: string;
  input: boolean;
  output: boolean;
  all: boolean;
  constructor() {}

  ngOnInit() {}
}
