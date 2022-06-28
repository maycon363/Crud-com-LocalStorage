async function apiNoticias(url) {
    const rssUrl = 'https://g1.globo.com/rss/g1/' + url
    const res = await fetch(`https://api.allorigins.win/get?url=${rssUrl}`);
    const { contents } = await res.json();

    const feed = new window.DOMParser().parseFromString(contents, "text/xml");
    const items = feed.querySelectorAll("item");

    const feedItems = [...items].map((el) => ({
        link: el.querySelector("link")?.innerHTML,
        title: el.querySelector("title")?.innerHTML,
    }));
    return feedItems;
}

export default apiNoticias