import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const readings = pgTable("readings", {
  id: serial("id").primaryKey(),
  birthDate: text("birth_date").notNull(),
  birthTime: text("birth_time").notNull(),
  gender: text("gender").notNull(),
  yearPillar: text("year_pillar").notNull(),
  monthPillar: text("month_pillar").notNull(),
  dayPillar: text("day_pillar").notNull(),
  hourPillar: text("hour_pillar").notNull(),
  personalityReading: text("personality_reading").notNull(),
  careerReading: text("career_reading").notNull(),
  loveReading: text("love_reading").notNull(),
  healthReading: text("health_reading").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertReadingSchema = createInsertSchema(readings).omit({
  id: true,
  createdAt: true,
});

export type InsertReading = z.infer<typeof insertReadingSchema>;
export type Reading = typeof readings.$inferSelect;
