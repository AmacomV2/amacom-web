import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { SearchDiagnosticoComponent } from "./search-diagnostico.component";
describe("SearchDiagnosticoComponent", () => {
  let component: SearchDiagnosticoComponent;
  let fixture: ComponentFixture<SearchDiagnosticoComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SearchDiagnosticoComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDiagnosticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
