import { FluorescentTubeUnit } from "./FluorescentTubeUnit";
import { fetchNewUnit } from "./apiServices";
import { SimulationResult } from "./interfaces";

export async function runFrontendSimulation(): Promise<SimulationResult> {
  let totalBrokenTubes = 0;
  const HOURS_PER_DAY = 15;
  const DAYS_PER_WEEK = 5;

  const averageDaysPerMonth = 30.44;
  const monthsPerYear = 9;
  const totalDaysPerYear = averageDaysPerMonth * monthsPerYear;
  const weeksPerYear = Math.round(totalDaysPerYear / 7);

  let units: FluorescentTubeUnit[] = await Promise.all(
    Array(4).fill(null).map(fetchNewUnit)
  );

  for (let week = 0; week < weeksPerYear; week++) {
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
