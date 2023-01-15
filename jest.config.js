module.exports = {
  // To let jest know about CSS / SCSS
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
};
