import React, { Suspense } from "react"
import { ThemeProvider } from "@material-ui/styles"
import Container from "./container/container"

function App(props) {
    return (
        <ThemeProvider>
            <Suspense fallback={<div>Loading...</div>}>
                <div id="">
                    <Container {...props} />
                </div>
            </Suspense>
        </ThemeProvider>
    )
}

export default App
