// ============================================
// FILE: routes/complaintRoutes.js
// ============================================

const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createComplaint,
  getComplaints,
  getComplaintById,
  updateComplaint,
  deleteComplaint,
} = require("../controllers/complaintController");

router.post("/", authMiddleware, createComplaint);

router.get("/", authMiddleware, getComplaints);

router.get("/:id", authMiddleware, getComplaintById);

router.put("/:id", authMiddleware, updateComplaint);

router.delete("/:id", authMiddleware, deleteComplaint);

module.exports = router;