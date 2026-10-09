import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {JSDOM} from 'jsdom';
const read=path=>readFileSync(new URL(path,import.meta.url),'utf8');
const html=read('../hire/index.html');
const catalog=JSON.parse(read('../public/vocal-services.json'));
test('booking page has valid contact paths, service options and no promised bookings',()=>{
 const doc=new JSDOM(html).window.document;
 assert.equal(doc.querySelector('#booking-form').getAttribute('action'),'https://formspree.io/f/xbdqlryk');
 assert.ok(doc.querySelector('[name="email"][required]'));
 assert.ok(doc.querySelector('[name="message"][required]'));
 assert.ok(doc.querySelector('#service-select [value=""]'));
 assert.ok(doc.querySelector('link[rel="canonical"]').href.endsWith('/hire/'));
 assert.match(doc.body.textContent,/No booking is confirmed/);
 assert.ok(doc.querySelector('a[href="mailto:ralskiesartist@gmail.com"]'));
 assert.ok(!html.includes('Lluisma'));
});
test('service catalog shares the official contact and only published examples',()=>{
 assert.equal(catalog.contact.email,'ralskiesartist@gmail.com');
 assert.equal(catalog.services.length,4);
 assert.ok(catalog.samples.every(x=>x.url.startsWith('https://')));
 assert.ok(!catalog.pricing.match(/guaranteed/i));
});
