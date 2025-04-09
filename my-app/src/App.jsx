import React from "react";
import anh from "../src/assets/Selection.png"

const videoRecipes = [
  {
    title: "Salad with cabbage and shrimp",
    time: "15 minutes",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
  },
  {
    title: "Salad of cow beans, shrimp and potatoes",
    time: "20 minutes",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
  },
  {
    title: "Sunny-side up fried egg",
    time: "15 minutes",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
  },
  {
    title: "Lotus delight salad",
    time: "22 minutes",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
  },
];

const editorPicks = [
  {
    title: "Stuffed sticky rice ball",
    time: "32 minutes",
    author: "Jennifer King",
    description: "Stuffed sticky rice balls: a delightful Asian treat with chewy, glutinous rice and flavorful surprise filling...",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
  },
  {
    title: "Strawberry smoothie",
    time: "40 minutes",
    author: "Matthew Martinez",
    description: "Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
  },
  {
    title: "Latte Art",
    time: "5 minutes",
    author: "Sarah Hill",
    description: "Latte art is the skillful craft of creating captivating designs on the surface of a latte...",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
  },
  {
    title: "Butter fried noodles",
    time: "28 minutes",
    author: "Julia Lopez",
    description: "Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
  },
];




export default function App() {
  return (
    <div className="font-sans">
      {/* Header */}
      {/* Header */}
<header className="flex justify-between items-center p-4 shadow bg-white sticky top-0 z-50">
  <div className="text-pink-500 font-bold text-2xl">Cheffify</div>

  <input
    type="text"
    placeholder="What would you like to cook?"
    className="border rounded px-3 py-1 w-1/3 text-sm focus:outline-none"
  />

  <nav className="hidden md:flex gap-4 text-sm text-gray-700">
    <a href="#" className="hover:text-pink-500">What to cook</a>
    <a href="#" className="hover:text-pink-500">Recipes</a>
    <a href="#" className="hover:text-pink-500">Ingredients</a>
    <a href="#" className="hover:text-pink-500">Occasions</a>
    <a href="#" className="hover:text-pink-500">About Us</a>
  </nav>

  <div className="space-x-3">
    <button className="text-pink-500 text-sm">Login</button>
    <button className="bg-pink-500 text-white px-4 py-1 rounded text-sm">Subscribe</button>
  </div>
</header>

{/* Hero Section */}
<section
  className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
  style={{
    backgroundImage: `url(${anh})`
  }}
  
>
  <div className="bg-white bg-opacity-90 p-6 rounded-md w-80 text-center shadow-lg border-2 border-pink-300 relative">
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-white px-3 py-1 text-xs font-semibold rounded">Recipe of the day</div>
    <h2 className="text-xl font-bold text-pink-600 mt-4">Salad Caprese</h2>
    <p className="text-sm text-gray-700 mt-2">
      Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil and balsamic vinegar create a refreshing dish for lunch or appetizer.
    </p>
    <div className="mt-4 text-sm text-gray-500">👨‍🍳 Salad Caprese</div>
    <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-full text-sm hover:bg-pink-600 transition">
      View now →
    </button>
  </div>
</section>


      {/* Recipe Section */}
      {/* Recipe Section */}
<section className="p-10">
  <h2 className="text-2xl font-bold text-center text-pink-600 mb-4">This Summer Recipes</h2>
  <p className="text-center text-gray-500 mb-6">We have all your Independence Day sweets covered.</p>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {videoRecipes.map((recipe, i) => (
      <div key={i} className="bg-white border rounded-xl overflow-hidden shadow-sm relative group hover:shadow-md transition">
        <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
        <div className="p-4 text-center">
          <h3 className="font-semibold text-sm mb-1">{recipe.title}</h3>
          <p className="text-xs text-pink-500">{recipe.time}</p>
        </div>
        <div className="absolute bottom-3 right-3">
          <div className="border-2 border-pink-500 rounded-full p-1 hover:bg-pink-100 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5v14l7-5 7 5V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" />
            </svg>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Recipes With Videos */}
      <section className="p-10">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-4">Recipes With Videos</h2>
        <p className="text-center text-gray-500 mb-6">Cooking Up Culinary Creations with Step-by-Step Videos</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {videoRecipes.map((recipe, i) => (
            <div key={i} className="bg-white border rounded-xl overflow-hidden shadow-sm relative group hover:shadow-md transition">
              <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-sm mb-1">{recipe.title}</h3>
                <p className="text-xs text-pink-500">{recipe.time}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editor's Pick */}
      <section className="p-10">
  <h2 className="text-2xl font-bold text-center text-pink-600 mb-4">Editor's pick</h2>
  <p className="text-center text-gray-500 mb-6">Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!</p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {editorPicks.map((pick, i) => (
      <div key={i} className="flex bg-white rounded-lg shadow-md overflow-hidden">
        <img src={pick.image} alt={pick.title} className="w-32 h-32 object-cover" />
        <div className="p-4 flex flex-col justify-between">
          <div>
            <div className="font-bold text-sm">{pick.title}</div>
            <div className="text-xs text-gray-400">{pick.time} · {pick.author}</div>
            <p className="text-sm mt-2 text-gray-600">{pick.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white p-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="font-semibold mb-2">About Us</h3>
          <p className="text-sm">Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
          <input placeholder="Enter your email" className="mt-2 p-2 rounded w-full text-black" />
          <button className="mt-2 bg-pink-500 text-white px-4 py-1 rounded">Send</button>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Learn More</h3>
          <ul className="text-sm space-y-1">
            <li>Our Cooks</li>
            <li>See Our Features</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Shop</h3>
          <ul className="text-sm space-y-1">
            <li>Gift Subscription</li>
            <li>Send Us Feedback</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Recipes</h3>
          <ul className="text-sm space-y-1">
            <li>What to Cook This Week</li>
            <li>Pasta</li>
            <li>Dinner</li>
            <li>Healthy</li>
            <li>Vegetarian</li>
            <li>Vegan</li>
            <li>Christmas</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}