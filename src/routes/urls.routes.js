import { Router } from "express";
import { redirectRealUrl, saveUrl } from "../controllers/urls.controller.js";

const router = Router()

router.get('/:code', redirectRealUrl)

router.post('/save', saveUrl)

export default router