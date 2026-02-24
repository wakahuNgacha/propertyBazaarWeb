export default defineEventHandler(async (event) => {
  // TODO: Implement database query to get property modes
  // For now, returning mock data
  const propertyModes = [
    { id: 1, name: 'single' },
    { id: 2, name: 'project' },
    { id: 3, name: 'offPlan' },
  ];

  return propertyModes;
});
