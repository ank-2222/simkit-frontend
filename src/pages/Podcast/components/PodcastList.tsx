import PodcastDisplay from "./PodcastDisplay";
import useGetPodcast from "@/Feature/podcast/useGetPodcast";
import { Podcast } from "@/Interface/podcast";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import { podcastData as pdData } from "./data";

function PodcastList() {
  const { getPodcast, data: podcastData } = useGetPodcast();
  const [sortedPodcastData, setSortedPodcastData] = useState<Podcast[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest"); // 'newest' or 'oldest'
  const itemsPerPage = 8;

  useEffect(() => {
    getPodcast();
  }, []);

  useEffect(() => {
    if (podcastData) {
      const sortedData = [...podcastData.podcasts].sort((a: Podcast, b: Podcast) => {
        const dateA = new Date(a.created_at).getTime();
        const dateB = new Date(b.created_at).getTime();
        return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
      });
      setSortedPodcastData(sortedData);
    }
  }, [podcastData, sortOrder]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to the first page when a new search is made
  };

  const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const filteredPodcasts = sortedPodcastData?.filter((podcast) =>
    podcast.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const currentItems = filteredPodcasts?.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  return (
    <div className="w-full">
      <section>
        <p className="text-left text-black text-base font-semibold font-['Roboto'] leading-normal">Listen to Podcasts</p>
        <h1 className="text-black text-5xl font-bold font-jakarta leading-[125%]">Your podcasts</h1>
        <p className="text-black text-lg font-normal font-jakarta mt-4 leading-[110%] lg:max-w-[60vw]">
          Your physical + digital subscription includes exclusive printed content delivered to your door, full digital access on all devices, bonus online features, and members-only perks and discounts.
        </p>
      </section>

      <div className="my-4 flex space-x-4">
        <input
          type="text"
          placeholder="Search Podcasts"
          value={searchQuery}
          onChange={handleSearchChange}
          className="px-4 py-2 border rounded w-full outline-none text-cGreen"
        />
        <select value={sortOrder} onChange={handleSortOrderChange} className="px-4 py-2 border outline-none rounded">
          <option value="newest" className="text-cGreen font-semibold font-jakarta py-2">Newest First</option>
          <option value="oldest" className="text-cGreen font-semibold font-jakarta py-2">Oldest First</option>
        </select>
      </div>

      <div className="flex justify-between mt-10">
        
        <button
        className={cn("bg-white font-semibold text-cGreen rounded flex justify-center items-center gap-x-1 border-2 px-2 py-2", currentPage===1?"cursor-not-allowed":"")}
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          <ChevronLeft size={20} />
          Previous
        </button>
        <button
        className={cn("bg-white font-semibold text-cGreen rounded flex justify-center items-center gap-x-1 border-2 px-2 py-2", indexOfLastItem >= (filteredPodcasts?.length ?? 0)?"cursor-not-allowed":"")}  
          onClick={handleNextPage}
          disabled={indexOfLastItem >= (filteredPodcasts?.length ?? 0)}
        >
          Next
          <ChevronRight size={20} />
        </button>
      </div>
      <section className="flex flex-col justify-center items-center min-w-full mt-[20px]">
        {pdData && pdData.map((podcast: Podcast) => (
          <PodcastDisplay key={podcast.id} podcast={podcast} />
        ))}
      </section>

      <div className="flex justify-between mt-10">
        
        <button
        className={cn("bg-white font-semibold text-cGreen rounded flex justify-center items-center gap-x-1 border-2 px-2 py-2", currentPage===1?"cursor-not-allowed":"")}
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          <ChevronLeft size={20} />
          Previous
        </button>
        <button
        className={cn("bg-white font-semibold text-cGreen rounded flex justify-center items-center gap-x-1 border-2 px-2 py-2", indexOfLastItem >= (filteredPodcasts?.length ?? 0)?"cursor-not-allowed":"")}  
          onClick={handleNextPage}
          disabled={indexOfLastItem >= (filteredPodcasts?.length ?? 0)}
        >
          Next
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default PodcastList;
