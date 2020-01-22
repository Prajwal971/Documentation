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