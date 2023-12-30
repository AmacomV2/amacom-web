import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { MaternalKitComponent } from "./maternal-kit.component";


describe("MaternalKitComponent", () => {
  let component: MaternalKitComponent;
  let fixture: ComponentFixture<MaternalKitComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MaternalKitComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MaternalKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
