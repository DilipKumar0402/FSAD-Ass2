// ============================================
// FILE: controllers/complaintController.js
// ============================================

const Complaint = require("../models/Complaint");

// Create Complaint
exports.createComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.create({
      ...req.body,
      createdBy: req.user.id,
    });

    res.status(201).json(complaint);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get All Complaints
exports.getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find()
      .populate("createdBy", "name email")
      .populate("assignedTo", "name email");

    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get Single Complaint
exports.getComplaintById = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({
        message: "Complaint not found",
      });
    }

    res.status(200).json(complaint);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update Complaint
exports.updateComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!complaint) {
      return res.status(404).json({
        message: "Complaint not found",
      });
    }

    res.status(200).json(complaint);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete Complaint
exports.deleteComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.findByIdAndDelete(req.params.id);

    if (!complaint) {
      return res.status(404).json({
        message: "Complaint not found",
      });
    }

    res.status(200).json({
      message: "Complaint deleted successfully",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};