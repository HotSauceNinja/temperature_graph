import { validateTemperatures } from "./validateTemperatures.js";

test("validateTemperatures", () => {
  expect(validateTemperatures("+23.5 -10.1 +6 -3")).toBe(true);
  expect(validateTemperatures("+23.5 -10.1")).toBe(true);
  expect(validateTemperatures("23.5")).toBe(false);
  expect(validateTemperatures("5")).toBe(false);
  expect(validateTemperatures("++5")).toBe(false);
  expect(validateTemperatures("+-5")).toBe(false);
  expect(validateTemperatures("0")).toBe(true);
  expect(validateTemperatures("-0.5")).toBe(true);
  expect(validateTemperatures("+0.1")).toBe(true);
  expect(validateTemperatures("-0")).toBe(true);
  expect(validateTemperatures("+0")).toBe(true);
  expect(validateTemperatures("++0")).toBe(false);
  expect(validateTemperatures("0.0")).toBe(false);
  expect(validateTemperatures("0a")).toBe(false);
  expect(validateTemperatures("")).toBe(false);
  expect(validateTemperatures(" ")).toBe(false);
  expect(validateTemperatures("a")).toBe(false);
  expect(validateTemperatures("+")).toBe(false);
  expect(validateTemperatures(".")).toBe(false);
  expect(validateTemperatures("+.5")).toBe(false);
  expect(validateTemperatures(null)).toBe(false);
  expect(validateTemperatures(undefined)).toBe(false);
});
