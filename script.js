function clearCart() {
    cart = [];
    showCart();
}

function clearCartItemsInStorage() {
	localStorage.removeItem("cartItems");
}
function getCartItemsFromStorage() {
	var cartItemsJSON = localStorage.getItem("cartItems");
	return cartItemsJSON ? JSON.parse(cartItemsJSON) : [];
}

function showCart() {
    var cartItems = getCartItemsFromStorage();
    var total = 0;
    var cartItemsHTML = "";

    if (cartItems.length === 0) {
        cartItemsHTML = "<tr><td colspan='3'>Your cart is empty.</td></tr>";
    } else {
        cartItemsHTML = cartItems.map(function (item) {
            total += parseInt(item.price); // Parse the price as an integer
            return "<tr><td>" + item.name + "</td><td>₹" + item.price + "</td><td><button onclick='removeFromCart(\"" + item.name + "\")'>Remove</button></td></tr>";
        }).join("");

        cartItemsHTML += "<tr><td colspan='2'>Total:</td><td class='total-cell'>₹" + total + "</td></tr>";
    }

    document.getElementById("cartItems").innerHTML = cartItemsHTML;
}
/*
function showCart() {
	var cartItems = getCartItemsFromStorage();
	var total = 0;
	var cartItemsHTML = "";

	if (cartItems.length === 0) {
		cartItemsHTML = "<tr><td colspan='3'>Your cart is empty.</td></tr>";
	} else {
		cartItemsHTML = cartItems.map(function (item) {
			total += parseInt(item.price); // Parse the price as an integer
			return "<tr><td>" + item.name + "</td><td>₹" + item.price + "</td><td><button onclick='removeFromCart(\"" + item.name + "\")'>Remove</button></td></tr>";
		}).join("");

		cartItemsHTML += "<tr><td colspan='2'>Total:</td><td>₹" + total + "</td></tr>";
	}

	document.getElementById("cartItems").innerHTML = cartItemsHTML;
}*/

function removeFromCart(itemName) {
    var confirmation = confirm("Are you sure you want to remove '" + itemName + "' from the cart?");
    if (confirmation) {
        var cartItems = getCartItemsFromStorage();
        for (var i = 0; i < cartItems.length; i++) {
            if (cartItems[i].name === itemName) {
                cartItems.splice(i, 1);
                break;
            }
        }
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        showCart(); // Refresh the cart display
        // alert(itemName + " removed from cart!");
    }
}

// function clearCart() {
//     localStorage.removeItem("cartItems");
//     showCart(); // Refresh the cart display
//     alert("Cart cleared!");
// }

function clearCart() {
    var confirmation = confirm("Are you sure you want to clear the cart?");
    if (confirmation) {
        localStorage.removeItem("cartItems");
        showCart(); // Refresh the cart display
        alert("Cart cleared!");
    }
}


function getCartItemsFromStorage() {
	var cartItemsJSON = localStorage.getItem("cartItems");
	return cartItemsJSON ? JSON.parse(cartItemsJSON) : [];
}

function addToCart(itemName, itemPrice) {
	var cartItems = getCartItemsFromStorage();
	var item = { name: itemName, price: itemPrice };
	cartItems.push(item);
	localStorage.setItem("cartItems", JSON.stringify(cartItems));
	alert(itemName + " added to cart!");
}

function clearCartItemsInStorage() {
	localStorage.removeItem("cartItems");
}

// function removeFromCart(itemName) {
// 	var cartItems = getCartItemsFromStorage();
// 	for (var i = 0; i < cartItems.length; i++) {
// 		if (cartItems[i].name === itemName) {
// 			cartItems.splice(i, 1);
// 			break;
// 		}
// 	}
// 	localStorage.setItem("cartItems", JSON.stringify(cartItems));
// 	alert(itemName + " removed from cart!");
// 	showCart();
// }

function removeFromMenu(itemName) {
	var menuItems = getMenuItemsFromStorage();
	for (var i = 0; i < menuItems.length; i++) {
		if (menuItems[i].name === itemName) {
			menuItems.splice(i, 1);
			break;
		}
	}
	localStorage.setItem("menuItems", JSON.stringify(menuItems));
}

function getMenuItemsFromStorage() {
    var menuItemsJSON = localStorage.getItem("menuItems");
    return menuItemsJSON ? JSON.parse(menuItemsJSON) : [];
}

function confirmCheckout() {
    var confirmation = confirm("Are you sure you want to proceed to checkout?");
    if (confirmation) {
        // User clicked "OK" in the confirmation dialog, proceed to checkout
        return true; // Allow the link to be followed
    } else {
        // User clicked "Cancel" in the confirmation dialog, cancel the checkout
        return false; // Prevent the link from being followed
    }
}
