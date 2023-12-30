import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { DeleteSituacionDialogComponent } from "./delete.component";
describe("DeleteComponent", () => {
  let component: DeleteSituacionDialogComponent;
  let fixture: ComponentFixture<DeleteSituacionDialogComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DeleteSituacionDialogComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSituacionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
