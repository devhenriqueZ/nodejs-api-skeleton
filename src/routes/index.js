import express from "express";
import books from "./BooksRoutes.js";
import authors from "./AuthorsRoutes.js";
import healthChecks from "./HealthCheckRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("NodeJS API Skeleton"));

  app.use(express.json(), books, authors, healthChecks);
};

export default routes;