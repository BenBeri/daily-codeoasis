import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiratokenComponent } from './jiratoken.component';

describe('JiratokenComponent', () => {
  let component: JiratokenComponent;
  let fixture: ComponentFixture<JiratokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiratokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiratokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
