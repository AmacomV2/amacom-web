import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { DeleteSignoAlarmaComponent } from "./delete.component";

describe("DeleteComponent", () => {
  let component: DeleteSignoAlarmaComponent;
  let fixture: ComponentFixture<DeleteSignoAlarmaComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DeleteSignoAlarmaComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSignoAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
