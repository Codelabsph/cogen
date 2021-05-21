export const irradiance = 4;
export const efficiency = 0.86;

export const emissions_multiplier = Math.pow(10, -4);
export const emmision_factor = 7.07 * emissions_multiplier;
export const cost_of_electricty = 10;
export const liters_of_diesel_emission_factor = 0.002689279865;

export const systemSizekWp = (area) => {
  return area / 7;
};

export const estimatedAnnualEnergyOuputkWh = (area) => {
  return Number(
    systemSizekWp(area) * irradiance * 30 * 12 * efficiency
  ).toFixed(2);
};

export const estimatedAnnualSavingsPeso = (area) => {
  return Number(
    area * irradiance * 30 * 12 * efficiency * cost_of_electricty
  ).toFixed(2);
};

export const carbonEmissionSaved = (area) => {
  return Number(emmision_factor * estimatedAnnualEnergyOuputkWh(area)).toFixed(
    2
  );
};

export const equivalentLitersOfDiesel = (area) => {
  return Number(
    liters_of_diesel_emission_factor * carbonEmissionSaved(area)
  ).toFixed(2);
};

export const estimateMonthlySavings = (val = 0) => {
  const mutliplier = 2;
  return Number(val * mutliplier).toFixed(2);
};

export const co2Reduction = (val = 0) => {
  const mutliplier = 1.1;
  return Number(val * mutliplier).toFixed(2);
};

export const estimateMonthlySavingsFromApi = (val) => {
  const mutliplier = 4.5;
  return Number(val * mutliplier).toFixed(2);
};
