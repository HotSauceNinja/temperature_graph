import { findClosestToZero } from "./findClosestToZero";

test("findClosestToZero", () => {
  expect(findClosestToZero(["+23.5", "-3", "-10.1", "+6"])).toBe("-3");
  expect(findClosestToZero(["-3", "-10.1", "+6", "+3"])).toBe("+3");
  expect(findClosestToZero(["-3", "-10.1", "0", "+3"])).toBe("0");
  expect(findClosestToZero(["-3", "-10.1", "+3", "+3"])).toBe("+3");
});
