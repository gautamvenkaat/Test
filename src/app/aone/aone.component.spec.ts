import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AoneComponent } from './aone.component';

describe('AoneComponent', () => {
  let component: AoneComponent;
  let fixture: ComponentFixture<AoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
