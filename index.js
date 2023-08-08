const sharp = require("sharp");
const fs = require("fs");

function runPipeline(inStream, outStream, pipeline) {
  const stream = inStream.pipe(pipeline).pipe(outStream);

  return new Promise((resolve, reject) => {
    stream.on("finish", resolve);
    stream.on("error", reject);
  });
}

async function rotateThenResizeFill(inStream, outStream) {
  // WORKS AS EXPECTED - produces an image that's rotated and has 400px width

  const pipeline = sharp().rotate(90).resize({ width: 400, fit: "fill" });
  return runPipeline(inStream, outStream, pipeline);
}

async function resizeThenRotateFill(inStream, outStream) {
  // WORKS AS EXPECTED - produces an image that's rotated and has 400px height

  const pipeline = sharp().resize({ width: 400, fit: "fill" }).rotate(90);
  return runPipeline(inStream, outStream, pipeline);
}

async function rotateThenResizeInside(inStream, outStream) {
  // WORKS AS EXPECTED - produces an image that's rotated and has 400px width

  const pipeline = sharp().rotate(90).resize({ width: 400, fit: "inside" });
  return runPipeline(inStream, outStream, pipeline);
}

async function resizeThenRotateInside(inStream, outStream) {
  // DOES NOT WORK AS EXPECTED - produces an image that's rotated and has 400px
  // width instead of height, the output is identical to rotateThenResizeInside

  const pipeline = sharp().resize({ width: 400, fit: "inside" }).rotate(90);
  return runPipeline(inStream, outStream, pipeline);
}

async function transform(inpath, outpath, func) {
  const inStream = fs.createReadStream(inpath);
  const outStream = fs.createWriteStream(outpath);

  return func(inStream, outStream);
}

module.exports = {
  resizeThenRotateFill,
  rotateThenResizeFill,
  resizeThenRotateInside,
  rotateThenResizeInside,
  transform,
};
