import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import artistRouter from "./routes/artist.route.js";
import adminRouter from "./routes/admin.routes.js";
import express from "express";
import songRouter from "./routes/song,routes.js";
import authRoutes from "./routes/auth.routes.js";
import { connectDB } from "./lib/database.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use("/api/users", userRouter)
app.use("/api/artists", artistRouter)
app.use("/api/admin", adminRouter)

app.use("/api/auth", authRoutes)
app.use("/api/songs", songRouter)
// app.use("/api/albums", albumRouter)
// app.use("/api/playlists", playlistRouter)
// app.use("/api/stats", statsRouter)

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
  connectDB();

});