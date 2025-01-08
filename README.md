# BCIT Schedule Parser

### How to Use
1. Duplicate `.env.local` and rename to `.env`.
2. Replace the `START_DATE` and `END_DATE` values with your own program's start and end dates.
3. Open your BCIT schedule and copy the entire HTML using your browser devtools. 
![img.png](misc/img.png)
![img.png](misc/outer_html.png)
4. Replace the HTML in `src/template.ts` with your own schedule's HTML.
5. Run `npm run start` from your console
6. Open `schedule.ical` in the root folder
