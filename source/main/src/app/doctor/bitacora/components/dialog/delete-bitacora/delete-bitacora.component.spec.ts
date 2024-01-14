import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { DeleteBitacoraDialogComponent } from "./delete-bitacora.component";
describe("DeleteComponent", () => {
  let component: DeleteBitacoraDialogComponent;
  let fixture: ComponentFixture<DeleteBitacoraDialogComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DeleteBitacoraDialogComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBitacoraDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
