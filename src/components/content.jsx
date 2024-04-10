import ReactMarkdown from 'react-markdown';
import remarkImages from 'remark-images';

const MarkdownContent = ({ content }) => {
  return (
    <ReactMarkdown
      components={{
        img: ({ alt, ...props }) => (
          <img
            {...props}
            style={{ width: '100%', maxWidth: '100%' }}
            alt={alt}
          />
        ),
      }}
      remarkPlugins={[remarkImages]}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownContent;
