import { 
  type User, 
  type InsertUser,
  type Offerte,
  type InsertOfferte,
  type Contact,
  type InsertContact 
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createOfferte(offerte: InsertOfferte): Promise<Offerte>;
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private offertes: Map<string, Offerte>;
  private contacts: Map<string, Contact>;

  constructor() {
    this.users = new Map();
    this.offertes = new Map();
    this.contacts = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createOfferte(insertOfferte: InsertOfferte): Promise<Offerte> {
    const id = randomUUID();
    const offerte: Offerte = { 
      ...insertOfferte, 
      id,
      createdAt: new Date()
    };
    this.offertes.set(id, offerte);
    return offerte;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }
}

export const storage = new MemStorage();
