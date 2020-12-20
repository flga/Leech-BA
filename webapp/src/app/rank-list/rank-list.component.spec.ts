import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankListComponent } from './rank-list.component';

describe('DashboardComponent', () => {
  let component: RankListComponent;
  let fixture: ComponentFixture<RankListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
