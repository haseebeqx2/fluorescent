import { FluorescentTubeUnit } from "./FluorescentTubeUnit";
import { SimulationResult, FluorescentTube } from "./interfaces";

export async function simulateClassroomUsage(): Promise<SimulationResult> {
  const response = await fetch('http://localhost:4000/simulate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json() as Promise<SimulationResult>;
}

export async function getNewTubes(): Promise<FluorescentTube[]> {
  const response = await fetch('http://localhost:4000/purchase-new-unit', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
}

export async function fetchNewUnit(): Promise<FluorescentTubeUnit> {
  const tubes = await getNewTubes();

  return new FluorescentTubeUnit(tubes);
}
