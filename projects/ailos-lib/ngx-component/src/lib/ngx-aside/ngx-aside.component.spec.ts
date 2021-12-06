import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAsideComponent } from './ngx-aside.component';

describe('NgxAsideComponent', () => {
  let component: NgxAsideComponent;
  let fixture: ComponentFixture<NgxAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxAsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
