// Four Steps to use redux
// 1. State
// 2. Action Type
// 3. Create Reducer (Pure Function)
// 4. Store (subscribe, getState(), dispatch)
// 5. Create a rootReducer and combine all reducers by rootReducers. (At a time only one store can be create!)
// 6. Apply Middleware

const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

// Type Declaration
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";



const initialProductState ={
    products: ["Mango", "Banana"],
    totalProducts: 2
};


// Products Actions
const getProductsAction=()=>{
    return{
    type: GET_PRODUCTS,
    // payload:
    };
}
const addProductAction=(product)=>{
    return{
    type: ADD_PRODUCT,
    payload: product
    };
}





//  Reducer
const productReducer=(state=initialProductState,action)=>{
switch (action.type) {
    case GET_PRODUCTS:    
    return{
        ...state,
    };
    case ADD_PRODUCT:    
    return{
        products: [...state.products, action.payload],
        totalProducts: state.totalProducts + 1,
    };

    default:
        
          return  state;
        
}
}



// Store
const store = createStore(productReducer,applyMiddleware(logger));
store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(getProductsAction());
store.dispatch(addProductAction("Apple"));

// store.dispatch(getCartAction());
// store.dispatch(addCartAction("Pineapple"));


