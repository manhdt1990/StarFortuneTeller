import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertReadingSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create a reading
  app.post("/api/readings", async (req, res) => {
    try {
      const validatedData = insertReadingSchema.parse(req.body);
      const reading = await storage.createReading(validatedData);
      res.json(reading);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid input data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Get all readings
  app.get("/api/readings", async (req, res) => {
    try {
      const readings = await storage.getAllReadings();
      res.json(readings);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get a specific reading
  app.get("/api/readings/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid reading ID" });
      }
      
      const reading = await storage.getReading(id);
      if (!reading) {
        return res.status(404).json({ message: "Reading not found" });
      }
      
      res.json(reading);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
