import { writeFile } from 'node:fs';
import { Buffer } from 'node:buffer';
require('dotenv').config({ path: [".env",".env.local"]})
import jsdom from "jsdom";
import { DateTime } from "luxon";
import ical, { ICalCalendarMethod, ICalEventRepeatingFreq } from "ical-generator";
import testTemplate from "./template";

const { JSDOM } = jsdom
global.DOMParser = new JSDOM().window.DOMParser;

const parser = new DOMParser();
const document = parser.parseFromString(testTemplate, "text/html");

const cal = ical();

// COMP 1113\nApplied Mathematics\nCRN 86122 Lab\n1030-1220\nDTC 682

const days = [
  document.querySelectorAll('.ddlabel:nth-child(1) > a'),
  document.querySelectorAll('.ddlabel:nth-child(2) > a'),
  document.querySelectorAll('.ddlabel:nth-child(3) > a'),
  document.querySelectorAll('.ddlabel:nth-child(4) > a'),
  document.querySelectorAll('.ddlabel:nth-child(5) > a'),
  document.querySelectorAll('.ddlabel:nth-child(6) > a'),
  document.querySelectorAll('.ddlabel:nth-child(7) > a'),
]

for (let i=0;i<days.length;i++) {
    const day = days[i];

    for (const link of day) {
        const [code, title, crn, period, location] = Array.from(link.childNodes)
          .filter(node => node.nodeType === node.TEXT_NODE)
          .map(node => node.textContent);
        const [startTimeRaw, endTimeRaw] = period?.split('-') ?? ['0000', '0000'];

        const startDate = DateTime.fromISO(process.env.START_DATE).plus({days: i});
        const endDate = DateTime.fromISO(process.env.END_DATE);

        const startTime = startDate
          .plus({
              hour: Number.parseInt(startTimeRaw.substring(0, 2)),
              minute: Number.parseInt(startTimeRaw.substring(2, 4))
          });
        const endTime = startDate
          .plus({
              hour: Number.parseInt(endTimeRaw.substring(0, 2)),
              minute: Number.parseInt(endTimeRaw.substring(2, 4))
          });

        const event = cal.createEvent({
            start: startTime,
            end: endTime,
            summary: code ?? "No Summary",
            description: title ?? 'No Title',
            repeating: {
                freq: "WEEKLY" as ICalEventRepeatingFreq,
                until: endDate
            },
            location,
        });
    }
}

const data = new Uint8Array(Buffer.from(cal.toString()));
writeFile('schedule.ics', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
