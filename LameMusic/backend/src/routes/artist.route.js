import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Artist route is working");
});
export default router;