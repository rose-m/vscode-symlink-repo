import { testFunction } from 'api';

export function main() {
    // Go to definition of `testFunction` and see that the file inside node_modules is opened
    // which actually is a symlink to the file in the packages/api/src/index.ts
    const testValue = testFunction();
}