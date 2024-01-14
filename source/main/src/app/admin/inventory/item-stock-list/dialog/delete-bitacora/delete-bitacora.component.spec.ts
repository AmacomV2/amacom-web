import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { DeleteBitacoraComponent } from "./delete-bitacora.component";
describe("DeleteComponent", () => {
  let component: DeleteBitacoraComponent;
  let fixture: ComponentFixture<DeleteBitacoraComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DeleteBitacoraComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBitacoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
