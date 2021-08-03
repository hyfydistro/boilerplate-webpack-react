# Title

* For Modern Browsers

## Brief

Type of website: Marketing site || Blog / Info-site || Product site

> Description of website. Design Goals (Story, ..., etc.), Business Goals (Attract specific customers, buy shit, ..., etc.)


### Targeted Devices

> Describe your main devices, and devices you wish to ignore

## Sample

> Image source of website UI

## Technical Wesbsite Supports

- [ ] Responsive mobile / tablet / laptop - **R**
    Recommended:
        - 380w x 568h (min)
        - 768w x 1024h
        - 1440w x 900h (max)

    * Other view dimensions or angles may suffer. :smiling_imp:

- [ ] Ally (Web Accessibility) - **A11y**
    - [ ] Screenreaders
    - [ ] Color accessible

- [ ] Old Browser Support - **OBS**
    - > specify here

- [ ] Progressive Web Application **PWA**
    - [ ] Service Worker
    - [ ] Manifest file

- [ ] Graceful Degradation / *Progressive Enhancement* **PE**
    - CSS PE
    - JavaScript PE

- [ ] Available at GitHub Pages


## Browsers Compatibility

### Modern Browsers

e.g.
* Tested on the following browsers:
    - FireFox
    - Google Chrome

It is possible Microsoft Edge will work well (because it runs on the same engine as Chrome - the V8 engine).


### Older Browsers

e.g.
Less than IE8 may suffer viewing experience. Used another stylesheet for IE browser.


## Development Setup

### Installation(s)

* NodeJS
* NPM v10 (required for Webpack 5)
* Webpack v5
    * Webpack CLI
        * It is mandatory Webpack has a `.browserslistrc` file because it does not configure transpile unless it exist.
* React v17+
* TypeScript v4.2
* Dart Sass v1.32.10


### NPM Packages

**dev-dependency**

* Webpack
    * [ ] webpack
    * [ ] webpack-cli
    * [ ] webpack-dev-server
    * [ ] webpack-bundle-analyzer (optional; debugging: optimization helper tool)
    Loaders
        * [ ] css-loader
        * [ ] style-loader (option #1 CSS injection method: for inline style)
        * [ ] sass-loader
        * [ ] postcss-loader
        * [ ] resolve-url-loader (helps sass locate repo outside its own folder, otherwise it is restricted)
        * [ ] file-loader (optional)
        * [ ] babel-loader
        * [ ] ts-loader (with TypeScript; WARNING, exclude `babel-loader` - it is its replacement; Not Recommended)
    Plugins
        * [ ] mini-css-extract-plugin (option #2 CSS injection method: for separate stylesheet)
        * [ ] html-webpack-plugin
        * [ ] clean-webpack-plugin
        * [ ] workbox-webpack-plugin (optoinal; to build Service Worker)
        * [ ] image-minimizer-webpack-plugin
        * [ ] fork-ts-checker-notifier-webpack-plugin (with TypeScript; dependen `fork-ts-checker-notifier-webpack-plugin`)
        * [ ] fork-ts-checker-webpack-plugin (with TypeScript; for fast build minus browser support)

* [ ] sass (AKA `dart-sass` --since 2020)
* [ ] postcss
* [ ] postcss-preset-env

Babel
* [ ] @babel/core
* [ ] @babel/preset-env
    Plugins
        * [ ] @babel/proposal-class-properties
        * [ ] @babel/proposal-object-rest-spread
        * [ ] @babel/plugin-transform-runtime (Often used with React)
        * [ ] @babel/runtime (Often used with React)
    With React
        * [ ] @babel/preset-react (with React)
    With TypeScript
        * [ ] @babel/preset-typescript (with TypeScript)

React
    With TypeScript
    * [ ] @types/react (with React; integrate TypeScript support)
    * [ ] @types/react-dom (with React; integrate TypeScript support)
    * [ ] @types/react-router-dom (with React)
    * [ ] @types/react-router (with React)
    * [ ] @types/react-transition-group (with React)
    * [ ] @types/react-test-renderer (with React)

Testing Framework
* [ ] jest (optional; for Unit Testing)
* [ ] playwright (optional; for E2E Testing)
* [ ] jest-playwright-preset
    Jest With TypeScript
    * [ ] ts-jest
    * [ ] @types/jest

Terminal
* [ ] cross-env (allow environment variable setup for varous OS with on universal syntax)

Simple Server (to test for current user experience)
* [ ] http-server

Image File Compressions (optional)
    Lossless
    * [ ] imagemin-jpegtran
    * [ ] imagemin-optipng
    Lossy
    * [ ] imagemin-mozjpeg
    * [ ] imagemin-pngquant
    Misc
    * [ ] imagemin-svgo
    * [ ] imagemin-gifsicle
    * [ ] imagemin-webp

Linters
Eslint
* [ ] eslint
    With Prettier
    * [ ] prettier
    * [ ] eslint-plugin-prettier (eslint plugin for prettier)
    * [ ] eslint-config-prettier (eslint config for prettier)
    With Vanilla JavaScript
    * [ ]
    With TypeScript
    * [ ] @typescript-eslint/parser
    * [ ] @typescript-eslint/eslint-plugin
    With React
    * [ ] eslint-plugin-react
    * [ ] eslint-plugin-react-hooks

Linters: Airbnb Config
```
npm info "eslint-config-airbnb@latest" peerDependencies
```
* [ ] (eslint with Vanilla JavaScript)
```
npx install-peerdeps --dev eslint-config-airbnb-base
```

**dependency**
* [ ] core-js (mandatory; for further older browsers support such as IE)
* [ ] react (with React)
* [ ] react-dom (with React)


#### Webpack

Install webpack setup
```
npm install --save-dev webpack webpack-cli webpack-dev-server
```


**Debugging**

* Use `devtool` option and set to `source-map` in Webpack configurations . This will allow you to trace and see pre-compile or pre-transpile files in the browser's developer tool. Note, there are more options in Webpack doc.

* (Optional) Use `hot` option and set to `true` if you want css injection in browser to persist.


**Module Analyzer**

(WIP)

If you want to try and optimize, check what is bloating your app:
```
npm i -D webpack-bundle-analyzer
```

Also, write npm script to run server for it.


##### Styles

* Styles compiler and transpiler

If you don't mind inline styling injected to your html, use `style-loader`. Otherwise, exclude it.
```
npm install --save-dev css-loader sass-loader
```

Instead, add the plugin Mini CSS Extract Plugin:
```
npm i -D mini-css-extract-plugin
```

Extracts styles and puts it in its own CSS file instead of having it inline with the bundler.js file. Let's you use sourcemap. Better for debugging.

For PostCSS, the following is needed for transpiling:
```
npm i -D postcss postcss-loader postcss-preset-env
```

**All in one line (excluding `style-loader`):**
```
npm install --save-dev css-loader sass sass-loader mini-css-extract-plugin postcss postcss-loader postcss-preset-env
```

**All in one line (excluding `mini-css-extract-plugin`):**
```
npm install --save-dev css-loader sass sass-loader style-loader postcss postcss-loader postcss-preset-env
```


##### Scripts

* JavaScript compiler and transpiler

**JavaScript ONLY**
```
npm install --save-dev @babel/core @babel/preset-env babel-loader
```

`@babel/core` and `@babel/preset-env` are part of the configurations setup. Even though you would only set up in the config `@babel/preset-env`, it is dependent on `@babel/preset-env`.

After adding a cofiguration preset for babel, it will enable transforms for ES2015+.


If you want to support older browsers such as IE8 or IE11, you will need to install the following dependency.

`core-js` gets all the required polyfills for the list of target browsers. Save as dependency.
```
npm i -S core-js
```

**TypeScript ONLY**

(See *TypeScript*.)


#### Misc.

* `html-webpack-plugin`

To change the name of the entry points or add a new one, the generated bundles would be renamed on a build, but our `index.html` file would still reference the old names. We can fix that with `HTMLWebpackPlugin`.


* `clean-webpack-plugin`

Removes files for new production files.


**All in one line (ONLY `clean-webpack-plugin` + `html-webpack-plugin`):**
```
npm install --save-dev html-webpack-plugin clean-webpack-plugin
```

* `image-minimizer-webpack-plugin`

Brought to you by `imagemin`.
```
$ npm i -D image-minimizer-webpack-plugin
```

Images can be optimized in two modes:

Lossless (without loss of quality).
Lossy (with loss of quality).

Recommended imagemin plugins for lossless optimization
```
npm install imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-svgo --save-dev
```

Recommended imagemin plugins for lossy optimization
```
npm install imagemin-gifsicle imagemin-mozjpeg imagemin-pngquant imagemin-svgo --save-dev
```


**Mandatory Requirement**

`image-minimizer-webpack-plugin` uses `file-loader` (or `url-loader`) to find the images to use and process.

Install `file-loader`:
```
npm install --save-dev file-loader
```

Now you may import image files to your bundler JavaScript file.


*Personal Optimization Options*

For Lossless Image Quality
```
// `webpack.config.js`
    plugins: [
        // ...other plugins ...

        new ImageMinimizerPlugin({
            exclude: /\.ico$/i,
            minimizerOptions: {
                plugins: [
                    // ! Configure - imagemin plugins must be installed before use
                    //  ? Use lossless combination
                    ["gifsicle", {
                        interlaced: true,
                        optimizationLevel: 3
                    }],
                    ["mozjpeg", {
                        quality: 90
                    }],
                    ["pngquant", {}],
                    ["pngquant", { // *lossy settings
                        speed: 1,
                        quality: [0.95, 1]
                    }],
                    ["svgo", {
                        removeViewBox: false
                    }],

                    // ? Use lossy combination
                    ["gifsicle", {
                        interlaced: true,
                        optimizationLevel: 3
                    }],
                    ["jpegtran", {
                        progressive: true
                    }],
                    ["optipng", {}],
                    ["svgo", {
                        removeViewBox: false
                    }],
                    ["imagemin-webp"]
                ],
            },
            loader: true
        }),

        // ...other plugins ...
    ],
```

///////////////// [!] WORK IN PROGRESS >> ///////////////////////
For Lossy Image Quality
```
// `webpack.config.js`
    plugins: [
        // ...other plugins ...

        new ImageMinimizerPlugin({
            exclude: /\.ico$/i,
            minimizerOptions: {
                plugins: [
                    // ! Configure - imagemin plugins must be installed before use
                    //  ? Use lossless combination
                    ["gifsicle", {
                        interlaced: true,
                        optimizationLevel: 3
                    }],
                    ["mozjpeg", {
                        quality: 90
                    }],
                    ["pngquant", {}],
                    ["pngquant", { // *lossy settings
                        speed: 1,
                        quality: [0.95, 1]
                    }],
                    ["svgo", {
                        removeViewBox: false
                    }],

                    // ? Use lossy combination
                    ["gifsicle", {
                        interlaced: true,
                        optimizationLevel: 3
                    }],
                    ["jpegtran", {
                        progressive: true
                    }],
                    ["optipng", {}],
                    ["svgo", {
                        removeViewBox: false
                    }],
                    ["imagemin-webp"]
                ],
            },
            loader: true
        }),

        // ...other plugins ...
    ],
```

///////////////// [!] << WORK IN PROGRESS ///////////////////////

Reference: [This Guy - LoyEgor](https://gist.github.com/LoyEgor/e9dba0725b3ddbb8d1a68c91ca5452b5)

**All in one line (Use loseless optimization; Minimum: PNG, JPEG; including `file-loader`):**
```
npm install --save-dev image-minimizer-webpack-plugin imagemin-mozjpeg imagemin-pngquant file-loader
```

**All in one line (Use loseless optimization; Maximum: all; including `file-loader`):**
```
npm install --save-dev image-minimizer-webpack-plugin imagemin-gifsicle imagemin-mozjpeg imagemin-pngquant imagemin-svgo file-loader
```

**All in one line (use lossy optimization; Maximum: all; including `file-loader`):**
```
npm install --save-dev image-minimizer-webpack-plugin imagemin-gifsicle imagemin-mozjpeg imagemin-pngquant imagemin-svgo file-loader
```

* `workbox-webpack-plugin`

Brought to you by Google is their Worbox application. It generates a service worker.

```
npm install --save-dev workbox-webpack-plugin
```

There are two sub plugins implemented as modules within the `workbox-webpack-plugin` named `GenerateSW` and `InjectManifest`.


`GenerateSW` for pre-cache files or simple runtime configurations. However, it won’t work if you need Service Worker features such as Web Push or if you need to import additional scripts with these capabilities.

e.g.
```
// webpack.config.js:
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  // Other webpack configs...
  plugins: [
    // Other plugins...
    new GenerateSW({
      option: 'value',
    })
  ]
};
```


`InjectManifest` has many advantages. Therefore you should use this if you,
Need more control over the Service Worker.
- Have more complex routing needs.
- Need to precache files.
- Need to use your Service Worker with other APIs such as Web Push.

e.g.
```
// webpack.config.js:
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
  // Other webpack configs...
  plugins: [
    // Other plugins...
    new InjectManifest({
      swSrc: './src/sw.js',
    })
  ]
};
```
This will create a precache manifest (a list of Webpack assets) and inject it into the Service Worker file via `importScripts()`.

Tip: Workbox revisions each file based on its contents. Therefore, Workbox should always be the last plugin to be called.


*Custom Service Worker*

if you need to have your own custom Service Worker file, you can enable it using the `swSrc` option. This will specify the path to your Service Worker file and disable the automatically generated one.
```
import WorkboxPlugin from 'workbox-webpack-plugin';
module.exports = {
   // Other webpack configs...
   plugins: [
     // Other plugins...
     new WorkboxPlugin({
        globDirectory: './dist/',
        globPatterns: ['**/*.{html,js,css}'],
        swSrc: './src/client/service-worker.js',
        swDest: './dist/service-worker.js'
     }),
   ],
}
```

Many other configurations can be included when using the workbox-webpack-plugin. you can find more details in their [documentation](https://developers.google.com/web/tools/workbox/reference-docs/latest).


More info can be found in [Google's Workbox site](https://developers.google.com/web/tools/workbox).

* `fork-ts-checker-webpack-plugin` with `@types/fork-ts-checker-webpack-plugin`

#TypeScript

The Webpack process won’t do any type checking at the moment. We can use a package called fork-ts-checker-webpack-plugin to enable the Webpack process to type check the code. This means that Webpack will inform us of any type errors.

```
npm install --save-dev fork-ts-checker-webpack-plugin @types/fork-ts-checker-webpack-plugin
```

Add the following to `webpack.config.js`:
```
  plugins: [
    ...,
    new ForkTsCheckerWebpackPlugin({
      async: false
    }),
  ]
```

The `async` flag to tell Webpack to wait for the type checking process to finish before it emits any code.


#### Unit Testing with Jest (Optional)

Basic unit testing will be done with Jest and vanilla JavaScript.
```
npm install --save-dev jest
```

Create a jest config file specifically for Jest: `jest.unit.config.js`.
```
module.exports = {
  setupFilesAfterEnv: ['./jest.unit.setup.js'],
  testEnvironment: "jsdom",
  testMatch: ["**/tests/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"], // default
  testPathIgnorePatterns: ["/node_modules/", "<rootDir>/tests/e2e/", "<rootDir>/dist/", "<rootDir>/tests/demo.js", "<rootDir>/tests/demo.ts"]
};
```

Create a `jest.unit.setup.js` file with the following configurations:
```
import 'regenerator-runtime/runtime';

// mock "window.matchMedia" object (if available)
// Object.defineProperty(window, 'matchMedia', {
//   writable: true,
//   value: jest.fn().mockImplementation(query => ({
//     matches: true,
//     media: query,
//     onchange: null,
//     addEventListener: jest.fn(),
//     removeEventListener: jest.fn(),
//     dispatchEvent: jest.fn()
//   }))
// });

// jest.setTimeout(50000); //optional
```
This allows `async` keyword to be used. You may import it into the file but this is for all global e2e test.


#### End to End Testing with Jest + Playwright (optional)

E2E testing will be done with Jest and Playwright and vanilla JavaScript.
```
npm i -D playwright jest-playwright-preset
```

Use config file that will be used with Playwright (unit testing and end-to-end testing usually have separate environments):
`jest.e2e.config.js`
```
module.exports = {
  setupFilesAfterEnv: ['./jest.e2e.setup.js'],

  preset: 'jest-playwright-preset',

  testMatch: [
    "<rootDir>/tests/e2e/**/*.js",
    "<rootDir>/tests/e2e/**/*.+(ts|js)",
    "<rootDir>/tests/e2e/**/?(*.)+(spec|test).+(ts|js)"
  ],

  testEnvironmentOptions: {
    "jest-playwright": {
      browsers: ["chromium", "firefox", "webkit"]
      // launchOptions: {
      //   headless: false,
      //   slowMo: 50
      // }
    }
  },

  // Pick up TypeScript files (as well as JavaScript files) and process them with ts-jest
  transform: {
    "^.+\\.(ts)$": "ts-jest",
  }
};
```

WARNING: Use only if called upon.

Create a `jest.e2e.setup.js` file with the following configurations:
```
import 'regenerator-runtime/runtime';
```

This allows `async` keyword to be used. You may import it into the file but this is for all global e2e test.

WARNING: `jest-playwright.config.js` can be configured in your jest config file, so creating it may be unnecessary unless there's a reason to do so.

Create a `jest-playwright.config.js` file with the following configurations:
```
module.exports = {
  browsers: ["chromium", "firefox", "webkit"],
};
```

#### Test Repo

The folder structure should look like the following:
```
/ tests
    |- example.test.js
    /- e2e
        |- smoke.test.js
        |- sanity.test.js
        |- regression.test.js
```

Note: althought, Jest writes their test in a folder called `__tests__` as default, this is personal preference.

`smoke.test.js` is the core test of what your main application should do.

`sanity.test.js` is the possibility of an unorthodox user that deviate from the core path of what the main application should do.

`regression.test.js` is `smoke.test.js` and `sanity.test.js`.


### React

To use React in webpack and production, it needs to be installled as dependency:
```
npm i react react-dom
```

For further transpile and to allow JSX, install the following babel react preset as dependency:
```
npm i -D @babel/preset-react
```

Configure in your babel file (`babel.config.js` or `.babelrc`).

If you are using `.jsx` extensions for your file names, configure `webpack.config.js`:
```
resolve: {
    extensions: [".js", ".jsx"]
}
```

This is saying when you import something, it will automatically infer.

NB: you may also put other extensions if you want.

Don't forget to reconfigure your `babel-loader` to allow `.jsx` files too.


**With TypeScript**

The following dev dependency will allow typechecking and integrate TypeScript support with React. i.e. you can write `.tsx` instead of `.jsx`.
```
npm install --save-dev @types/react @types/react-dom
```

You will also have to configure you `tsconfig.json` file.

The following uses `babel-loader` to transpile.
```

```


#### Testing with Jest (WIP)

(WIP)

To test React with jest, you'll be working with another environment.
```
 react-test-renderer
 ```

Ref: [test React with Jest](https://jestjs.io/docs/en/tutorial-react)


## Development Configurations

### gitignore

Add production files in `dist` folder to `.gitignore` for development purposes. When it is ready, you may remove it from `.gitignore`. Therefore, you won't have to include in your version control commands all the time.


### Browserslist

`.browserslistrc`

**Browsers Data Updating**

`npx browserslist@latest --update-db` updates `caniuse-lite` version in your npm, yarn or pnpm lock file. If you're writing for Modern browsers, this may be necessary. [Reasons found here.](https://github.com/browserslist/browserslist#browsers-data-updating)


**Debug**

To csee what browsers was selected by your queries, run the following command in the project directory:
```
Run npx browserslist
```


**Older Browsers Support Options**

> Decide how far back are you going to support older browsers. There is as far as IE8 and IE11. Make configuration to your `.browserslistrc`

option 1 (Default)
```
last 2 versions
>1%
ie11
maintained node versions
not dead
```

option 2 (depracated)
```
last 3 versions
>0.7%
ie8
```

option 3 (popular)
```
>0.2%,
not dead
not op_mini all
```

option 4 (for development)
```
last 1 chrome version
last 1 firefox version
last 1 safari version
```

> Remeber the older it is, the more polfills you'll need and the more bloated your website will be!


### TypeScript

After some speculation, `babel-loader` > `ts-loader`.

+ polyfills - more browser support
+ typechecking included too

If you don't care about much about browser support and want for fast build, `ts-loader` could be an option.

* `ts-lodaer` [REJECTED]
```
npm install --save-dev ts-loader fork-ts-checker-webpack-plugin fork-ts-checker-notifier-webpack-plugin typescript
```

`fork-ts-checker-webpack-plugin` type checks in a spearate process.

`fork-ts-checker-notifier-webpack-plugin` helps gives warning in the console if any.


* `babel-loader [ACCEPTED]

In order to transpiler to earlier JavaScript version, you will need to install the following dev dependencies: `@babel/core` and `@babel/preset-env`. It has a similar setup as above. `core-js` can also beconfigured.

```
npm install --save-dev @babel/core @babel/preset-env babel-loader @babel/preset-typescript typescript
```

Note, if you want to support IE, include `core-js` as dependency.

* Initalise `ts.config.js`

It's honestly better than writing it by hand.
```
npx tsc --init
```

`ts.config.js`
```

```

**TypeScript with React**

```
npm install --save-dev @types/react @types/react-dom
```

`@types/react` and `@types/react-dom` allow typechecking for React via TypeScript.


There are other React libraries that would involve getting TypeScript integration modules.


**All in one line; for `react` and `react-dom`**
```
npm install --save-dev typescript @types/react @types/react-dom
```

`ts.config.js`
```
{
  "compilerOptions": {
    "outDir": "./dist/",

    // # Target JavaScript Version
    "module": "es6",
    "target": "es3",

    // # Development Environment
    // Whether to support JSX in .tsx files
    "lib": ["dom", "dom.iterable", "esnext"],
    // How module dependencies get resolved
    "moduleResolution": "node",
    "removeComments": true,
    "sourceMap": true,

    // # TypeScript Rules
    // Process & infer types from .js files
    "allowJs": true,
    "noImplicitAny": true,
    "skipLibCheck": true,
    "jsx": "react",
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    // This allows modules to be in .json files which are useful for configuration files
    "resolveJsonModule": true,

    // # With Babel
    // Whether to suppress TypeScript generating code during the compilation process.
    // Set this to `true`if Babel will be generating the JavaScript code
    "noEmit": true,
    // This enables compatibility with Babel.
    "esModuleInterop": true,

    // # Misc
    // Disallow features that require cross-file information for emit
    // "isolatedModules": true,
    "isolatedModules": false,
  },
  "include": ["src"]
}
```
[!] WIP


**TypeScript with Jest**

```
npm install --save-dev @types/jest ts-jest
```

`ts-jest` is preprocessor, so it runs on a separate processor than with webpack (`babel-loader` or `ts-loader`). `@types/jest` allow you to bypass system error and it is essential you convert the file to `*.test.ts`.

You may convert all `*.test.js` files to `*.test.ts` (or `*.test.tsx` if you are using react, although both works fine).

Configure `jest.unit.config.js` preset to `preset: "ts-jest"`:
```
module.exports = {
  preset: "ts-jest",
  // setupFilesAfterEnv: ['./jest.unit.setup.js'],
  testEnvironment: "jsdom",
  testMatch: ["**/tests/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"], // default
  testPathIgnorePatterns: ["/node_modules/", "<rootDir>/tests/e2e/", "tests/demo.ts"]
};
```


### Babel

With plain Vanilla JavaScript and current features, you may download so:
```
npm install --save-dev babel-loader @babel/core @babel/preset-env
```

`.babelrc` [REjECTED]

In some cases, you may use `.babelrc`. However, with Webpack 5, use `babel.config.js`. `config.js` runs for most javascript files and allow comments.


`babel.config.js` [ACCEPTED]

For simiplicity sake:
```
module.exports = {
    "presets": [
        [
            "@babel/preset-env"
        ]
    ]
}
```

For more supports for older browsers (and that you don't mind it getting bloated), add the the following option and configure `debug` to `true` to check what modern JavaScript has been targeted, otherwise you can set to `false` or remove it:
```
module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            {
                "debug": true,
                "useBuiltIns": "usage",
                "corejs": 3
            }
        ]
    ]
}
```

This will print debugging logs.

Babel will transpile according to the browserlists configurations / options or however you inject the browserlist option. It will ignore size concerns and add as many polyfills for your modern JavaScript.

Warning: For REALLY new cutting edge Modern JavaScript, look further in the Babel docs. Otherwise, build your website simpler.

e.g. to use class with arrow functions, this plugin may be useful. Note, install the plugin to allow Babel to transpile it.
```
    "plugins": [
        "@babel/plugin-proposal-class-properties"
    ]
```

* async / await
`@babel/plugin-transform-runtime` and `@babel/runtime` - These are plugins that allow us to use the `async` and `await` JavaScript features.

```
npm install --save-dev @babel/plugin-transform-runtime @babel/runtime
```

* class methods

`@babel/plugin-proposal-class-properties`
```
npm install --save-dev @babel/plugin-proposal-class-properties
```

WARNING: Use with React!

* object spread operator

```
npm install --save-dev @babel/proposal-object-rest-spread
```

* See more when encountered.


**All in one - Modern JavaScript Features ONLY**
```
npm install --save-dev @babel/plugin-transform-runtime @babel/runtime @babel/plugin-proposal-class-properties @babel/proposal-object-rest-spread
```

`babel.config.js`
```
    "plugins": [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-transform-runtime",
        {
            "regenerator": true
        },
        "@babel/proposal-object-rest-spread"
    ]
```

**All in one - Modern JavaScript Features (including ESSENTIALS)**

With plain Vanilla JavaScript and its modern features, you may download so:
```
npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime @babel/runtime @babel/plugin-proposal-class-properties @babel/proposal-object-rest-spread
```


**Babel with React**

```
npm install --save-dev @babel/preset-react
```


For simplicity sake, add the following to the configuration option:
```
module.exports = {
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```

There is a way to opt in to not having to import a React whenever you're just using jsx in a file. Under the hood, it is suppose to make a little more efficient. So the only time you need to import React is when you need methods or state - anything like that from the React library.

Since React v17+, the Babel team allow opting out having to `import` React syntax when you are using `.jsx` file. i.e. Less code. Add the following `runtime` option to do so:
```
module.exports = {
    "presets": [
        "@babel/preset-env",
        [
            "@babel/preset-react",
            {runtime: "automatic"}
        ]
    ]
}
```

With JavaScript and React, you may download so:
```
npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react
```


**Babel with TypeScript**

```
npm install --save-dev @babel/preset-typescript
```

```
{
  "presets": ["@babel/preset-typescript"]
}
```

More options can be found here:
https://babeljs.io/docs/en/babel-preset-typescript


With *JavaScript* only, you may download so:
```
npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
```

With *JavaScript* and *React*, you may download so:
```
npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
```

`babel.config.js`
```
module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            [
                "@babel/preset-react",
                {
                    "runttime": "automatic"
                }
            ],
            "@babel/preset-typescript"
            // {
            //     "debug": true,
            //     "useBuiltIns": "usage",
            //     "corejs": 3
            // }
        ]
    ]
}
```

### PostCSS

`postcss.config.js`

Configure the following to allow transpile:
```
module.exports = {
    plugins: [
        require("postcss-preset-env")
    ]
};
```


### Linters

* Eslint

```
npm install --save-dev eslint
```

* For quick setup and use popular eslint

```
eslint --init
```

By picking **enforce** you allow popular style guide to be available to pick from.

1. Choose **enforce** style
2. ...
3. ...
4. Choose popular style guide


* Other (WIP)


There are many eslint configuration. However, airbnb will be used.

On the way, you may adjust it to your own preferences.

With vanilla JavaScript
```
npx install-peerdeps --dev eslint-config-airbnb-base

```

[See docs](https://www.npmjs.com/package/eslint-config-airbnb-base)


With _React_
```
npm info "eslint-config-airbnb@latest" peerDependencies

```

Basic Setup with Prettier, create `.eslint.json` config file:
```
{
  "extends": ["airbnb-base", "prettier"],
  "plugins": ["prettier", "babel"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 12
  },
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "es2020": true,
    "jest": true
  },
  "rules": {
    "prettier/prettier": 0,
    "semi": "warn",
    "no-unused-vars": "warn",
    "func-names": "off",
    "no-console": "off",
    "object-shorthand": "off",
    "class-methods-usethis:": "off",
    "indent": ["error", 2, { "MemberExpression": 1 }],
    "quote-props": ["warn", "as-needed"],
    "prefer-arrow-callback": [ "error", { "allowNamedFunctions": true } ],   "function-paren-newline": ["warn", "multiline"],
    "import/extensions": "off",
    "no-underscore-dangle": "off",
    "eqeqeq": "off",
    "class-methods-use-this": "off",
    "no-useless-escape": "off",
    "prefer-destructuring": "off",
    "array-element-newline": ["error", {
      "ArrayExpression": "consistent"
  }]
  },
  "overrides": [
    {
      "files": ["src/scripts/**/*.js"],
      "excludedFiles": "tests/"
    }
  ],
  "ignorePatterns": [
    "prettier.config.js",
    "babel.config.js",
    "postcss.config.js",
    "jest.config.js",
    "jest.setup.*.js"
  ]
}
```

For `.eslintignore` file (Default)
```
/node-modules
/dist
/tests
```

Learn more on creating more than one eslint file and specifying it for certain files.

https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-files


* Prettier

```
npm install --save-dev prettier
```

To make prettier compatible with eslint:
```
npm install --save-dev eslint-plugin-prettier eslint-config-prettier
```

Note: For every plugin there is a config.

e.g.
- eslint-plugin-node
- eslint-config-node

**All in one line w/ Eslint**
```
npm install --save-dev prettier eslint-plugin-prettier eslint-config-prettier

```

Create a `.prettier.json` file:
```
{
  "printWidth": 100,
  "trailingComma": "none",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": false,
  "bracketSpacing": true,
  "endOfLine": "auto",
  "proseWrap": "never"
}
```

warning: `"prosewrap"` is not applying...

* With **TypeScript**

```
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

`@typescript-eslint/parser`: This allows TypeScript code to be linted.

`@typescript-eslint/eslint-plugin`: This contains some standard linting rules for TypeScript code.

* With **React**

```
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks
```

`eslint-plugin-react`: This contains some standard linting rules for React code.

`eslint-plugin-react-hooks`: This includes some linting rules for React hooks code.

**All in one - With TypeScript**
```
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks
```

e.g. `.eslintrc.json`
```
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "react-hooks"
  ],
  "extends": [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off"
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  }
}
```

We’ve explicitly added the two React hooks rules and suppressed the react/prop-types rule because prop types aren’t relevant in React with TypeScript projects.


### NPM Scripts

```
"scripts": {
    "watch": "webpack --watch",
    "dev": "webpack serve",
    "build:dev": "webpack",
    "build": "cross-env NODE_ENV=production&&webpack",
    "build:live": "cross-env NODE_ENV=production&&webpack && cross-env USER_EXP=pass&&http-server dist",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "test": "jest --coverage --config=jest.unit.config.js",
    "test:watch": "jest --watchAll --config=jest.unit.config.js",
    "test:unit": "jest --config=jest.unit.config.js",
    "test:e2e": "jest --config=jest.e2e.config.js",
    "test:demo": "npx playwright codegen localhost:3000/#",
    "stats": "webpack --json build-stats.json",
    "server": "node server.js"
}
```

* "watch": "webpack --watch"

Logs change WITHOUT live reload. Code re-compile. For development purpose.

Note: This is 1/3 options available in webpack that help you automatically compile your code whenever it changes. `webpack-dev-server` is 2/3, and `webpack-dev-middleware` is 3/3.


* "dev": "webpack serve"

Logs change WITH live reload. For development purpose.

webpack-dev-server doesn't write any output files after compiling. Instead, it keeps bundle files in memory and serves them as if they were real files mounted at the server's root path. If your page expects to find the bundle files on a different path, you can change this with the publicPath option in the dev server's configuration.


* "build:dev: "webpack"

Outputs files pre-transpile stage where you can read code (no minification either). For development purpose.


* "build" "set NODE_ENV=production&&webpack"
* "build": "cross-env NODE_ENV=production&&webpack" (with `cross-env`)

Outputs production files, ready to deploy.

**Warning**: This is specific to Windows OS v10. It may differ for your terminal on how you go about setting the environment variable.

`cross-env` allow different OS to use the command without having to specify specific rules or keywords to use.

* "test"

Produce the an html result page of unit tests run.

* "test:watch"

Watch any changes in unit tests.

* "test:unit"

Run unit tests.

* "test:e2e"

Run E2E tests.

* "stats": "webpack --json build-stats.json"

Produce a json result file.

* "test:demo" ([!]WORK IN PROGRESS)

Manual E2E tests.

Consider using QAWolf.


#### Unit Testing

Basic Unit Testing setup.

```
"scripts": {
    "test": "jest",
    "test:result": "jest --coverage",
    "test:watch": "jest --watchAll",
}
```

[To watch a single file, read more about it at Jest docs.](https://jestjs.io/docs/en/jest-platform#jest-changed-files)


Configuration for Unit Testing and E2E Testing:
```
"scripts": {
    "test": "jest --coverage --config=jest.unit.config.js",
    "test:watch": "jest --watchAll --config=jest.unit.config.js",
    "test:unit": "jest --config=jest.unit.config.js",
    "test:e2e": "jest --config=jest.e2e.config.js",
    "test:demo": "npx playwright codegen localhost:3000/#",
    "stats": "webpack --json build-stats.json"
}
```

### Environment Variables

Personal use case:
* Git Bash Terminal
* Windows OS


Environment variables are used to switch and from development to production mode and set different Webpack configurations.

Use `printenv` to see environment variables used (unordered, short), or use `set` (ordered, long).


#### Optional (WIP)

(WIP)

However, this may pose a problem with software that uses different terminal. Use *dotenv* module and create an `.env` file.

`.env`
```
NODE_ENV=production
NODE_ENV=development
```


## Notes on Font types

Modern browsers use the following font types:

* `woff`
* `woff2`


Older and much more diverse browsers will vary, use many fallback if needed:

* `.eot` - `` IE9 Compat Modes
* `eot?#iefix` - `embedded-opentype` IE6-IE8
* `.ttf` - `truetype` Safari, Android, iOS
* `.svg#svgFontName` - `svg` Legacy iOS

Be awre of the following when supporting older browsers:

* [Bug] Fonts won't work in IE if the font-family entry in css is named differently than the font name
* For IE 6-11, use EOT fonts, but be aware it is not supported by any other browser.
* For IE >=9 & all other browsers, use woff fonts, as it has the widest support and the best compression, since it was designed specifically for the web.


## Biography

n/a


## Text Compression

dev dependency
- [ ] compression-webpack-plugin

dependency
- [ ] express
- [ ] body parser

With Webpack `compression-webpack-plugin`.

Different text compression software may need an extra dev dependency downloaded, such as, *Zopfli*.

You will need to set this up on the server to change the Response Header properties. Although I'm not sure you may do it in the html file, there is a lot of liabilities if so (it's not recommended, types of files need to be matched in order to be accepted by HTTP request (something like that)).

Use, Express.

Create the server on the root.

e.g. server.js
```
const express = require("express");
const bodyParser = require("body-parser");
const { join } = require("path");

const port = 8000;

const app = express();

// `bodyParser` json files to receive files from the clients
app.use(bodyParser.json());
// Persist url
app.use(bodyParser.urlencoded({extended: true}));
app.use("*", (req, res, next) => {
  // logger
  const time = new Date();
  console.log(`${req.method} to ${req.originalUrl} at ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
  next();
});

// requested files
app.get("/index.bundler.js", (req, res) => {
  // If the receiving browser accepts brotli-compressed files, send to browser
  if (req.header("Accept-Encoding").includes("br")) {
    console.log("calling brotli");

    // Tell the browser what's inside that compressed file (optional; recommended)
    res.set("Content-Encoding", "br");
    // Tell the browser we are sending a javascript file (optional; recommended)
    res.set("Content-Type", "application/javascript; charset=UTF-8");
    res.sendFile(join(__dirname, "dist", "index.bundler.js.br"));
  } else if (req.header("Accept-Encoding").includes("gz")) {
    console.log("calling gzip");

    res.set("Content-Encoding", "gzip");
    res.set("Content-Type", "application/javascript; charset=UTF-8");
    res.sendFile(join(__dirname, "dist", "index.bundler.js.gz"));
  } else {
    console.log("calling uncompressed");

    res.sendFile(join(__dirname, "dist", "index.bundler.js"));
  }
});

app.get("/assets.bundler.js", (req, res) => {
  if (req.header("Accept-Encoding").includes("br")) {
    console.log("calling brotli");

    res.set("Content-Encoding", "br");
    res.set("Content-Type", "application/javascript; charset=UTF-8");
    res.sendFile(join(__dirname, "dist", "assets.bundler.js.br"));
  } else if (req.header("Accept-Encoding").includes("gz")) {
    console.log("calling gzip");

    res.set("Content-Encoding", "gzip");
    res.set("Content-Type", "application/javascript; charset=UTF-8");
    res.sendFile(join(__dirname, "dist", "assets.bundler.js.gz"));
  } else {
    console.log("calling uncompressed");

    res.sendFile(join(__dirname, "dist", "assets.bundler.js"));
  }

});

// other general files requested
app.use((req, res) => {
  res.sendFile(join(__dirname, "dist", "index.html"));
});

// app.use((req, res) => {
//   res.sendFile(join(__dirname, "dist", "assets.css"));
// });

// set "0.0.0.0" to make availability for local devices (e.g. phone)
app.listen(port, "0.0.0.0", (req, res) => {
  console.log(`Listening on localhost:${port}`);
});
```


- [Enable text compression](https://web.dev/uses-text-compression/?utm_source=lighthouse&utm_medium=devtools)
- [Enable Brotli Compression in Webpack with Fallback to Gzip](https://tech.groww.in/enable-brotli-compression-in-webpack-with-fallback-to-gzip-397a57cf9fc6)

Setup
- [enabling brotli](https://gist.github.com/merlox/82bfd2605aa4098e4f9f1dc16a6b363a)