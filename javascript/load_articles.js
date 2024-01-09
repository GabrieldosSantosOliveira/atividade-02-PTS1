const REQUEST_URL = "https://www.luizpicolo.com.br/api.json";

/**
 *
 * @param {ArticleModel} article
 */
const presenterArticle = (article) => {
  return `
  <a href=${article.url}>
    <div class="article">
      <img loading="lazy" class="article_image" src=${article.urlToImage} />
      <div class="article_content">
        <h2 class="article_heading">${article.title}</h2>
        <div class="wrapper_article_details">
          <div class="article_details"> Publicado em: ${dateFormat(
            article.publishedAt,
          )}</div> 
          <div class="article_details">${article.author}</div> 
        </div>
        <div class="article_text">${article.description}</div>  
        <div class="article_text">${article.content}</div>  
      </div>
    </div>
  </a>
  `;
};
const loadNews = async () => {
  const request = await fetch(REQUEST_URL);
  const data = await request.json();

  data.articles.forEach((article) => {
    const articleModel = new ArticleModel(article);
    const pagina = document.getElementById("container");

    pagina.insertAdjacentHTML("afterbegin", presenterArticle(articleModel));
  });
};
window.addEventListener("load", () => {
  loadNews();
});
