import { extract } from '@extractus/article-extractor';

export async function scrapeBlogText(url: string): Promise<string> {
  try {
    const article = await extract(url);
    if (article?.content) {
      return article.content;
    } else {
      return 'No content found on the provided blog URL.';
    }
  } catch (error) {
    console.error('Error scraping blog:', error);
    return 'Failed to fetch blog content.';
  }
}