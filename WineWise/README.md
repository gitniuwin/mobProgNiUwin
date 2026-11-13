# WineWise — faithful HTML-to-Expo conversion

This build keeps the supplied `code(1).html` prototype as the actual app interface. The original screen layout, styling, text, placements, food cards, tasting flow, radar, match ranking, and feedback interactions are preserved inside a WebView on Android/iOS and an iframe on web. Platform-specific view files keep the browser build separate from the native WebView dependency.

## Included requirements
- App icon and Android adaptive icon using the prototype's gold wine-glass crest
- Native Expo splash screen configured in `app.json`
- Separate in-app loading screen while the prototype loads
- Login and sign-up gate before the original dashboard
- Original dashboard and original multi-screen workflow
- Central prototype state object with per-account local persistence for profile, tasting history, and estimated sample profiles
- React `useReducer` for the native/web loading lifecycle
- Original HTML source retained at `assets/winewise.html` and embedded in `winewisePrototype.ts`

## Run on Windows
1. Extract the ZIP and open the `WineWise` folder in VS Code.
2. Install packages:
   ```powershell
   npm.cmd install
   ```
3. Start Expo:
   ```powershell
   npx.cmd expo start -c
   ```
4. Browser preview:
   ```powershell
   npx.cmd expo start --web
   ```
5. Android: open Expo Go, keep phone and laptop on the same Wi-Fi, then scan the Expo QR code.

## Important notes
- Login/sign-up is a local classroom demo, not production authentication. Accounts and saved profile/history remain in this browser/app storage on the device. Do not use a real password.
- The scan interaction in the supplied HTML is a simulated demonstration; it does not use the camera or recognize real labels.
- Match scores are calculated by the original rule-based sample algorithm, not an AI service.
- This is an educational flavor-profile prototype, not a product-purchasing or consumption app.
- The native splash, in-app loading screen, and Expo wrapper are implemented; please run it in your local Expo environment to verify on your specific phone/browser.


## Latest update
- Sign-up now asks users to confirm their password.
- New accounts complete a palate questionnaire based on the original HTML model: preferred style (red/white/rosé), palate character (fruity, earthy/oaky, sweet, dry/crisp), and optional dining preferences. These answers initialize the user's taste profile.
- The WineWise crest in the app header returns to the home dashboard.
- The taste profile screen now includes a visible Log out button.
- The in-app loading screen stays visible for at least about 1.7 seconds after the prototype loads, so it is easier to notice.


## Version 3.2
- Sign-up now proceeds to a separate taste-profile onboarding page before the dashboard.
- Added educational preference questions for sweetness, body, flavor intensity, acidity, tannin texture, aroma notes, wine style, flavor character, and food-pairing interests.
- Added Account Settings with local-demo password change, taste-profile editing, confirmation before replacing preferences, and logout.
- Taste profile edits update the stored sensory profile used by the existing match calculation.
- Alcohol strength is intentionally not used as a preference; the questionnaire uses flavor/body intensity instead.


## Version 3.3
- **Greeting:** brand-new accounts see "Welcome, <name>"; returning users who log in again see "Welcome back, <name>".
- **Empty dashboard for new users:** the "Latest Cellar Tasting" card and the "Recent Cellar Tastings" list are hidden until the user logs their first tasting (the old sample tastings are no longer seeded into new accounts, and are cleared from older demo accounts).
- **All the wines:** new button on the dashboard opens a cellar library with every wine in the catalog (28 now, 20 newly added). Each card shows type, brand, region, grape, tasting notes, six sensory bars, food pairings, serving temperature, style summary and a personal match %. Includes search, Red/White/Rosé filters, Best-match / A–Z sorting, and an "Evaluate this wine" shortcut into the tasting flow.
- **Taste profile redesign:** palate archetype hero card with top traits, larger radar with value labels, a sensory breakdown (descriptor + score per dimension), a "What you told us" summary of onboarding answers, and "Cellar picks for you" (top library matches). Account settings are unchanged below.
