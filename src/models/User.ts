import { Schema, model, models } from "mongoose";

interface IUser {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  image: string;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    image: {
      type: String,
      required: true,
      default:
        "https://res.cloudinary.com/dyfedllac/image/upload/v1665469559/rose-dimat/stiock_profile_o2p6fm.jpg",
    },
  },
  {
    timestamps: true,
  },
);

const User = models.User || model("User", userSchema);
export default User;
