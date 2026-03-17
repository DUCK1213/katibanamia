# Katiba Na Mia Contribution Tracker

This is a contribution tracking system for Katiba Na Mia that integrates with M-Pesa API to allow supporters to make secure contributions to the cause.

## Features

- Track contributions in real-time
- Secure M-Pesa integration (Sandbox mode for testing)
- Responsive UI built with Next.js and shadcn/ui
- Summary statistics (total raised, contributor count, pending payments)
- Transaction history with status tracking
- Toast notifications for user feedback

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in the root directory with the following M-Pesa credentials:

```
# M-Pesa API Credentials (Sandbox)
MPESA_CONSUMER_KEY=your_consumer_key_here
MPESA_CONSUMER_SECRET=your_consumer_secret_here
MPESA_SHORTCODE=your_shortcode_here
MPESA_PASSKEY=your_passkey_here
MPESA_CALLBACK_URL=https://yourdomain.com/api/contributions
```

### 2. Getting M-Pesa Credentials

To obtain M-Pesa API credentials for testing:

1. Register for a developer account at [Safaricom Developer Portal](https://developer.safaricom.co.ke/)
2. Create an application to get your consumer key and secret
3. Obtain a test shortcode and passcode from the M-Pesa API documentation
4. Set up your callback URL to handle M-Pesa notifications

### 3. How It Works

#### Frontend (`src/app/contributions/page.tsx`)
- Provides a user-friendly form for making contributions
- Displays real-time statistics and contribution history
- Uses React hooks for state management
- Shows toast notifications for user feedback

#### Backend (`src/app/api/contributions/route.ts`)
- Handles GET requests to retrieve all contributions
- Handles POST requests to initiate new contributions
- Handles PUT requests to update contribution status (for M-Pesa callbacks)
- Includes M-Pesa API integration functions
- Uses in-memory storage with localStorage persistence (for demo)

### 4. M-Pesa Integration Details

The implementation includes functions for:
- Getting M-Pesa access token using OAuth
- Registering C2B URLs for confirmation and validation
- Initiating STK Push payments to customers' phones

**Note**: The current implementation uses simulated M-Pesa responses for demonstration. To use actual M-Pesa API:
1. Uncomment the M-Pesa API calls in the `POST` handler
2. Comment out the simulated completion logic
3. Ensure your callback URL is publicly accessible

### 5. Security Considerations

- All API keys are stored in environment variables (never commit `.env.local`)
- Phone numbers are validated and formatted correctly
- Amount validation prevents negative or zero values
- In production, replace in-memory storage with a proper database

### 6. Customization

To customize for your organization:
1. Update the UI text in `src/app/contributions/page.tsx`
2. Modify the contribution model if you need additional fields
3. Adjust the M-Pesa callback handling in the PUT endpoint
4. Change the currency formatting if not using KES

### 7. Deployment

This component is designed to work with:
- Next.js 13+ (App Router)
- Vercel (for easy deployment)
- Any Node.js hosting platform

To deploy:
1. Push your code to a Git repository
2. Connect to Vercel or your preferred hosting provider
3. Set the environment variables in your hosting platform's dashboard
4. Deploy!

### 8. Future Enhancements

- Replace in-memory storage with a proper database (PostgreSQL, MongoDB, etc.)
- Add email/SMS notifications for contributors
- Implement recurring contribution options
- Add export functionality for contribution reports
- Integrate with analytics platforms
- Add multi-currency support

## Support

For questions or issues, please refer to the M-Pesa API documentation or contact the development team.

---

*Built with ❤️ for Katiba Na Mia - Educating Kenyans about their constitution*