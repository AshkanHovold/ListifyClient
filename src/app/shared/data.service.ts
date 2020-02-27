import { Injectable } from "@angular/core";
import { OfflineStorageService } from "./offline-storage.service";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private storage: OfflineStorageService) {}
}
