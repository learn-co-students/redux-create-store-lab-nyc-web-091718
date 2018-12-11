export default function createStore(reducer) {
  // add your code here
  let state;

  function dispatch(action) {
    state = reducer(state, action)
    render()
  }

  function getState() {
    return state
  }

  dispatch({type: '@@INIT'})

  return {
    dispatch,
    getState
  }
}

function render() {
  const container = document.getElementById('container');
}

let mainDiv = document.getElementById('mocha')

function renderButtons() {
main.innerHTML = `
<button></button>
`}

renderButtons()

let store = createStore(changeCount) // createStore takes the changeCount reducer as an argument
store.dispatch({ type: '@@INIT' });
let button = document.getElementById('button');



button.addEventListener('click', function() {
  store.dispatch({ type: 'INCREASE_COUNT' });
});
