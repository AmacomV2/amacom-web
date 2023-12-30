export class MaternalKit {
  id: number;
  user: string;
  civilStatus: string;
  babyName: string;
  achievementEvaluate: number;
  category: string;
  firstPen: string;
  comportamiento: string;
  constructor(maternalKit: MaternalKit) {
    {
      this.id = maternalKit.id || this.getRandomID();
      this.user = maternalKit.user || '';
      this.civilStatus = maternalKit.civilStatus;
      this.babyName = maternalKit.babyName;
      this.achievementEvaluate = maternalKit.achievementEvaluate;
      this.category = maternalKit.category;
      this.firstPen = maternalKit.firstPen;
      this.comportamiento = maternalKit.comportamiento;
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}