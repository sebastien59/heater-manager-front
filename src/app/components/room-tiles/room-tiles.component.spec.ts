import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomTilesComponent } from './room-tiles.component';

describe('RoomTilesComponent', () => {
  let component: RoomTilesComponent;
  let fixture: ComponentFixture<RoomTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
