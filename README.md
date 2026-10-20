# Runway

A private budget and expense tracker in rupees. Live at **https://akreus29.github.io/runway/**

- **Safe to spend per day**: how much you can spend each day for the rest of the month and still finish on plan. Fixed bills (rent, EMIs, recharges) are set aside first.
- **Bank statement import** (PDF, Excel or CSV from Axis, HDFC, SBI, ICICI, Kotak and others; password-protected PDFs too). Statements are read on the device and never uploaded. Upload a statement as often as you like, even overlapping ones: Runway adds only the rows it hasn't seen, and links payments you already typed in by hand instead of doubling them.
- **Automatic categories** for Indian merchants and UPI narrations, then a review step: check only the payments that didn't match, or every new row. Pick a category once and every payment to that shop or person follows, now and in future imports.
- **Rent detection**: enter your landlord's name once and every payment to them is filed as rent. Transfers between your own accounts and failed payments the bank refunded are left out automatically.
- **Last 3 months** side by side, with regular payments (rent, EMIs, subscriptions) and whether this month's has gone out yet.
- **Last-month review, Year view and a year-end Wrapped** you can save as an image.

## Works offline, keeps your data

There are no accounts and no server. After the first visit the whole app, including fonts and Excel support, works with no connection.

Your data lives in an on-device database (IndexedDB) with a second copy in browser storage. To make sure you never lose it:

- **Back up now** (Budget tab) saves one database file. On iPhone it opens the share sheet: choose *Save to Files → iCloud Drive*.
- **Auto-backup file** (Chrome or Edge on a laptop): pick a file once and Runway rewrites it after every change.
- **Import database file** merges a backup from your other device (keeps both) or replaces what's there.

## Install on iPhone

Open the link in Safari, tap **Share → Add to Home Screen**. It opens full-screen like an app and works offline. Adding it to the Home Screen also stops Safari from clearing your data after a few weeks of not visiting.

## Development

A static site with no build step: `index.html`, a service worker (`sw.js`), local fonts in `fonts/`, and SheetJS and pdf.js in `vendor/` for reading Excel and PDF statements. Serve the folder with any static server to run it locally. Bump `CACHE` in `sw.js` when you change files so installed copies update.
