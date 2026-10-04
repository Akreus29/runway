# Runway

A private budget and expense tracker in rupees. Live at **https://akreus29.github.io/runway/**

- **Safe to spend per day**: how much you can spend each day for the rest of the month and still finish on plan. Fixed bills (rent, EMIs, recharges) are set aside first.
- **Automatic categories** for Indian merchants and UPI narrations (Swiggy, Blinkit, Rapido, BESCOM, Groww and more). It learns from every category you pick.
- **Bank statement import** from CSV (HDFC, SBI, ICICI, Axis and others: withdrawal/deposit columns, day-first dates).
- **Last-month review, Year view and a year-end Wrapped** you can save as an image.

## Your data stays on your device

There are no accounts and no server. Everything is stored in your browser on the device you use. Anyone you share the link with gets their own empty budget. To move your data to another device, use **Budget → Download backup**, then **Restore from backup** on the other device.

## Install on iPhone

Open the link in Safari, tap **Share → Add to Home Screen**. It opens full-screen like an app and works offline. Adding it to the Home Screen also stops Safari from clearing your data after a few weeks of not visiting.

## Development

It's a single static page (`index.html`) with a small service worker (`sw.js`). No build step. Open `index.html` through any static server to run it locally.
