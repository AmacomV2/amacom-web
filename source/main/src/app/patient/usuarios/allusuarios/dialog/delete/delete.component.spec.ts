import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { DeleteDialogUsuarioComponent } from "./delete.component";
describe("DeleteComponent", () => {
  let component: DeleteDialogUsuarioComponent;
  let fixture: ComponentFixture<DeleteDialogUsuarioComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DeleteDialogUsuarioComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDialogUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
