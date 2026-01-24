# EmailJS Setup Guide - Gmail Integration

## ✅ What's Already Configured

Your contact form is integrated with **EmailJS** and your Service ID is already set up:
- **Service ID**: `service_apdg6qs` ✅

## 🔑 What You Still Need

You need to get **2 more things** from EmailJS:
1. **Template ID**
2. **Public Key**

## 📝 Step-by-Step Setup

### Step 1: Sign in to EmailJS

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign in with the account you used to create `service_apdg6qs`

### Step 2: Verify Your Email Service

1. Go to **Email Services** in the left sidebar
2. You should see your service: `service_apdg6qs`
3. Make sure it's connected to your Gmail account (`shrestharonit786@gmail.com`)
4. If not connected, click **Connect Account** and sign in with Gmail

### Step 3: Create an Email Template

1. Go to **Email Templates** in the left sidebar
2. Click **Create New Template**
3. Configure your template:

#### Template Settings:

**Template Name**: `Contact Form Submission`

**Subject Line**:
```
New Contact from {{from_name}} - Fuseparks Website
```

**Email Body (Content)**:
```
Hello,

You have received a new message from your Fuseparks website contact form.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: {{from_name}}

Email: {{from_email}}

Company: {{company}}

Message:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply to this email to respond directly to {{from_name}}.

This email was sent from your Fuseparks website contact form.
```

**To Email**: `shrestharonit786@gmail.com` (your Gmail)

**From Name**: `Fuseparks Contact Form`

**Reply To**: `{{from_email}}` (so you can reply directly to the sender)

4. Click **Save**
5. **Copy your Template ID** (looks like `template_xxxxxxx`)

### Step 4: Get Your Public Key

1. Go to **Account** in the left sidebar
2. Click on the **General** tab
3. Find your **Public Key** (looks like a long string of random characters)
4. **Copy your Public Key**

### Step 5: Update Your Code

Open `src/sections/Contact.tsx` and update lines 34-42:

#### Find these lines:
```typescript
await emailjs.send(
  "service_apdg6qs", // Your EmailJS Service ID ✅ Already set!
  "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    company: formData.company,
    message: formData.message,
  },
  "YOUR_PUBLIC_KEY", // Replace with your EmailJS Public Key
);
```

#### Replace with your actual values:
```typescript
await emailjs.send(
  "service_apdg6qs", // ✅ Already configured!
  "template_abc1234", // Your actual Template ID from Step 3
  {
    from_name: formData.name,
    from_email: formData.email,
    company: formData.company,
    message: formData.message,
  },
  "your_actual_public_key_here", // Your actual Public Key from Step 4
);
```

### Step 6: Test Your Contact Form

1. Save the file after updating the Template ID and Public Key
2. Go to http://localhost:5173
3. Scroll to the Contact section
4. Fill out the form with test data:
   - Name: Test User
   - Email: test@example.com
   - Company: Test Company
   - Message: This is a test message
5. Click **Send Message**
6. You should see a green success message
7. Check your Gmail inbox (`shrestharonit786@gmail.com`)!

## ✨ Features Implemented

✅ **Service ID Configured** - `service_apdg6qs` is already set
✅ **Form State Management** - All fields controlled with React state
✅ **Form Validation** - Required fields (name, email, message)
✅ **Loading State** - Button shows "Sending..." while submitting
✅ **Success Message** - Green notification with checkmark icon
✅ **Error Handling** - Red notification if something goes wrong
✅ **Form Reset** - Form clears automatically after successful submission
✅ **Professional Styling** - Matches your brand color (#FFCE00)

## 📊 EmailJS Free Plan

- ✅ **200 emails/month** - Perfect for a contact form
- ✅ **Unlimited templates**
- ✅ **Multiple email services**
- ✅ **No credit card required**

If you need more emails, paid plans start at $7/month for 1,000 emails.

## 🔧 Troubleshooting

### Email not sending?
1. Check that Template ID and Public Key are correct
2. Make sure your Gmail is connected in EmailJS Email Services
3. Check the browser console (F12) for error messages
4. Verify your EmailJS account is active

### Emails going to spam?
1. Check your Gmail spam folder
2. Mark the email as "Not Spam"
3. In EmailJS, verify your email service

### "Failed to send email" error?
1. Double-check the Template ID (should start with `template_`)
2. Double-check the Public Key
3. Make sure the template variables match: `{{from_name}}`, `{{from_email}}`, `{{company}}`, `{{message}}`

## 📧 Email Template Variables

Make sure your EmailJS template uses these exact variable names:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{company}}` - Company name (optional)
- `{{message}}` - Message content

## 🎯 Quick Checklist

- [x] Service ID: `service_apdg6qs` ✅
- [ ] Template ID: Get from EmailJS Templates
- [ ] Public Key: Get from EmailJS Account settings
- [ ] Update `src/sections/Contact.tsx` with Template ID and Public Key
- [ ] Test the contact form
- [ ] Check Gmail inbox

## 📚 Resources

- [EmailJS Dashboard](https://dashboard.emailjs.com/)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Guide](https://www.emailjs.com/docs/examples/reactjs/)

## 🎉 You're Almost Done!

Just get your Template ID and Public Key from EmailJS, update the code, and your contact form will be fully functional! 🚀

