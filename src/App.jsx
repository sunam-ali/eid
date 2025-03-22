import { useState } from "react";
import EidCard from "../src/assets/eidcard.gif";

export default function App() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // State for handling errors
  const [eidWish, setEidWish] = useState(""); // State for random Eid wish in Bangla

  const eidWishes = [
    "এই পবিত্র দিনে আপনার জীবন আলোর সাথে ভরে উঠুক।",
    "আল্লাহ আপনার পরিবারকে সুখী ও সুস্থ রাখুন।",
    "এই ঈদ আপনার জীবনে নতুন আশার আলো নিয়ে আসুক।",
    "আল্লাহ আমাদের সকলের জীবনে শান্তি ও সমৃদ্ধি দান করুন।",
    "আল্লাহ আপনাকে এবং আপনার পরিবারকে অশেষ রহমত দান করুন।",
    "আল্লাহ আপনাকে সব বিপদ থেকে রক্ষা করুন এবং সুখী রাখুন।",
    "এই ঈদ আপনার জীবনে সুখের নতুন অধ্যায় শুরু হোক।",
    "আল্লাহ আমাদের সকলকে একে অপরের প্রতি ভালোবাসা ও সহানুভূতি প্রদর্শনের ক্ষমতা দিন।",
  ];

  const getRandomEidWish = () => {
    const randomIndex = Math.floor(Math.random() * eidWishes.length);
    return eidWishes[randomIndex];
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("আপনার নাম দিন");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      setSubmittedName(name);
      setEidWish(getRandomEidWish());
      setLoading(false);
      setName("");
    }, 1500);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-5">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-4">
            আপনার নাম লিখুন
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="আপনার নাম ..."
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-[#201730] transition duration-300"
            >
              Submit
            </button>
          </form>

          {loading && (
            <div className="mt-6 text-center">
              <span className="loading loading-ring loading-xl">Loading......</span>
            </div>
          )}

          {submittedName && !loading && (
            <div className="mt-6 text-center">
              <p className="text-black-500">{eidWish}</p>{" "}
              <p className="text-black-500 font-semibold text-2xl mt-2">ঈদ মোবারক🌙 {submittedName}!</p>
              <img src={EidCard} alt="Greeting GIF" className="w-full mt-4" />
              <div className="mt-4">
                <a
                  href={EidCard}
                  download="EidCard.gif"
                  className="w-full bg-blue-500 text-white p-3 rounded-lg text-center inline-block hover:bg-[#201730] transition duration-300"
                >
                  Download 
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
