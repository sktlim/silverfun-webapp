import React, { useContext, useState, useEffect } from "react"


const ActivityLocationContext = React.createContext()
const ActivityLocationUpdateContext = React.createContext()

export function useActivityLocation() {
    return useContext(ActivityLocationContext)
}
export function useActivityLocationUpdate() {
    return useContext(ActivityLocationUpdateContext)
}

export function ActivityLocationProvider({ children }) {
    const [isMapInput, setIsMapInput] = useState(false)
    const [inputCoord, setInputCoord] = useState({lat: 1.3483, lng: 103.6831 }) // {lat: 123, lng: 345 }

    function sendInputCoord({ lat, lng }) {
        setInputCoord((prev) => {
            console.log(prev)
            return {  lat, lng }
        })
    }
    //   function toggleIsMapInput(){
    //     setIsMapInput(prevMapInput => !prevMapInput)
    //     console.log(isMapInput)
    //   }

    return (
        <ActivityLocationContext.Provider value={inputCoord}>
            <ActivityLocationUpdateContext.Provider value={sendInputCoord}>
                {children}
            </ActivityLocationUpdateContext.Provider>
        </ActivityLocationContext.Provider>
    )
}