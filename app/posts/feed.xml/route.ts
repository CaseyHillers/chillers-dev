import { getAllPostIds, getPostData } from '../../lib/posts';

export const dynamic = 'force-static';

export async function GET() {
  const siteUrl = 'https://chillers.dev';
  const allPostIds = getAllPostIds();
  
  // Fetch all post data
  const allPosts = await Promise.all(
    allPostIds.map(async (post: { id: string }) => {
      const id = post.id;
      const data = await getPostData(id);
      return {
        ...data,
        url: `${siteUrl}/posts/${id}`,
      };
    })
  );

  // Sort by date desc
  allPosts.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Chillers Dev</title>
    <link>${siteUrl}</link>
    <description>Personal blog and portfolio</description>
    <language>en</language>
    ${allPosts.map(post => `
    <item>
      <title>${post.title}</title>
      <link>${post.url}</link>
      <guid>${post.url}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${post.description || ''}</description>
    </item>
    `).join('')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
