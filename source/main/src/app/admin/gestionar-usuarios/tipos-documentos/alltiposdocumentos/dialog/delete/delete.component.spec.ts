import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { DeleteTipoDocumentoComponent } from "./delete.component";

describe("DeleteComponent", () => {
  let component: DeleteTipoDocumentoComponent;
  let fixture: ComponentFixture<DeleteTipoDocumentoComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DeleteTipoDocumentoComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTipoDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
