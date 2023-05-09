import { Schema, model, models } from "mongoose";

interface IProduct {
  name: string;
  slug: string;
  category: string;
  image: string;
  price: number;
  cantitate: number;
  review: {
    rating: number;
    comentariu: string;
    user: { _id: Schema.Types.ObjectId; name: string; image: string };
  };
  scorMedieReview: number;
  numReviews: number;
  countInStock: number;
  description: string;
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    cantitate: { type: Number, required: true },
    review: [
      {
        rating: { type: Number, required: true, default: 5 },
        comentariu: { type: String, required: false },
        user: {
          _id: { type: Schema.Types.ObjectId },
          name: {
            type: String,
            required: true,
          },
          image: {
            type: String,
            required: true,
            default:
              "https://res.cloudinary.com/dyfedllac/image/upload/v1665469559/rose-dimat/stiock_profile_o2p6fm.jpg",
          },
        },
      },
    ],
    scorMedieReview: { type: Number, required: true, default: 5 },
    numReviews: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const Product = models.Product || model("Product", productSchema);
export default Product;
