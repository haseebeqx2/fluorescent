import { FluorescentTube } from "./interfaces";

export class FluorescentTubeUnit {
  tubes: FluorescentTube[];

  constructor(tubes: FluorescentTube[]) {
    this.tubes = tubes;
  }

  useForADay(hours: number): void {
    this.tubes.forEach(tube => {
      tube.lifespan = Math.max(tube.lifespan - hours, 0);
    });
  }

  needsReplacement(): boolean {
    return this.tubes.filter(tube => tube.lifespan <= 0).length >= 2;
  }
}
