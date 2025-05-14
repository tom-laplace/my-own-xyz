export const preset = 'ts-jest';
export const testEnvironment = 'node';
export const testMatch = ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'];
export const collectCoverageFrom = [
    'src/**/*.ts',
    '!src/**/*.d.ts',
];