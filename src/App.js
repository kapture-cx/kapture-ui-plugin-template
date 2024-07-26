import React, { Suspense } from "react"
import Container from "./container/container"

function App(props) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div id="">
                <Container {...props} />
            </div>
        </Suspense>
    )
}

export default App
