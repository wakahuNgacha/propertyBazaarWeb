export const usePreviousWindow = () => {
  const goBack = () => {
    if (process.client) {
      window.history.back()
    }
  }

  return { goBack }
}
