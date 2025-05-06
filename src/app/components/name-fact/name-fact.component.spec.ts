import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameFactComponent } from './name-fact.component';

describe('NameFactComponent', () => {
  let component: NameFactComponent;
  let fixture: ComponentFixture<NameFactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameFactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
