"use client";

import { HubModelProps, HubView, useHubModel } from "@/features/hub";

export default function HubViewModel(modelProps: HubModelProps) {
  const methods = useHubModel(modelProps);

  return <HubView {...methods} />;
}
