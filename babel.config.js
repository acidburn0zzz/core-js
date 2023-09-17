'use strict';
module.exports = {
  // use transforms which does not use ES5+ builtins
  plugins: [
    ['@babel/transform-member-expression-literals'],
    ['@babel/transform-property-literals'],
    ['@babel/transform-arrow-functions'],
    ['@babel/transform-block-scoped-functions'],
    ['@babel/transform-block-scoping'],
    // it seems `setClassMethods` unlike `loose` does not work
    ['@babel/transform-classes', { loose: true }],
    // private instance props in IE8- only with polyfills
    ['@babel/transform-class-properties'],
    ['@babel/transform-class-static-block'],
    ['@babel/transform-computed-properties'],
    ['@babel/transform-destructuring'],
    ['@babel/transform-exponentiation-operator'],
    ['@babel/transform-for-of'],
    ['@babel/transform-literals'],
    ['@babel/transform-logical-assignment-operators'],
    ['@babel/transform-new-target'],
    ['@babel/transform-nullish-coalescing-operator'],
    ['@babel/transform-numeric-separator'],
    ['@babel/transform-object-rest-spread'],
    ['@babel/transform-object-super'],
    ['@babel/transform-optional-catch-binding'],
    ['@babel/transform-optional-chaining'],
    ['@babel/transform-parameters'],
    ['@babel/transform-private-methods'],
    ['@babel/transform-private-property-in-object'],
    ['@babel/transform-reserved-words'],
    ['@babel/transform-shorthand-properties'],
    ['@babel/transform-spread'],
    ['@babel/transform-template-literals'],
    ['@babel/transform-unicode-regex'],
    // use it instead of webpack es modules for support engines without descriptors
    ['@babel/transform-modules-commonjs'],
  ],
  assumptions: {
    constantReexports: true,
    constantSuper: true,
    enumerableModuleMeta: true,
    iterableIsArray: true,
    mutableTemplateObject: false,
    noClassCalls: true,
    noDocumentAll: true,
    noIncompleteNsImportDetection: true,
    noNewArrows: true,
    objectRestNoSymbols: true,
    privateFieldsAsProperties: true,
    setClassMethods: true,
    setComputedProperties: true,
    setPublicClassFields: true,
    setSpreadProperties: true,
    skipForOfIteratorClosing: true,
    superIsCallableConstructor: true,
  },
};
