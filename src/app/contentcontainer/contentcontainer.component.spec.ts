import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentcontainerComponent } from './contentcontainer.component';

describe('ContentcontainerComponent', () => {
  let component: ContentcontainerComponent;
  let fixture: ComponentFixture<ContentcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentcontainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
