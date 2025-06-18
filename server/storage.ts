import { readings, type Reading, type InsertReading } from "@shared/schema";

export interface IStorage {
  getReading(id: number): Promise<Reading | undefined>;
  createReading(reading: InsertReading): Promise<Reading>;
  getAllReadings(): Promise<Reading[]>;
}

export class MemStorage implements IStorage {
  private readings: Map<number, Reading>;
  private currentId: number;

  constructor() {
    this.readings = new Map();
    this.currentId = 1;
  }

  async getReading(id: number): Promise<Reading | undefined> {
    return this.readings.get(id);
  }

  async createReading(insertReading: InsertReading): Promise<Reading> {
    const id = this.currentId++;
    const reading: Reading = { 
      ...insertReading, 
      id,
      createdAt: new Date()
    };
    this.readings.set(id, reading);
    return reading;
  }

  async getAllReadings(): Promise<Reading[]> {
    return Array.from(this.readings.values());
  }
}

export const storage = new MemStorage();
