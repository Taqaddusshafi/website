import { submitToIndexNow } from './src/lib/indexnow';

const baseUrl = 'https://hidayahcompanion.pro';

const urls = [
  baseUrl,
  `${baseUrl}/#features`,
  `${baseUrl}/#download`,
];

console.log('Submitting URLs to IndexNow...');
submitToIndexNow(urls).then(() => {
    console.log('Done.');
});
