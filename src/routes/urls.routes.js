import { Router } from "express";
import { redirectRealUrl } from "../controllers/urls.controller.js";

const router = Router()

router.get('/:code', redirectRealUrl)

export default router