import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoneComponent } from './bone.component';

describe('BoneComponent', () => {
  let component: BoneComponent;
  let fixture: ComponentFixture<BoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
