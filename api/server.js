import dotenv from "dotenv";
import app from "../src/app.js";
import connectDB from "../src/config/db.js";
import tripRoutes from "../src/routes/tripRoutes.js";
import authRoutes from "../src/routes/authRoutes.js";
import hotelBookingRoutes from "../src/routes/hotelBookingRoutes.js";
import activityRoutes from "../src/routes/activityRoutes.js";
import categoryRoutes from "../src/routes/categoryRoutes.js";
import restaurantRoutes from "../src/routes/restaurantRoutes.js";
import gastronomyRoutes from "../src/routes/gastronomyRoutes.js";
import boatingRoutes from "../src/routes/boatingRoutes.js";
import tourRoutes from "../src/routes/tourRoutes.js";
import searchRoutes from '../src/routes/searchRoutes.js'


dotenv.config();

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/hotels", hotelBookingRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/gastronomy", gastronomyRoutes);
app.use("/api/boats", boatingRoutes);
app.use("/api/tours", tourRoutes);
app.use("/api/search", searchRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
