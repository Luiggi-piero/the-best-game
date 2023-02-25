import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBestGameComponent } from './the-best-game.component';

describe('TheBestGameComponent', () => {
  let component: TheBestGameComponent;
  let fixture: ComponentFixture<TheBestGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheBestGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheBestGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
