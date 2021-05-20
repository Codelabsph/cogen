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
  return systemSizekWp(area) * irradiance * 30 * 12 * efficiency;
};

export const estimatedAnnualSavingsPeso = (area) => {
  return (
    systemSizekWp(area) * irradiance * 30 * 12 * efficiency * cost_of_electricty
  );
};

export const carbonEmissionSaved = (area) => {
  return emmision_factor * estimatedAnnualEnergyOuputkWh(area);
};

export const equivalentLitersOfDiesel = (area) => {
  return liters_of_diesel_emission_factor * carbonEmissionSaved(area);
};
