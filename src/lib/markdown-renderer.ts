import { remark } from 'remark'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'

export async function renderMarkdown(markdown: string) {
  const processed = await remark()
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(markdown)
  return processed.toString()
}
