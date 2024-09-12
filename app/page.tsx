"use client";

import { FormEventHandler, useState } from "react";

export default function Home() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        try {
            // URL-Parameter erstellen
            const response = await fetch(`/api/countries?country=${searchTerm}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();
            console.log("Filtered Countries:", data);
        } catch (error) {
            console.error("Error fetching countries:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
}



//
// import { FormEventHandler } from "react";
//
// const SearchForm = () => {
//     return (
//         <form
//             action={searchFlight}
//             method="POST"
//             className="flex justify-start items-center gap-4 flex-col"
//         >
//             <div>
//                 <input type="radio" name="flightType" value="return" id="return" />
//                 <label htmlFor="return">RETURN</label>
//
//                           </div>
//
//             <button
//                 className="bg-blue-600 text-white py-2 px-4 rounded"
//                 type="submit"
//             >
//                 Submit
//             </button>
//         </form>
//     );
// };

export default SearchForm;

