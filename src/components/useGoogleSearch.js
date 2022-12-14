import { useState, useEffect } from "react";

const CONTEXT_KEY = "c544272540a8f4693";

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
                .then((response) => response.json())
                .then((result) => {
                    setData(result);
                });
        };
        fetchData();
    }, [term]);
    return { data };
};
export default useGoogleSearch;
