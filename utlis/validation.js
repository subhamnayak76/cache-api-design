// utils/validation.js
const { z } = require('zod');

const keyValueSchema = z.object({
  key: z.string().min(1),
  value: z.string().min(1),
});

const keySchema = z.object({
  key: z.string().min(1),
});

module.exports = {
  keyValueSchema,
  keySchema,
};
