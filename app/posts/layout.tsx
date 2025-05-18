export default function PostLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="prose prose-invert max-w-none 
      prose-headings:tracking-tight 
      prose-p:leading-relaxed 
      prose-p:my-6
      prose-a:text-blue-400 
      hover:prose-a:text-blue-300
      prose-h2:mt-12
      prose-h2:mb-6
      prose-h3:mt-8
      prose-h3:mb-4
      prose-ul:my-6
      prose-ol:my-6
      prose-li:my-2
      prose-blockquote:my-6
      prose-pre:my-6
      prose-h1:text-4xl
      prose-h1:font-bold
      prose-h1:text-transparent
      prose-h1:bg-clip-text
      prose-h1:bg-gradient-to-r
      prose-h1:from-blue-400
      prose-h1:to-purple-600
      prose-h2:text-3xl
      prose-h2:font-bold
      prose-h2:text-white
      prose-h3:text-2xl
      prose-h3:font-semibold
      prose-h3:text-gray-200
      prose-h4:text-xl
      prose-h4:font-semibold
      prose-h4:text-gray-300
    ">
            {children}
        </div>
    );
} 