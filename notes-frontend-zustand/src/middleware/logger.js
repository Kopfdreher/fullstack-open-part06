const logger = (config) => (set, get) => config(
  (...args) => {
    console.log('prev state', get())
    set(...args)
    console.log('next state', get())
  },
  get
)

export { logger }
