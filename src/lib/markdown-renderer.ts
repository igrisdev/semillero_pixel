import { remark } from 'remark'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeHighlight from 'rehype-highlight'

export async function renderMarkdown(markdown: string): Promise<string> {
  const processed = await remark()
    .use(remarkRehype)
    .use(rehypeHighlight) // Usa rehype-highlight en lugar de remark-highlight
    .use(rehypeStringify)
    .process(markdown)
  return processed.toString()
}
