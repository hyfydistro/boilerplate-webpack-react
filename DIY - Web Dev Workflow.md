# DIY - Web Development Workflow

By Caroline Rozali

# Web Design

## Determine your website Goal

* Design Goals
* Performance Goals

- [ ] Determine if you're going to support older browsers
    - if so, choose a technique that will benefit.
    - Graceful Degradation
    - CSS: `@support`
    - HTML: IE conditional comments
    - HTML: `div` elements over semantic HTML elements
    - Polyfills
    - CSS: `float` over column, flexbox and grid


##

- [ ] Progressively Enhanced CSS Layouts: Floats to Flexbox and Grid

##

- [ ] Choose a Bundler

When choosing your *bundler*, it all comes down to your project and which is the easiest for you to work with?

“you-can’t-go-wrong-with-us” (lots of configurations, but the end result it worth it!) bundler - Webpack [ACCEPTED]

"hackable" (lots of plugins and self wiring - DIY) Bundler - Rollup [REJECTED]

"plug and play" (automatically install tools at your disposal) Bundler - Parcel [ACCEPTED]

    -> Webpack (option 1)
    -> Parcel (option 2)

- [ ] Choose a Package Manager
    -> NPM


# Web Development Setup

* Follow a commit message convention -> Angular

## Watch Mode

### Saftey Net

- Configure ESLint
    - via Webpack

- Configure code formatter e.g. Prettier

## Development Mode

- If using CSS Preprocessor e.g. SASS

- If targeting older browser
    - use JavaScript transpiler -> Babel
    - use `.browserlistrc`

### Testing

- Unit Testing
- Integration Testing
- End to End (E2E)

## Production Mode

- If maintained, consider
    - Google Analytics
    -

### Optimization and Performance

- Lazy Load
- Asynchronous import
- placeholders

- If loading time is too long, consider
    - loading animation

- Garbage Collection Testing


### Further Testing

- Google Lighhouse


# Web Development Process

* Prerequisite
    - Consider Design Patterns
    - Unit Test regularly

1. Static site
    - generate a site in what it might look like if it's working
2. Add actions
