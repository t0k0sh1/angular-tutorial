import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleComponent } from './title.component';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleComponent],
    });
    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the title component', () => {
    expect(component).toBeTruthy();
  });

  it('should have as title an empty string', () => {
    expect(component.title).toEqual('');
  });

  it('should display the title', () => {
    const expected = 'Test title';
    component.title = expected;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(expected);
  });
});
