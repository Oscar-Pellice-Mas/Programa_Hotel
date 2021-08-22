import { useState, useEffect } from "react";

//TODO: modificar esto dinamicamente
const id_hotel = "0f1c446d-f92e-11eb-a416-020000fcbc46";
const id_reporter = "26ac1d7c-f92e-11eb-a416-020000fcbc46";

//todo: hacer catch bien
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if(!res.ok) throw Error('error fetching data');
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch( err => {
                if (err.name !== 'AbortError') {
                    setIsPending(false);
                    setError(err.message); 
                }           
            });

        return () => abortCont.abort();
    }, [url])

    return { data, isPending, error };
}

export async function postIssue(data) {
    const url = "/issues/new"
    const response = await fetch(url, {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(data[0])
    });
}

export default useFetch;