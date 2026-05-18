import "@testing-library/jest-dom";

import { TextEncoder, TextDecoder } from "util";

// Assign encoder and decoder to globalThis
// globalThis works in browser and Node environments

globalThis.TextEncoder = TextEncoder;
globalThis.TextDecoder = TextDecoder;
