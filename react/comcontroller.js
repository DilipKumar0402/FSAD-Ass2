// FILE: controllers/complaintController.js

const Complaint = require("../models/Complaint");
const classifyComplaint = require("../utils/classifyComplaint");

// Create Complaint
exports.createComplaint = async (req, res) => {
  try {
    const { title, description } = req.body;

    // AI Classification
    const aiResult = classifyComplaint(
      `${title} ${description}`
    );

    const complaint = await Complaint.create({
      ...req.body,
      category: aiResult.category,
      urgency: aiResult.urgency,
      createdBy: req.user.id,
    });

    res.status(201).json({
      message: "Complaint created successfully",
      complaint,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};