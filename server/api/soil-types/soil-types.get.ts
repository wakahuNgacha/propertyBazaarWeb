export default defineEventHandler(async (event) => {
  // TODO: Implement database query to get property modes
  // For now, returning mock data
  const soilTypes = [
    { id: 1, name: 'Sandy' },
    { id: 2, name: 'Clayey' },
    { id: 3, name: 'Loamy' },
  ];

  return soilTypes;
});