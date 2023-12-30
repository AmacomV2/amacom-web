import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { SearchInstitucionComponent } from "./search-institucion.component";

describe("SearchInstitucionComponent", () => {
  let component: SearchInstitucionComponent;
  let fixture: ComponentFixture<SearchInstitucionComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SearchInstitucionComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInstitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
