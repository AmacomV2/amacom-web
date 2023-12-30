import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { SearchTemaComponent } from "./search-tema.component";
describe("SearchTemaComponent", () => {
  let component: SearchTemaComponent;
  let fixture: ComponentFixture<SearchTemaComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SearchTemaComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
