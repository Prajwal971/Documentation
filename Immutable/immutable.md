Those variabes or arrays whose value cannot be changed is called immutable.After it has been created, it can never change.No string methods change the string they operate on, they all return new strings.

# __immutable array working__
There are several array functions like push,pop etc.. and all of them are mutable operation.Using them generally causes some side effects  and are difficult to track.So, its preffered to use them in an immutable way.

### __For Ex1__
const fruits = ['orange', 'apple', 'lemon'];
fruits.push('banana'); // = ['orange', 'apple', 'lemon', 'banana']

The above Ex1 uses mutable and banana is added to the top of the array _BUT_
Same Ex1 when written with immutable manner it will be like ,

#### const fruits = ['orange', 'apple', 'lemon'];
#### const newFruits = [...fruits, 'banana']; // = ['orange', 'apple', 'lemon', 'banana']
thus creating a new array and pushing the items.

# __immutable Object working__
JavaScript values whose state cannot be modified after its created.Numbers and strings are the example for immutable objects.
In immutable Object we have no way of changing the internal state of the data, so the reference always gets reassigned to a new object
### __Ex 2__
const state = {
  selected: 'apple',
  quantity: 13,
  fruits: ['orange', 'apple', 'lemon', 'banana']
};
const newState = {
  ...state,
  selected: 'orange',
  quantity: 5,
  origin: 'imported from Spain'
};
_where using the property called destructuring and REST(...state)Assignment is done_