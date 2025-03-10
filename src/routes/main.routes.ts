import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.render("home", { title: "Home", content: "Welcome to the Home Page!" });
});

router.get("/about", (req: Request, res: Response) => {
  res.render("about", {
    title: "About",
    content: "Welcome to the About Page!",
  });
});

router.get("/contact", (req: Request, res: Response) => {
  res.render("contact", {
    title: "Contact",
    content: "Welcome to the Contact Page!",
  });
});

export default router;
