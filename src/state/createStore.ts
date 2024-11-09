import { create } from 'zustand';
import { devtools, persist, PersistOptions, subscribeWithSelector } from 'zustand/middleware';

type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

/**
 * Create a zustand store.
 * @param initialState The store's initial state
 * @param name The store's name
 * @param localStorageOptions Local storage will be used if provided
 * @returns A store
 */
export function createStore<T extends object>(
  initialState: T,
  name: string,
  localStorageOptions?: WithRequired<Omit<PersistOptions<T>, 'name'>, 'version'>,
  devTools = true
) {
  const stateCreator = subscribeWithSelector(() => initialState);
  if (localStorageOptions) {
    // zustand store with local storage
    const store = persist(stateCreator, { ...localStorageOptions, name });
    if (devTools) {
      // wrap with devtools
      return create<T>()(devtools(store, { name }));
    }
    return create<T>()(store);
  } else if (devTools) {
    // zustand store with devtools
    return create<T>()(devtools(stateCreator, { name }));
  }

  // zustand store
  return create<T>()(stateCreator);
}
