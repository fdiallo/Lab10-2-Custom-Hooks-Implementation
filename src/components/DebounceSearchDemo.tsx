import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";


function DebounceSearchDemo() {
    const [searchTerm, setSearchTerm] = useState("")
    const [stepValue, setStepValue] = useState(0)

    //Use of the custom hook useDebounced
    //It will only update 'debouncedSearchTerm' after 500ms of "silence"
    const debouncedSearchTerm = useDebounce(searchTerm, stepValue)

    useEffect(() => {
        if (debouncedSearchTerm) {
            console.log("Searching for API: ", debouncedSearchTerm)
        }
    }, [debouncedSearchTerm])

    const handleStepChange = (e: { target: { value: any; }; }) => {
        setStepValue(Number(e.target.value))
    }

    const handleKeyDown = (e: { key: string; preventDefault: () => void; }) => {
        if (e.key === "ArrowUP") {
            e.preventDefault() // Stop default browser jump
            setStepValue((prev) => prev + 100)
        } else if (e.key === "ArrowDown") {
            e.preventDefault()
            setStepValue((prev) => ((prev - 100) >= 0 ? prev - 100 : 0 )) // To prevent negative value
        }
    }

    return (
        <div style={{ justifyContent: "left",  alignItems: "left", padding: "20px" }}> <br/>
            <h2>Debounce Search Demo</h2><br />

            <span>Debounce Delay (ms): 
                <input style={{ marginLeft: "10px" }} 
                    type="number"
                    value={stepValue}
                    onChange={handleStepChange}
                    onKeyDown={handleKeyDown}
                    step="100"
                    min={0}
                />
            </span><br />
            
             <br/><input
                type="text"
                placeholder="Type to search..."
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value) }}
            />
            <p>Current Input: {searchTerm}</p>
            <p>Debounced Value (after ${stepValue}ms): {debouncedSearchTerm}</p>

            <p>Simulated Search Results:</p><br />
            <ul>
                <li>Result for "{debouncedSearchTerm}": Item 1</li>
                <li>Result for "{debouncedSearchTerm}": Item 2</li>
                <li>Result for "{debouncedSearchTerm}": Item 3</li>
            </ul>
        </div>
    )
}

export default DebounceSearchDemo