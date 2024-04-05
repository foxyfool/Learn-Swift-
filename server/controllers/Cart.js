const Cart = require("../models/Cart");
const User = require("../models/User");

exports.getCartByUserId = async (userId) => {
  try {
    const user = await User.findById(userId).populate("cart");
    if (!user) {
      throw new Error("User not found");
    }

    // If the user has a cart, return it
    if (user.cart) {
      return user.cart;
    }

    // If the user doesn't have a cart, create a new cart and associate it with the user
    const newCart = await Cart.create({ user: userId });
    user.cart = newCart._id;
    await user.save();

    return newCart;
  } catch (error) {
    throw new Error(
      `Error retrieving cart for user ${userId}: ${error.message}`
    );
  }
};

exports.getUserCart = async (req, res) => {
  const userId = req.user.id; // Assuming req.user contains the authenticated user's data

  try {
    const cart = await exports.getCartByUserId(userId);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
