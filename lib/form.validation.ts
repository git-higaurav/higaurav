import { z } from 'zod';

 const contactFormValidation = z.object({
  name: z.string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(50, { message: 'Name must not exceed 50 characters' })
    .trim()
    .nonempty({ message: 'Name is required' }),
  email: z.string()
    .email({ message: 'Please enter a valid email address' })
    .trim()
    .nonempty({ message: 'Email is required' })
    .toLowerCase(),
  message: z.string()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(1000, { message: 'Message must not exceed 1000 characters' })
    .trim()
    .nonempty({ message: 'Message is required' })
});

export default contactFormValidation