import '@testing-library/jest-dom';
import { afterEach, beforeAll, afterAll, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import { worker } from './src/mocks/browser';

vi.mock(import("react-redux"), () => ({
  useSelector: vi.fn((v) => ({})),
  useDispatch: vi.fn(),
}));

beforeAll(() => worker.start({ onUnhandledRequest: 'error' }));

afterEach(() => {
  cleanup();
  vi.resetAllMocks();
  worker.resetHandlers();
});

afterAll(() => worker.stop());
