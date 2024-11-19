import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const url = "https://dummyjson.com/quotes?limit=6";

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
    <div className="col md:grid grid-cols-3 w-3/4 mx-auto gap-4">
      {quotes.map((quote, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 500}
          data-aos-duration="1000"
          className="bg-white border-4 border-black shadow max-w-md p-6 mx-auto transition-all duration-300 ease-in-out hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] focus-within:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus-within:translate-x-[4px] focus-within:translate-y-[4px] my-4">
          <h2 className="text-2xl font-black mb-4 uppercase">{quote.author}</h2>
          <p className="text-large">{quote.quote}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
