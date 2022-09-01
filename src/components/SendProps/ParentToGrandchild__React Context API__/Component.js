import { useState } from "react"
import { Context } from "./Context"
import { Parent } from "./Parent/Parent"


export const Component = () => {
    const [name, setName] = useState()

    return (
        <>
            <Context.Provider value={{name, setName}}>
                <Parent />
            </Context.Provider>
        </>
    )
}