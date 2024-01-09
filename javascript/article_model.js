class ArticleModel {
  /**
   * @param {Object} params
   * @param {string} params.title
   * @param {string} params.publishedAt
   * @param {string} params.author
   * @param {string} params.description
   * @param {string} params.urlToImage
   * @param {string} params.content
   * @param {string} params.url
   * @param {Object} params.source
   * @param {string} params.source.id
   * @param {string} params.source.name
   */
  constructor({
    title,
    publishedAt,
    author,
    description,
    urlToImage,
    content,
    url,
    source,
  }) {
    this.title = title;
    this.publishedAt = new Date(publishedAt);
    this.author = author;
    this.description = description;
    this.urlToImage = urlToImage;
    this.content = content;
    this.url = url;
    this.source = source;
  }
}
