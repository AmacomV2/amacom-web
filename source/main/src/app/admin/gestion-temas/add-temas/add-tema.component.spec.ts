import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { AddTemaComponent } from "./add-tema.component";
describe("AddTemaComponent", () => {
  let component: AddTemaComponent;
  let fixture: ComponentFixture<AddTemaComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AddTemaComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(AddTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
