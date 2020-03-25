import { Router } from "express";

import OngController from "./controllers/ONGController";
import IncidentController from "./controllers/IncidentController";
import ProfileController from "./controllers/ProfileController";
import SessionController from "./controllers/SessionController";

const router = Router();

router.get("/ongs", OngController.index);
router.post("/ongs", OngController.store);

router.post("/session", SessionController.create);

router.get("/profile", ProfileController.index);

router.get("/incidents", IncidentController.index);
router.post("/incidents", IncidentController.store);
router.delete("/incidents/:id", IncidentController.remove);

export default router;
