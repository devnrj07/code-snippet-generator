import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SublimeComponent } from './sublime.component';

describe('SublimeComponent', () => {
  let component: SublimeComponent;
  let fixture: ComponentFixture<SublimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SublimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SublimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
