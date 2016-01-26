System.config({
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  map: {
    //"src": "preview:///TEXTASTIC_PATH",
    "src": "./src",
    "babel": "npm:babel-core@5.8.35",
    "babel-runtime": "npm:babel-runtime@5.8.35",    
    "core-js": "npm:core-js@1.2.6",
    "chai": "npm:chai@3.4.1",
    "immutable": "npm:immutable@3.7.6",
    "toastr": "github:CodeSeven/toastr@2.1.2"
  }
});