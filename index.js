// Four Steps to use redux
// 1. State
// 2. Action Type
// 3. Create Reducer (Pure Function)
// 4. Store (subscribe, getState(), dispatch)

const { createStore } = require("redux");

// Type Declaration
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const initialCounterState ={
    count: 0
}

const incrementCounterAction=()=>{
    return{
    type: INCREMENT,
    // payload:
    };
}
const decrementCounterAction=(value)=>{
    return{
    type: DECREMENT,
    payload: value,
    };
    
}


//  Reducer
const counterReducer=(state=initialCounterState,action)=>{
switch (action.type) {
    case INCREMENT:    
    return{
        ...state,
        count: state.count + 1,
    }

    case DECREMENT:
    return{
        ...state,
        count: state.count - action.payload,
    }

    default:
        state;
}
}

// Store
const store = createStore(counterReducer);
store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(decrementCounterAction(2));


