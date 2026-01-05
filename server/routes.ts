import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertOfferteSchema, insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Offerte form submission
  app.post("/api/offerte", async (req, res) => {
    try {
      const validatedData = insertOfferteSchema.parse(req.body);
      const offerte = await storage.createOfferte(validatedData);
      
      // Log the submission (email will be sent via integration when configured)
      console.log("Nieuwe offerte aanvraag ontvangen:", {
        naam: offerte.naam,
        email: offerte.email,
        telefoon: offerte.telefoon,
        stad: offerte.stad,
        bericht: offerte.bericht,
      });

      // If Resend is configured, send email
      if (process.env.RESEND_API_KEY) {
        try {
          const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: process.env.FROM_EMAIL,
              to: process.env.TO_EMAIL,
              subject: `Nieuwe Offerte Aanvraag - ${offerte.naam} (${offerte.stad})`,
              html: `
                <h2>Nieuwe Offerte Aanvraag</h2>
                <p><strong>Naam:</strong> ${offerte.naam}</p>
                <p><strong>E-mail:</strong> ${offerte.email}</p>
                <p><strong>Telefoon:</strong> ${offerte.telefoon}</p>
                <p><strong>Stad:</strong> ${offerte.stad}</p>
                <p><strong>Bericht:</strong></p>
                <p>${offerte.bericht}</p>
              `,
            }),
          });

          if (!response.ok) {
            console.error("Failed to send email via Resend:", await response.text());
          } else {
            console.log("Email sent successfully via Resend");
          }
        } catch (emailError) {
          console.error("Error sending email:", emailError);
        }
      }

      res.json({ success: true, id: offerte.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          errors: error.errors 
        });
      } else {
        console.error("Error processing offerte:", error);
        res.status(500).json({ 
          success: false, 
          message: "Er is een fout opgetreden" 
        });
      }
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // Log the submission
      console.log("Nieuw contactbericht ontvangen:", {
        naam: contact.naam,
        email: contact.email,
        bericht: contact.bericht,
      });

      // If Resend is configured, send email
      if (process.env.RESEND_API_KEY) {
        try {
          const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: process.env.FROM_EMAIL,
              to: process.env.TO_EMAIL,
              subject: `Nieuw Contactbericht - ${contact.naam}`,
              html: `
                <h2>Nieuw Contactbericht</h2>
                <p><strong>Naam:</strong> ${contact.naam}</p>
                <p><strong>E-mail:</strong> ${contact.email}</p>
                <p><strong>Bericht:</strong></p>
                <p>${contact.bericht}</p>
              `,
            }),
          });

          if (!response.ok) {
            console.error("Failed to send email via Resend:", await response.text());
          } else {
            console.log("Email sent successfully via Resend");
          }
        } catch (emailError) {
          console.error("Error sending email:", emailError);
        }
      }

      res.json({ success: true, id: contact.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          errors: error.errors 
        });
      } else {
        console.error("Error processing contact:", error);
        res.status(500).json({ 
          success: false, 
          message: "Er is een fout opgetreden" 
        });
      }
    }
  });

  return httpServer;
}
