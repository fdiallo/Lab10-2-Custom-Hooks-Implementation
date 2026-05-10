import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";


function DebounceSearchDemo() {
    const [searchTerm, setSearchTerm] = useState("")

    //Use of the custom hook useDebounced
    //It will only update 'debouncedSearchTerm' after 500ms of "silence"
    const debouncedSearchTerm = useDebounce(searchTerm, 500)

    useEffect(() => {
        if (debouncedSearchTerm) {
            console.log("Searching for API: ", debouncedSearchTerm)
        }
    }, [debouncedSearchTerm])

    return (
        <div style={{ padding: "20px" }}> <br/>
            <h2>Debounce Search Demo</h2>
            <input
                type="text"
                placeholder="Type to search..."
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value) }}
            />
            <p>Immediate value: {searchTerm}</p>
            <p>Debounced value: {debouncedSearchTerm}</p>
        </div>
    )
}

export default DebounceSearchDemo