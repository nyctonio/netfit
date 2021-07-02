export const addItemToCart = (cartItmes, cartItemToAdd) => {
    const existingCartItem = cartItmes.find(cartItem => cartItem.id===cartItemToAdd.id);

    if(existingCartItem){
        console.log(true)
        return cartItmes.map(cartItem =>
            cartItem.id === cartItemToAdd.id 
            ? {...cartItem, quantity:cartItem.quantity+1}
            : cartItem 
        )
    }

    return [...cartItmes,{...cartItemToAdd,quantity:1}]
}