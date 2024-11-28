import { Router } from "express";

const router: Router = Router();

router.get("/users", (req, res) => {
  res.send("todo OK");
});

export default router;
