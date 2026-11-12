# Full Stack Open — Part 6

Solutions for [Full Stack Open, part 6: Advanced state management](https://fullstackopen.com/en/part6).

Parts 0–5 are in [fullstack-open-part00-05](https://github.com/Kopfdreher/fullstack-open-part00-05), which also describes the course.

Earlier parts kept component state in React and fetched data with `useEffect`. That works until the same data is needed in many places, or the client has to stay in sync with a server. This part separates those two problems.

**Client state** is handled with [Zustand](https://zustand.docs.pmnd.rs/). Shared state lives in a store outside the component tree. Components read the slices they need and call store actions to change them, following the same one-way data flow as the Flux architecture. The counter, Unicafe, and anecdotes exercises practice that. A Context API counter is included as a comparison.

**Server state** is handled with [TanStack Query](https://tanstack.com/query). Queries load and cache data from the backend; mutations update it and refresh what the UI shows. The notes app and query-anecdotes exercise move lists onto that model, including loading, error, and notification handling.

| Directory | What it covers |
| --- | --- |
| `counter-zustand` | Zustand store for a counter |
| `counter-contextAPI` | The same counter with React Context |
| `unicafe` | Unicafe feedback in a Zustand store |
| `anecdotes` | Anecdotes: voting, filtering, notifications, backend sync |
| `notes-frontend-zustand` | Notes app with Zustand |
| `notes-frontend-tanStack` | Notes app with TanStack Query |
| `query-anecdotes` | Anecdotes with TanStack Query |

Each app is started from its own directory with `npm install` and `npm run dev`. Apps that talk to json-server also need that server running (see the app’s own README where one exists).
