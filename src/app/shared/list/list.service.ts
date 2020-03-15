import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  async comment(listId: string, itemId: string, userId: string, comment: any): Promise<any> {

  }

  async vote(listId: string, itemId: string, userId: string, vote: any): Promise<any> {

  }

  async addTolist(listId, string, itemId: string, userId: string): Promise<any> {

  }

  async setItemToDoneInList(listId: string, itemId: string, userId: string): Promise<any> {

  }

  async setItemToNotDoneInList(listId: string, itemId: string, userId: string): Promise<any> {

  }


}
