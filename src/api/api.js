const fetching = useCallback(
    async () => {
        try {
          const response = await fetch('/api/exercises')
          const data = await response.json()
        } catch (error) {
            console.log(error)
        }
    },
    [exercises._id],
  )

  useEffect(() => {
    fetching()
  }, [fetching])