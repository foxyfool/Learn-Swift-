import { apiConnector } from "../apiConnector";
import { cartEndpoints } from "../apis";

const { GET_CART_API } = cartEndpoints;

export async function getCart(token) {
  try {
    const response = await apiConnector("GET", GET_CART_API, null, {
      Authorization: `Bearer ${token}`,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw new Error("Could not fetch cart data");
  }
}
