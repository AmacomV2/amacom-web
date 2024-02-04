import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { DeleteLogroComponent } from "./delete.component";

describe("DeleteComponent", () => {
  let component: DeleteLogroComponent;
  let fixture: ComponentFixture<DeleteLogroComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DeleteLogroComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLogroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
