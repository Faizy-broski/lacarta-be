// import dotenv from "dotenv";
// import app from "../src/app.js";
// import connectDB from "../src/config/db.js";
// import tripRoutes from "../src/routes/tripRoutes.js";
// import authRoutes from "../src/routes/authRoutes.js";
// import hotelBookingRoutes from "../src/routes/hotelBookingRoutes.js";
// import activityRoutes from "../src/routes/activityRoutes.js";
// import categoryRoutes from "../src/routes/categoryRoutes.js";
// import restaurantRoutes from "../src/routes/restaurantRoutes.js";
// import gastronomyRoutes from "../src/routes/gastronomyRoutes.js";
// import boatingRoutes from "../src/routes/boatingRoutes.js";
// import tourRoutes from "../src/routes/tourRoutes.js";
// import searchRoutes from '../src/routes/searchRoutes.js'


// dotenv.config();

// connectDB();

// app.use("/api/auth", authRoutes);
// app.use("/api/trips", tripRoutes);
// app.use("/api/hotels", hotelBookingRoutes);
// app.use("/api/activities", activityRoutes);
// app.use("/api/categories", categoryRoutes);
// app.use("/api/restaurants", restaurantRoutes);
// app.use("/api/gastronomy", gastronomyRoutes);
// app.use("/api/boats", boatingRoutes);
// app.use("/api/tours", tourRoutes);
// app.use("/api/search", searchRoutes);


// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });





import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
// import mongoSanitize from "express-mongo-sanitize";
// import xss from "xss-clean";
import hpp from "hpp";
import app from "../src/app.js";
import connectDB from "../src/config/db.js";
import tripRoutes from "../src/routes/tripRoutes.js";
import authRoutes from "../src/routes/authRoutes.js";
import hotelBookingRoutes from "../src/routes/hotelBookingRoutes.js";
import activityRoutes from "../src/routes/activityRoutes.js";
import categoryRoutes from "../src/routes/categoryRoutes.js";
import nightLifeRoutes from "../src/routes/nightLifeRoutes.js";
import poolRoutes from "../src/routes/poolsRoutes.js";
import beachRoutes from "../src/routes/beachRoutes.js";
import partnerRoutes from "../src/routes/partnerRoutes.js";
import dashboardRoutes from "../src/routes/dashboardRoutes.js";
import dealRoutes from "../src/routes/dealRoutes.js";
import restaurantRoutes from "../src/routes/restaurantRoutes.js";
import gastronomyRoutes from "../src/routes/gastronomyRoutes.js";
import boatingRoutes from "../src/routes/boatingRoutes.js";
import tourRoutes from "../src/routes/tourRoutes.js";
import searchRoutes from '../src/routes/searchRoutes.js'




dotenv.config();

connectDB();

// Security
app.use(helmet());

// app.use(mongoSanitize());
// app.use(xss());
app.use(hpp());

// Rate limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use(limiter);

// global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || "Internal Server Error" });
});

app.use("/api/auth", authRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/hotels", hotelBookingRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/nightLifes", nightLifeRoutes);
app.use("/api/pools", poolRoutes);
app.use("/api/beaches", beachRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/deals", dealRoutes);
app.use("/api/partners", partnerRoutes);
app.use("/api/stats", dashboardRoutes);
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/gastronomy", gastronomyRoutes);
app.use("/api/boats", boatingRoutes);
app.use("/api/tours", tourRoutes);
app.use("/api/search", searchRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
