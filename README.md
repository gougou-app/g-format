# format object keys

currently implemented:
- convert underscore key to camelCase key
- convert camelCase key to undercore key

## Usage

### Case 1

Convert data from orm to JavaScript naming convention

```js
const { getCamelCase, getUndersocre } = require('g-format');

let person_from_orm = {
  'id': 1,
  'my_name': 'siria',
  'my_real_name': 'dog',
};
let person = getCamelCase(person_from_orm);
```

### Case 2

Convert date from JavaScript naming convention to ORM

```js
let personOfJS = {
  'id': 1,
  'myName': 'siria',
  'myRealName': 'dog',
}
let personOfORM = getUndersocre(personOfJs);
someORM.insert('people', personOfORM);
```
