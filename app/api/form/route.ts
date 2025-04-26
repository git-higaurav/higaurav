import connectDB from "@/lib/db"
import contactFormValidation from '@/lib/form.validation';
import ContactForm from "@/model/form.model"
import { ZodError } from "zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = contactFormValidation.parse(body);
    
    await connectDB();
    
    const newFormEntry = new ContactForm(validatedData);

    await newFormEntry.save();
    
    return new Response(JSON.stringify({
      success: true,
      message: 'Form submitted successfully'
    }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('Form submission error:', error);
    
    if (error instanceof ZodError) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Validation failed',
        errors: error?.errors
      }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }
    
    return new Response(JSON.stringify({
      success: false,
      message: error instanceof Error ? error.message : 'Internal server error'
    }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}