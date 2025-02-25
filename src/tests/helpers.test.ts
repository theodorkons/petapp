import { describe, it, expect } from "vitest";
import { areAllStatusesFalse, findCategory } from "../utils/helpers";

describe("findCategory", () => {
  it("should return 'cat' if category or name contains 'cat'"),
    () => {
      expect(findCategory("shuzi", "cat")).toBe("cat");
      expect(findCategory("cat", "")).toBe("cat");
      expect(findCategory("el cato", "cat")).toBe("cat");
    };

  it("should return 'dog' when category or name contains 'dog'", () => {
    expect(findCategory("jack", "dog")).toBe("dog");
    expect(findCategory("dog", "")).toBe("dog");
    expect(findCategory("", "Doggy")).toBe("dog");
  });

  it("should return 'fish' when category or name contains 'fish'", () => {
    expect(findCategory("goldfish", "fish")).toBe("fish");
    expect(findCategory("fish", "")).toBe("fish");
    expect(findCategory("", "fishes")).toBe("fish");
  });

  it("should return 'bird' when category or name contains 'bird'", () => {
    expect(findCategory("parrot", "bird")).toBe("bird");
    expect(findCategory("bird", "")).toBe("bird");
    expect(findCategory("", "birdie")).toBe("bird");
  });

  it("should return 'unknown' when no match is found", () => {
    expect(findCategory("elephant", "mammal")).toBe("unknown");
    expect(findCategory("", "reptile")).toBe("unknown");
    expect(findCategory("", "")).toBe("unknown");
  });
});

describe("areAllStatusesFalse", () => {
  it("should return true if all status are true"),
    () => {
      expect(
        areAllStatusesFalse({
          available: true,
          pending: true,
          sold: true,
        })
      ).toBe(true);
    };

  it("should return false if at least one status is false"),
    () => {
      expect(
        areAllStatusesFalse({
          available: false,
          pending: true,
          sold: true,
        })
      ).toBe(false);
    };

  it("should return false if all statuses are false"),
    () => {
      expect(
        areAllStatusesFalse({
          available: false,
          pending: false,
          sold: false,
        })
      ).toBe(false);
    };
});
