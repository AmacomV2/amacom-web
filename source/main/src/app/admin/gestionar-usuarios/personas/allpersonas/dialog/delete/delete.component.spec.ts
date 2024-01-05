import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { DeletePersonaComponent } from "./delete.component";

describe("DeleteComponent", () => {
  let component: DeletePersonaComponent;
  let fixture: ComponentFixture<DeletePersonaComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DeletePersonaComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
