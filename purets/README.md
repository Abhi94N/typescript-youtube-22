1. `tsc --init` - initialize tsconfig.json
2. `npm --init` - node file
3. `src` - contains typescript code
4. `dist` - contains transcompiled js code
   1. - update the `outDir` in tsconfig and point to `dist` folder
   2. `tsc -w` - watches for changes
5. `npm i lite-server` or use `nodemon`
   1. update `package.json` script to include starting lite-server
6. 