"use strict";
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    collectCoverage: true,
    collectCoverageFrom: ["src/adapters/**", "src/application/**"],
};
