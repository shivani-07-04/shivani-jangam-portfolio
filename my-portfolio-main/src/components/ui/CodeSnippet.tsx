import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CodeSnippet as CodeSnippetType } from '../../types';
import { Copy, Check } from 'lucide-react';

interface CodeSnippetProps {
  snippet?: CodeSnippetType; // made optional so we can fallback to your details
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ snippet }) => {
  const [copied, setCopied] = useState(false);

  // fallback: Shivani's details
  const defaultSnippet: CodeSnippetType = {
    title: "About Shivani Jangam",
    language: "typescript",
    code: `const developer = {
  name: "Shivani Jangam",
  role: "Aspiring Python Developer | AI/ML Enthusiast | Web Developer",
  portfolio: "https://shivani-07-04.github.io",
  github: "https://github.com/shivani-07-04",
  skills: ["Python", "AI", "ML", "React", "Flask", "Node.js"]
};

console.log("🚀 Let's build something amazing together!", developer);`
  };

  const finalSnippet = snippet || defaultSnippet;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(finalSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <div className="bg-gray-800 px-4 py-2 flex justify-between items-center">
        <span className="text-white text-sm font-medium">
          {finalSnippet.title} • <span className="text-blue-400">Shivani Jangam</span>
        </span>
        <button
          onClick={copyToClipboard}
          className="text-gray-300 hover:text-white transition"
          aria-label="Copy code"
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </button>
      </div>
      <SyntaxHighlighter
        language={finalSnippet.language}
        style={vs2015}
        customStyle={{
          margin: 0,
          padding: '1rem',
          fontSize: '0.875rem',
          lineHeight: 1.6,
          maxHeight: '300px',
          overflowY: 'auto',
        }}
      >
        {finalSnippet.code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
