import { Schema, model, models } from "mongoose";

interface ICartItem {
  product?: Schema.Types.ObjectId;
  slug: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface ICart {
  user: Schema.Types.ObjectId;
  items: ICartItem[];
}

const cartItemSchema = new Schema<ICartItem>(
  {
    product: { type: Schema.Types.ObjectId, ref: "Product" },
    slug: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, min: 1 },
  },
  { _id: true },
);

const cartSchema = new Schema<ICart>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    items: [cartItemSchema],
  },
  { timestamps: true },
);

const Cart = models.Cart || model("Cart", cartSchema);

export default Cart;
