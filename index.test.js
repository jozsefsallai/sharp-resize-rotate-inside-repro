const sharp = require("sharp");
const path = require("path");
const { expect } = require("chai");

const {
  resizeThenRotateFill,
  resizeThenRotateInside,
  rotateThenResizeFill,
  rotateThenResizeInside,
  transform,
} = require(".");

describe("when resize fit is `fill`", () => {
  describe("rotate -> resize", () => {
    it("should output an image with 400px width", async () => {
      const inpath = path.join(__dirname, "input.jpg");
      const outpath = path.join(
        __dirname,
        "outputs/rotate-then-resize-fill.jpg"
      );

      await transform(inpath, outpath, rotateThenResizeFill);

      const { width } = await sharp(outpath).metadata();

      expect(width).to.equal(400);
    });
  });

  describe("resize -> rotate", () => {
    it("should output an image with 400px height", async () => {
      const inpath = path.join(__dirname, "input.jpg");
      const outpath = path.join(
        __dirname,
        "outputs/resize-then-rotate-fill.jpg"
      );

      await transform(inpath, outpath, resizeThenRotateFill);

      const { height } = await sharp(outpath).metadata();

      expect(height).to.equal(400);
    });
  });
});

describe("when resize fit is `inside`", () => {
  describe("rotate -> resize", () => {
    it("should output an image with 400px width", async () => {
      const inpath = path.join(__dirname, "input.jpg");
      const outpath = path.join(
        __dirname,
        "outputs/rotate-then-resize-inside.jpg"
      );

      await transform(inpath, outpath, rotateThenResizeInside);

      const { width } = await sharp(outpath).metadata();

      expect(width).to.equal(400);
    });
  });

  describe("resize -> rotate", () => {
    it("should output an image with 400px height", async () => {
      const inpath = path.join(__dirname, "input.jpg");
      const outpath = path.join(
        __dirname,
        "outputs/resize-then-rotate-inside.jpg"
      );

      await transform(inpath, outpath, resizeThenRotateInside);

      const { height } = await sharp(outpath).metadata();

      expect(height).to.equal(400);
    });
  });
});
