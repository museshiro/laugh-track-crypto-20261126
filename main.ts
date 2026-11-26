import { mkdirSync, writeFileSync } from "node:fs";

const partA = "My crypto strategy is simple: I zoom out on the chart ";
const partB = "until my losses look like weather.";
const line = partA + partB;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
