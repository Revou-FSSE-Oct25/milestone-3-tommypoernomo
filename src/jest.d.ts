import '@testing-library/jest-dom';

declare global {
  namespace jest {
    interface Matchers<R> extends jest.Matchers<void, R>, TestingLibraryMatchers<typeof expect.stringContaining, R> {}
  }
}