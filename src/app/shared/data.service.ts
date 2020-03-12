import { Injectable } from "@angular/core";
import { OfflineStorageService } from "./offline-storage.service";
import { v4 as uuidv4 } from "uuid";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private storage: OfflineStorageService) { }

  getDataFromStorage(type: string, key: string): Promise<any> {
    return this.storage.getItem(type, key);
  }

  async setDataToStorage(type: string, key: string, item: any): Promise<void> {
    await this.storage.save(type, key, item);
  }

  async getAllDataFromStorage(type: string): Promise<any[]> {
    let result = await this.storage.getAll(type);
    if (environment.debugOn) {
      console.log(result);
    }
    return result;
  }

  getNewId(): string {
    return uuidv4();
  }

  deepCopy(toCopy: any): any {
    return JSON.parse(JSON.stringify(toCopy));
  }

  setTheme(theme: any): void {
    document.documentElement.style.setProperty('--background', theme.background);
    document.documentElement.style.setProperty('--smalltext', theme.smalltext);
    document.documentElement.style.setProperty('--bigtext', theme.bigtext);
    document.documentElement.style.setProperty('--tinytext', theme.tinytext);
    document.documentElement.style.setProperty('--mediumtext', theme.mediumtext);
    document.documentElement.style.setProperty('--primary', theme.primary);
    document.documentElement.style.setProperty('--toolbarheight', theme.toolbarheight);
    document.documentElement.style.setProperty('--warningcolor', theme.warningcolor);
    document.documentElement.style.setProperty('--padding', theme.padding);
    document.documentElement.style.setProperty('--font', theme.font);
    document.documentElement.style.setProperty('--fontcolor', theme.fontcolor);
    document.documentElement.style.setProperty('--card-border-color', theme.cardBorderColor);
    document.documentElement.style.setProperty('--link-text-decoration', theme.linkTextDecoration);
    document.documentElement.style.setProperty('--link-font-weight', theme.linkFontWeight);
    document.documentElement.style.setProperty('--linkcolor', theme.linkColor);
  }
}
