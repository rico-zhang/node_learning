const axios = require('axios');
const cheerio = require('cheerio');

async function getBooksHtml() {
  const res = await axios.get('https://book.douban.com/latest');
  return res.data
}

async function getBookLinks() {
  const html = await getBooksHtml();
  const $ = cheerio.load(html);
  const aDoms = $("#content .article .detail-frame h2 a");
  const links = aDoms.map((i, it) => {
    return $(it).attr('href');
  }).get();
  return links;
}

async function getBookDetail(detailUrl) {
  const res = await axios.get(detailUrl);
  const html = res.data;
  const $ = cheerio.load(html);
  const wrapper = $("#wrapper");
  const name = wrapper.find('h1 span').text();
  const imgSrc = wrapper.find('#mainpic img').attr('src');
  const spans = wrapper.find('#info span.pl');
  const author = spans
    .filter((i, it) => $(it).text().includes('作者'))
    .next('a')
    .text();
  const publishDate = spans
    .filter((i, it) => $(it).text().includes('出版年'))[0]
    .nextSibling.nodeValue.trim();
  return {
    name, imgSrc, author, publishDate
  }
}
async function fetchAll() {
  const links = await getBookLinks();
  const pros = links.map(getBookDetail);
  return Promise.all(pros);
}



async function main() {
 const books = await fetchAll();
 console.log(books);
}

main();