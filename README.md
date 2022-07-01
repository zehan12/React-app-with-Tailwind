
# React-app-with-Tailwind

Tailwind is a massive collection of tiny CSS utility classes for quickly creating a website. It is a highly customized and low-level CSS framework and it will take a functional approach.



## Authors

- [@zehan12](https://www.github.com/zehan12)


## Steps for creating `react-tailwind-css-stater` with `yarn`

### Create a new react project with yarn

```sh
yarn create react-app react-app-with-tailwind
```

### Install Tailwind CSS with postcss & autoprefixer

```sh
yarn add -D tailwindcss postcss autoprefixer
```

### Generate `tailwind.config.js` and `postcss.config.js`

```sh
yarn tailwindcss init -p
```

### Modify `tailwind.config.js` file

```js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",'./public/index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Modify `tailwind.config.js` file

```js
    const tailwindcss = require('tailwindcss');
    module.exports = {
        plugins: [
            tailwindcss('./tailwind.js'),
            require('autoprefixer')
        ],
    };
```

### Add tailwind base, components and utilities to `index.css`

```css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

    
