export default defineEventHandler(async (event) => {
  // TODO: Implement database query to get property modes
  // For now, returning mock data
  const topographyTypes = [
    { id: 1, name: 'flat' },
    { id: 2, name: 'hilly' },
    { id: 3, name: 'mountainous' },
  ];

  return topographyTypes;
});