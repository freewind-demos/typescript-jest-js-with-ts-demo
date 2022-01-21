import {InitialOptions} from "@jest/types/build/Config";

const config: InitialOptions = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'node',
}

export default config;
