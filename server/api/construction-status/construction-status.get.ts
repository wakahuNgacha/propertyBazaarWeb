export default defineEventHandler(async (event) => {
  // TODO: Implement database query to get property modes
  // For now, returning mock data
  const constructionStatuses = [
    { id: 1, name: 'under construction' },
    { id: 2, name: 'completed' },
    { id: 3, name: 'in progress' },
  ];

  return constructionStatuses;
});