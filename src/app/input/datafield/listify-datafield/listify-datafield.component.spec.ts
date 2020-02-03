import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListifyDatafieldComponent } from './listify-datafield.component';

describe('ListifyDatafieldComponent', () => {
  let component: ListifyDatafieldComponent;
  let fixture: ComponentFixture<ListifyDatafieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListifyDatafieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListifyDatafieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
