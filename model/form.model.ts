import mongoose from 'mongoose';

interface ContactForm {
    name: string;
    email: string;
    message: string;
}

const contactFormSchema = new mongoose.Schema<ContactForm>({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    message: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 1000,
        trim: true, 
    }
})

const ContactForm = mongoose.models.ContactForm || mongoose.model<ContactForm>('ContactForm', contactFormSchema, "messages");
export default ContactForm;