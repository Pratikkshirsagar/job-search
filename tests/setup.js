import { cleanup } from '@testing-library/vue';
import matcher from '@testing-library/jest-dom/matchers';
import { expect, afterEach } from 'vitest';

expect.extend(matcher);

afterEach(() => {
  cleanup();
});
