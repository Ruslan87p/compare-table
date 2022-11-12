import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareTextAreaComponent } from './compare-text-area.component';

describe('CompareTextAreaComponent', () => {
  let component: CompareTextAreaComponent;
  let fixture: ComponentFixture<CompareTextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompareTextAreaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompareTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
