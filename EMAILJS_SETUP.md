# EmailJS Setup Guide

To enable email functionality in your contact form, you need to set up EmailJS. Follow these steps:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message from {{name}}

From: {{name}}
Email: {{email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID**

## 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (User ID)

## 5. Update Your Code
Replace the placeholder values in `src/components/Contact.jsx`:

```javascript
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID',     // Replace with your Service ID
  'YOUR_TEMPLATE_ID',    // Replace with your Template ID
  form.current,
  'YOUR_PUBLIC_KEY'      // Replace with your Public Key
);
```

## 6. Test Your Setup
1. Run your portfolio: `npm run dev`
2. Fill out the contact form
3. Check your email inbox for the message

## Template Variables
Make sure your EmailJS template uses these variable names:
- `{{name}}` - for the sender's name
- `{{email}}` - for the sender's email
- `{{message}}` - for the message content

## Troubleshooting
- Make sure your email service is properly connected
- Check that template variable names match exactly
- Verify your Service ID, Template ID, and Public Key are correct
- Check browser console for any error messages

## Free Tier Limits
EmailJS free tier includes:
- 200 emails per month
- 2 email services
- 2 email templates

This should be sufficient for a personal portfolio contact form.