import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Offerte (quote request) schema
export const offerteRequests = pgTable("offerte_requests", {
  id: varchar("id", { length: 36 }).primaryKey(),
  naam: text("naam").notNull(),
  telefoon: text("telefoon").notNull(),
  email: text("email").notNull(),
  stad: text("stad").notNull(),
  bericht: text("bericht").notNull(),
  privacyAkkoord: text("privacy_akkoord").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertOfferteSchema = createInsertSchema(offerteRequests).omit({
  id: true,
  createdAt: true,
  privacyAkkoord: true,
}).extend({
  naam: z.string().min(2, "Naam is verplicht"),
  telefoon: z.string().min(10, "Geldig telefoonnummer is verplicht"),
  email: z.string().email("Geldig e-mailadres is verplicht"),
  stad: z.string().min(1, "Selecteer een stad"),
  bericht: z.string().min(10, "Bericht moet minimaal 10 karakters bevatten"),
});

export type InsertOfferte = z.infer<typeof insertOfferteSchema>;
export type Offerte = typeof offerteRequests.$inferSelect;

// Contact form schema
export const contactRequests = pgTable("contact_requests", {
  id: varchar("id", { length: 36 }).primaryKey(),
  naam: text("naam").notNull(),
  email: text("email").notNull(),
  bericht: text("bericht").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactSchema = createInsertSchema(contactRequests).omit({
  id: true,
  createdAt: true,
}).extend({
  naam: z.string().min(2, "Naam is verplicht"),
  email: z.string().email("Geldig e-mailadres is verplicht"),
  bericht: z.string().min(10, "Bericht moet minimaal 10 karakters bevatten"),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contactRequests.$inferSelect;

// City data type
export interface CityData {
  slug: string;
  name: string;
  displayName: string;
}

export const cities: CityData[] = [
  { slug: "amsterdam", name: "Amsterdam", displayName: "Loodgieter Amsterdam" },
  { slug: "rotterdam", name: "Rotterdam", displayName: "Loodgieter Rotterdam" },
  { slug: "leiden", name: "Leiden", displayName: "Loodgieter Leiden" },
  { slug: "zoetermeer", name: "Zoetermeer", displayName: "Loodgieter Zoetermeer" },
];

// Users table (keeping for compatibility)
export const users = pgTable("users", {
  id: varchar("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
