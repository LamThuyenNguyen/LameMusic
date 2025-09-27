import { Router } from "express";
import express from "express";


const router = Router();

router.get("/", (req, res) => {
  res.send("Listener route with GET method");
});

export default router;