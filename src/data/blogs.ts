export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export const allBlogs: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of Web Development in 2026',
    excerpt: 'Explore the emerging trends, from AI-assisted coding to new rendering paradigms that are reshaping the frontend landscape.',
    content: `
The web development ecosystem is evolving faster than ever. As we move deeper into 2026, several key trends have solidified their place in the modern developer's toolkit.

### AI-Assisted Development
AI is no longer just a buzzword; it's an integral part of how we write code. From intelligent code completion to automated refactoring, tools powered by large language models are significantly increasing developer productivity.

### New Rendering Paradigms
Server Components and Edge Rendering have fundamentally changed how we architect React applications. We're seeing a shift back to server-side processing, but with the interactive benefits of client-side apps.

### WebAssembly's Rise
WebAssembly (Wasm) continues to mature, allowing languages like Rust and Go to run in the browser at near-native speeds. This opens up new possibilities for computationally intensive web applications.

### Conclusion
Staying updated with these trends is crucial for any developer looking to remain competitive in the job market.
    `,
    author: 'Sarah Johnson',
    date: 'May 15, 2026',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Mastering System Design Interviews',
    excerpt: 'A comprehensive guide on how to approach and ace system design interviews at top tech companies.',
    content: `
System design interviews can be daunting, but with the right framework, they become a highly structured process of problem-solving and trade-off analysis.

### Step 1: Understand the Requirements
Always start by clarifying the functional and non-functional requirements. What exactly are we building, and what scale are we designing for?

### Step 2: High-Level Design
Sketch out the core components: databases, application servers, caches, and load balancers. Don't worry about the granular details yet.

### Step 3: Deep Dive
Zoom into the bottlenecks. How do you handle database scaling? When do you use a message queue? This is where you demonstrate your depth of knowledge.

### Common Pitfalls
* Not asking clarifying questions.
* Over-engineering the solution.
* Ignoring trade-offs.

By practicing mock interviews and studying common architectures, you can confidently tackle any system design problem.
    `,
    author: 'David Chen',
    date: 'May 10, 2026',
    category: 'Career',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80',
    readTime: '8 min read'
  },
  {
    id: 3,
    title: 'Why UI/UX Matters More Than Ever',
    excerpt: 'In a crowded digital space, user experience is the primary differentiator between successful and failed products.',
    content: `
Functionality is expected; experience is what sets you apart. Today's users have incredibly high standards for how digital products should look and feel.

### The Cost of Bad UX
A frustrating user interface leads directly to churn. Users will quickly abandon an app if they can't figure out how to use it within the first few minutes.

### Accessibility is Not Optional
Designing for accessibility ensures your product can be used by everyone. This isn't just an ethical imperative; it's a business necessity and, increasingly, a legal requirement.

### Micro-interactions
The little details matter. Subtle animations and feedback loops make an interface feel alive and responsive, significantly enhancing user satisfaction.

### Conclusion
Investing in UI/UX design is an investment in your product's success. It pays dividends in user retention and brand loyalty.
    `,
    author: 'Elena Rodriguez',
    date: 'May 02, 2026',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80',
    readTime: '6 min read'
  }
];
