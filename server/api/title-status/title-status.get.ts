export default defineEventHandler(async (event) => {
  // TODO: Implement database query to get property modes
  // For now, returning mock data
  const titleStatuses = [
    { id: 1, name: 'ready' },
    { id: 2, name: 'processing' },
    { id: 3, name: 'pending subdivision' },
    { id: 4, name: 'lease registered' },
  ];

  return titleStatuses;
});
