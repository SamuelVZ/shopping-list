import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoopingListComponent } from './shooping-list.component';

describe('ShoopingListComponent', () => {
  let component: ShoopingListComponent;
  let fixture: ComponentFixture<ShoopingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoopingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoopingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
