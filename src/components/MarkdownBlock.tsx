import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function MarkdownBlock({
  children,
  dropcap = false,
}: {
  children: string;
  dropcap?: boolean;
}) {
  return (
    <div className="editorial-prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ children, ...props }) => (
            <a {...props} target="_blank" rel="noreferrer" className="editorial-link">
              {children}
            </a>
          ),
          p: ({ children, node }) => {
            // First paragraph optionally gets drop cap
            const isFirst =
              dropcap &&
              node?.position?.start.line ===
                ((node as unknown) as { position?: { start: { line: number } } })?.position?.start.line;
            return (
              <p
                className={`my-4 text-[16.5px] leading-[1.78] text-ink-soft font-han ${
                  isFirst ? "dropcap" : ""
                }`}
              >
                {children}
              </p>
            );
          },
          ul: ({ children }) => (
            <ul className="my-4 ml-6 list-disc marker:text-vermilion space-y-1.5 text-ink-soft font-han">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="my-4 ml-6 list-decimal marker:text-vermilion marker:font-mono space-y-1.5 text-ink-soft font-han">
              {children}
            </ol>
          ),
          strong: ({ children }) => <strong className="text-ink font-semibold">{children}</strong>,
          em: ({ children }) => <em className="italic text-ink-soft">{children}</em>,
          code: ({ children }) => (
            <code className="px-1 py-0.5 bg-paper-soft text-ink font-mono text-[13px] border border-rule-soft">
              {children}
            </code>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-5 pl-5 border-l-2 border-vermilion font-display italic text-ink-soft text-lg">
              {children}
            </blockquote>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
