# Full Stack Open — Part 6

Solutions for [Full Stack Open, part 6: Advanced state management](https://fullstackopen.com/en/part6).

Earlier parts kept component state in React and fetched data with `useEffect`. That works until the same data is needed in many places, or the client has to stay in sync with a server. This part separates those two problems.

**Client state** is handled with [Zustand](https://zustand.docs.pmnd.rs/). Shared state lives in a store outside the component tree. Components read the slices they need and call store actions to change them, following the same one-way data flow as the Flux architecture. The counter, Unicafe, and anecdotes exercises practice that.

**Server state** is handled with [TanStack Query](https://tanstack.com/query). Queries load and cache data from the backend; mutations update it and refresh what the UI shows. The query-anecdotes exercise moves the anecdote list onto that model, including loading, error, and notification handling.

Work in progress — the exercises will be finished over the next few days.
