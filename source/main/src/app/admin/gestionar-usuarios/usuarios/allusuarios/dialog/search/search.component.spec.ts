import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { SearchDialogUsuarioComponent } from "./search.component";
describe("SearchDialogComponent", () => {
  let component: SearchDialogUsuarioComponent;
  let fixture: ComponentFixture<SearchDialogUsuarioComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SearchDialogUsuarioComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDialogUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
