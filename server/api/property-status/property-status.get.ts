export default defineEventHandler(async (event) => {
  // TODO: Implement database query to get property status
  // For now, returning mock data
  const propertyStatus = [
    { id: 1, name: 'available' },
    { id: 2, name: 'sold' },
    { id: 3, name: 'pending' },
    { id: 4, name: 'off market' },
  ];

  return propertyStatus;
});