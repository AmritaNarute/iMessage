import express from "express"
import {
    getConversationsForSidebar,
    getMessages,
    getUsersForSidebar,
    sendMessages,
} from "../controllers/message.controller";
import { protectRoute } from "../middleware/auth.middleware.js"
import { upload } from "../middleware/upload.middleware.js"

const router = express.Router();

router.use(protectRoute);

router.get("/users",  getUsersForSidebar);
router.get("/conversations", getConversationsForSidebar);
router.get("/:id",  getMessages);
router.post("/send/:id", upload.single("media") , sendMessages);

//todo: show this in the frontend

export default router;