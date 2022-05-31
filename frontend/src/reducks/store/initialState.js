const initialState = {
    posts: {
        list: []
    },
    user: {
        user_name:'',
        email:'',
        token:'',
        token_expires:'',
    },
    items: {
        list:[]
    },
    carts: {
        list: [],
        subtotal:0,
    },
    order: {
        list:[],
        subtotal:0,
    },
};

export default initialState; 
