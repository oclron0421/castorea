# Castorea

Castorea is a Vite, React, and TypeScript website for a Singapore furnishing and interior styling studio.

## Local Development

```bash
npm install
npm run dev
```

## Checks

```bash
npm run lint
npm run build
```

## Form To Email

The consultation form posts to Web3Forms when `VITE_WEB3FORMS_ACCESS_KEY` is set. If the access key is empty, the site falls back to opening the visitor's email app with the form details prefilled.

To enable email submissions:

1. Go to Web3Forms and create an access key using `ongron251@gmail.com` while testing.
2. Verify the recipient email from the Web3Forms confirmation email.
3. Add the access key to your local `.env` file as `VITE_WEB3FORMS_ACCESS_KEY=your-access-key`.
4. Add the same environment variable in your hosting provider before deploying.
5. Restart the local dev server after changing `.env`, then test one submission.

The form uses Web3Forms' `_gotcha` honeypot field for basic spam protection. File uploads are intentionally disabled on the consultation form.

## Content To Update

Project photos can be added to the `projects` entries in `src/data/siteData.ts` by importing image files and assigning each item an `image` value.

Social, WhatsApp, and form links are also centralized in `src/data/siteData.ts` so they can be filled in when the final accounts and endpoint are ready.
