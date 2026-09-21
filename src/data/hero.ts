import type { HeroMetric, AvailabilityMessage } from "../types/site";

export const heroMetrics: HeroMetric[] = [
  { value: "48", suffix: "h", label: "first design direction" },
  { value: "3", suffix: "x", label: "visual formats per campaign" },
  { value: "100", suffix: "%", label: "ready-to-publish files" },
];

export const availabilityMessages: AvailabilityMessage[] = [
  { text: "Available for work", unavailable: false },
  { text: "Available for new projects", unavailable: false },
];

