import dotenv from "dotenv";
import app from "../src/app.js";
import connectDB from "../src/config/db.js";
import tripRoutes from "../src/routes/tripRoutes.js";
import authRoutes from "../src/routes/authRoutes.js";
import hotelBookingRoutes from "../src/routes/hotelBookingRoutes.js";
import activityRoutes from "../src/routes/activityRoutes.js";
import categoryRoutes from "../src/routes/categoryRoutes.js";
import restaurantRoutes from "./routes/restaurantRoutes.js";



dotenv.config();

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/hotels", hotelBookingRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/restaurants", restaurantRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
