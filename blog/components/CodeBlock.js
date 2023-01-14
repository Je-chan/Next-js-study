import SyntaxHighlighter from "react-syntax-highlighter";

const CopyButton = ({ target }) => {
  const handleCopy = async () => {
    if (target) {
      try {
        await navigator.clipboard.writeText(target);
        alert("copied");
      } catch (err) {
        alert(`copy failed ${err}`);
      }
      alert("copied");
    }
  };
  return (
    <button
      className="absolute right-0.5 top-0.5 rounded-lg px-2 bg-white dark:text-gray-800"
      onClick={handleCopy}
    >
      copy
    </button>
  );
};

export default function CodeBlock({ children }) {
  return (
    <div className="relative">
      <CopyButton target={children} />
      <SyntaxHighlighter showLineNumbers>{children}</SyntaxHighlighter>
    </div>
  );
}
