const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["./src/WrapperComponent.tsx"],
    outdir: "dist",
    bundle: true,
    minify: false,
    // splitting: true,
    format: "esm",
    external: ["react", "react-dom"],
    // jsx: "automatic",
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
