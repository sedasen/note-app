import { expect } from "chai";
import { classes } from "@src/util/classes.util";
import { accessIndex } from "@src/util/accessor.util";
import { colorMap, ColorName } from "../src/util/colors.util";

describe("utils", () => {
  it("should be able to construct class names with space delimiter.", () => {
    expect(classes("a", "b", "c")).equal("a b c");
    expect(classes("a", false && "b", "c")).equal("a c");
    expect(classes("foo", undefined, "bar", null, false, "baz")).equal(
      "foo bar baz"
    );
  });

  it("should be able to access array indices.", () => {
    const array = [0, 1, 2, 3, 4, 5];
    expect(accessIndex(array, 0, null)).equal(0);
    expect(accessIndex(array, 3, null)).equal(3);
    expect(accessIndex(array, 5, null)).equal(5);
    expect(accessIndex(array, 6, null)).equal(null);
    expect(accessIndex(array, 999, null)).equal(null);
    expect(accessIndex(array, 999, 999)).equal(999);
  });

  it("should contain all the colors in the lookup table", () => {
    Object.values(ColorName).forEach((color) => {
      expect(colorMap.has(color)).equal(true, "Missing color -> " + color);
    });
  });
});
