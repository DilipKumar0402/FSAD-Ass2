// ============================================
// AI Complaint Classification Utility
// ============================================

// FILE: utils/classifyComplaint.js

const classifyComplaint = (text) => {
  const complaint = text.toLowerCase();

  // Plumbing Keywords
  const plumbingKeywords = [
    "water",
    "leak",
    "tap",
    "pipe",
    "bathroom",
    "flush",
    "drain",
    "sink",
    "toilet",
  ];

  // Electrical Keywords
  const electricalKeywords = [
    "light",
    "fan",
    "switch",
    "electric",
    "power",
    "socket",
    "bulb",
    "wiring",
    "ac",
  ];

  // Internet Keywords
  const internetKeywords = [
    "wifi",
    "internet",
    "network",
    "router",
    "connection",
    "signal",
    "slow internet",
  ];

  // Furniture Keywords
  const furnitureKeywords = [
    "chair",
    "table",
    "bed",
    "cupboard",
    "locker",
    "furniture",
    "desk",
    "mattress",
  ];

  // Cleaning Keywords
  const cleaningKeywords = [
    "clean",
    "garbage",
    "dust",
    "smell",
    "dirty",
    "waste",
    "sweep",
    "wash",
  ];

  // Category Matching Function
  const containsKeyword = (keywords) => {
    return keywords.some((keyword) =>
      complaint.includes(keyword)
    );
  };

  // Classification Logic
  if (containsKeyword(plumbingKeywords)) {
    return {
      category: "Plumbing",
      urgency: "High",
    };
  }

  if (containsKeyword(electricalKeywords)) {
    return {
      category: "Electrical",
      urgency: "High",
    };
  }

  if (containsKeyword(internetKeywords)) {
    return {
      category: "Internet",
      urgency: "Medium",
    };
  }

  if (containsKeyword(furnitureKeywords)) {
    return {
      category: "Furniture",
      urgency: "Low",
    };
  }

  if (containsKeyword(cleaningKeywords)) {
    return {
      category: "Cleaning",
      urgency: "Medium",
    };
  }

  // Default Category
  return {
    category: "General",
    urgency: "Low",
  };
};

module.exports = classifyComplaint;