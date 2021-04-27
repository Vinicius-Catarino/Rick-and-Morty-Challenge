import React from "react";

import formatPronounGender from "../utils/formatPronounGender";

describe("utils function", () => {
  it("should be able return string", async (done) => {
    setTimeout(() => {
      expect(formatPronounGender("")).toEqual("");
      done();
    }, 2000);
  });
});
