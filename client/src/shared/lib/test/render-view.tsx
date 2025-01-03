import { ReactElement } from "react";

import { renderWithQueryClient } from "@/shared/lib/test/query-client.mock";

export function renderView(ui: ReactElement) {
  return renderWithQueryClient(ui);
}
