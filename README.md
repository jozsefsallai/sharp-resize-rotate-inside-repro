# sharp-resize-rotate-inside-repro

```sh
git clone git@github.com:jozsefsallai/sharp-resize-rotate-inside-repro.git
cd sharp-resize-rotate-inside-repro
npm install
npm run test
```

```
> sharp-resize-rotate-inside-repro@1.0.0 test
> mocha index.test.js

  when resize fit is `fill`
    rotate -> resize
      ✔ should output an image with 400px width (63ms)
    resize -> rotate
      ✔ should output an image with 400px height (55ms)

  when resize fit is `inside`
    rotate -> resize
      ✔ should output an image with 400px width (53ms)
    resize -> rotate
      1) should output an image with 400px height


  3 passing (226ms)
  1 failing

  1) when resize fit is `inside`
       resize -> rotate
         should output an image with 400px height:

      AssertionError: expected 552 to equal 400
      + expected - actual

      -552
      +400

      at Context.<anonymous> (index.test.js:76:25)
```

Sample outputs will be created in the `outputs` directory.
