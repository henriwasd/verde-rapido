import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const productRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        price: z.number(),
        description: z.string().optional(),
        imageUrl: z.string().optional(),
        amount: z.number().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.product.create({
        data: {
          name: input.name,
          price: input.price,
          description: input.description,
          image: input.imageUrl,
          createdAt: new Date(),
          updatedAt: new Date(),
          amount: input.amount,
        },
      });
    }),

  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().optional(),
        price: z.number().optional(),
        description: z.string().optional(),
        imageUrl: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.product.update({
        where: { id: input.id },
        data: {
          name: input.name,
          price: input.price,
          description: input.description,
          image: input.imageUrl,
          updatedAt: new Date(),
        },
      });
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.product.delete({
        where: { id: input.id },
      });
    }),

  get: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.product.findUnique({
        where: { id: input.id },
      });
    }),

  list: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.product.findMany();
  }),
});
