import { SimulationResult } from "./interfaces";
import { runFrontendSimulation } from "./simulationLogic";
import { simulateClassroomUsage } from './apiServices'

function displayResults(result: SimulationResult): void {
  const resultSection = document.getElementById('resultSection');
  const brokenTubesElement = document.getElementById('brokenTubes');
  const totalCostElement = document.getElementById('totalCost');

  if (!resultSection || !brokenTubesElement || !totalCostElement) {
    console.error('One or more result elements are missing in the HTML document.');
    return;
  }

  resultSection.classList.remove('hidden');
  brokenTubesElement.textContent = `Broken Tubes in a Year: ${result.brokenTubes}`;
  totalCostElement.textContent = `Total Cost: $${result.totalCost}`;
}

function showLoading(): void {
  const loadingScreen = document.getElementById('loadingScreen');
  if (loadingScreen) {
    loadingScreen.classList.remove('hidden');
  }
}

function hideLoading(): void {
  const loadingScreen = document.getElementById('loadingScreen');
  if (loadingScreen) {
    loadingScreen.classList.add('hidden');
  }
}

export function setupEventListeners(): void {
  const simulateBtn = document.getElementById('simulateBtn');
  const simulateFrontendBtn = document.getElementById('simulateFrontendBtn');

  simulateBtn?.addEventListener('click', async () => {
    showLoading();
    try {
      const results = await simulateClassroomUsage();
      displayResults(results);
    } catch (error) {
      console.error('Failed to run simulation:', error);
    }
    hideLoading();
  });

  simulateFrontendBtn?.addEventListener('click', async () => {
    showLoading();
    try {
      const results = await runFrontendSimulation();
      displayResults(results);
    } catch (error) {
      console.error('Failed to run frontend simulation:', error);
    }
    hideLoading();
  });
}
