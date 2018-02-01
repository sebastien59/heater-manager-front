import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTilesComponent } from './info-tiles.component';

describe('InfoTilesComponent', () => {
  let component: InfoTilesComponent;
  let fixture: ComponentFixture<InfoTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
