import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfsComponent } from './rfs.component';

describe('RfsComponent', () => {
  let component: RfsComponent;
  let fixture: ComponentFixture<RfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
