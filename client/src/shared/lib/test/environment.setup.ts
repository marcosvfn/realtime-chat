import "@testing-library/jest-dom/vitest";

import { cleanup } from "@testing-library/react";
import { afterEach, beforeAll, vi } from "vitest";

beforeAll(() => {
  vi.resetModules();
  global.getComputedStyle = vi.fn().mockImplementation(() => {
    return {
      getPropertyValue: () => "",
    };
  });
});

afterEach(() => {
  vi.clearAllMocks();
  cleanup();
});
