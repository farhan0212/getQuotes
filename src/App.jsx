import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const url = "https://dummyjson.com/quotes?limit=10";

  const [quotes, setQuotes] = useState([]);

  const getQuotes = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.quotes);
      setQuotes(data.quotes);
    } catch (error) {
      console.error("Error fetching data", error);
      setQuotes([]);
    }
  };

  useEffect(() => {
    getQuotes();
    AOS.init();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-3/4 mx-auto gap-8 py-12">
      {quotes.map((quote, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 300}
          data-aos-duration="900"
          className="bg-[#f9f871] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg p-8 mx-auto transition-all duration-200 ease-in-out hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 focus-within:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus-within:translate-x-2 focus-within:translate-y-2 my-6 relative">
          <span className="absolute top-4 right-4 w-6 h-6 bg-pink-500 border-2 border-black rounded-full"></span>
          <h2 className="text-2xl font-extrabold mb-4 uppercase text-black drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            {quote.author}
          </h2>
          <p className="text-lg font-semibold text-black drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">
            {quote.quote}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
