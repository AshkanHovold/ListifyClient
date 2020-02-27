export interface IStorage {
  getAllByType(type: string): any[];
  getByTypeAndId(type: string, id: string): any;
  save(type: string, item: any): void;
}
