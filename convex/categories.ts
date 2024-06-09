import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const create = mutation({
  args: { 
    name: v.string(),
    description: v.string()
  },

  handler: async (ctx, args) => {
    await ctx.db.insert("categories", {
      name: args.name,
      description: args.description
    });
  }
});

export const fetch = query({
  handler: async (ctx) => {
    return ctx.db.query("categories").collect();
  }
});