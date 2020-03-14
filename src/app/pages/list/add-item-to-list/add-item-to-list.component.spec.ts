import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemToListComponent } from './add-item-to-list.component';

describe('AddItemToListComponent', () => {
  let component: AddItemToListComponent;
  let fixture: ComponentFixture<AddItemToListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItemToListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
