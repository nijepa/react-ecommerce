const INITIAL_STATE = {
    sections: [
        {
            title: 'headphones',
            imageUrl: 'https://i.ibb.co/0BYKp94/headphones.jpg',
            id: 1,
            linkUrl: 'shop/headphones'
        },
        {
            title: 'monitors',
            imageUrl: 'https://i.ibb.co/tmkXhBZ/monitors.jpg',
            id: 2,
            linkUrl: 'shop/monitors'
        },
        {
            title: 'inputs',
            imageUrl: 'https://i.ibb.co/fvnMb1z/keyboards.jpg',
            id: 3,
            linkUrl: 'shop/inputs'
        },
        {
            title: 'laptops',
            imageUrl: 'https://i.ibb.co/WD90mqv/laptops.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/laptops'
        },
        {
            title: 'pcs',
            imageUrl: 'https://i.ibb.co/5r42Cgn/pcs.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/pcs'
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;