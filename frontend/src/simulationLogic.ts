import { FluorescentTubeUnit } from "./FluorescentTubeUnit";
import { fetchNewUnit } from "./apiServices";
import { SimulationResult } from "./interfaces";

export async function runFrontendSimulation(): Promise<SimulationResult> {
  let totalBrokenTubes = 0;
  const HOURS_PER_DAY = 15;
  const DAYS_PER_WEEK = 5;
  const WEEKS_PER_YEAR = 4 * 9;

  let units: FluorescentTubeUnit[] = await Promise.all(
    Array(4).fill(null).map(fetchNewUnit)
  );

  for (let week = 0; week < WEEKS_PER_YEAR; week++) {
    for (let day = 0; day < DAYS_PER_WEEK; day++) {
      for (let i = 0; i < units.length; i++) {
        units[i].useForADay(HOURS_PER_DAY);
        if (units[i].needsReplacement()) {
          totalBrokenTubes += units[i].tubes.filter(tube => tube.lifespan <= 0).length;
          units[i] = await fetchNewUnit();
        }
      }
    }
  }

  return {
    brokenTubes: totalBrokenTubes,
    totalCost: totalBrokenTubes * 7
  };
}
