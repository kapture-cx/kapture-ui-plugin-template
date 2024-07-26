import React, { Suspense } from "react"
import { ThemeProvider } from "@material-ui/styles"
import { StylesProvider, jssPreset, createGenerateClassName } from "@material-ui/core/styles"
import { create } from "jss"
import jssExtend from "jss-extend"
import Container from "./container/container"

const jss = create({
    ...jssPreset(),
    plugins: [...jssPreset().plugins, jssExtend()],
    insertionPoint: document.getElementById("jss-insertion-point"),
})
const generateClassName = createGenerateClassName({ productionPrefix: "kapture-plugin" })

function App(props) {
    return (
        <StylesProvider jss={jss} generateClassName={generateClassName}>
            <ThemeProvider>
                <Suspense fallback={<div>Loading...</div>}>
                    <div id="">
                        <Container {...props} />
                    </div>
                </Suspense>
            </ThemeProvider>
        </StylesProvider>
    )
}

export default App
