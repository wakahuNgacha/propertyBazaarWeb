export default defineEventHandler(async (event) => {
  // TODO: Implement database query to get property modes
  // For now, returning mock data
  const zoningInformations = [
    { id: 1, name: 'residential' },
    { id: 2, name: 'commercial' },
    { id: 3, name: 'industrial' },
  ];

  return zoningInformations;
});