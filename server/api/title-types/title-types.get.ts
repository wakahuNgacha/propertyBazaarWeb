export default defineEventHandler(async (event) => {
  // TODO: Implement database query to get property modes
  // For now, returning mock data
  const titleTypes = [
    { id: 1, name: 'freehold' },
    { id: 2, name: 'leasehold' },
  ];

  return titleTypes;
});