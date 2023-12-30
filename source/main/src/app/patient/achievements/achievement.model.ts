export class Achievement {
  id: number;
  user: string;
  civilStatus: string;
  babyName: string;
  achievementEvaluate: number;
  category: string;
  firstPen: string;
  comportamiento: string;
  constructor(achievement: Achievement) {
    {
      this.id = achievement.id || this.getRandomID();
      this.user = achievement.user || '';
      this.civilStatus = achievement.civilStatus;
      this.babyName = achievement.babyName;
      this.achievementEvaluate = achievement.achievementEvaluate;
      this.category = achievement.category;
      this.firstPen = achievement.firstPen;
      this.comportamiento = achievement.comportamiento;
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}