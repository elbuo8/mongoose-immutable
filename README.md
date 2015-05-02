# Mongoose Immutable

Allow your schemas to have immutable properties!

### Install

```
npm install mongoose-immutable --save
```

### Example

```js
var testSchema = new Schema({
  testField: {type: String, immutable: true},
  testDefaultField: {type: String, default: 'test', immutable: true}
});
testSchema.plugin(immutablePlugin);

var Model = mongoose.model('Test', testSchema);
testModel = new Model({
  testField: 'test'
});
```

Now every attempt to change the value of those labeled `immutable` will be futile.

## Enjoy


