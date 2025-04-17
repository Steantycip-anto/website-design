// Button Component
export const Button = ({ text, className }) => (
  <a href="#" className={`inline-block bg-red-600 text-white px-6 py-3 rounded font-bold hover:bg-red-700 transition-colors ${className}`}>
    {text}
  </a>
);