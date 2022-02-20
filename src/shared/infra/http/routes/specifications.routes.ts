/* eslint-disable import/no-unresolved */
import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

// Tudo que ficar abaixo do use(ensureAuthenticate) vai fazê-lo antes. O ideal é colocar isoladamente em cada // um que seja necessário.
// specificationsRoutes.use(ensureAuthenticated);
specificationsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createSpecificationController.handle
);

export { specificationsRoutes };
