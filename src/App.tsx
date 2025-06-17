import { Box, Divider, Stack } from "@mui/material"
import Feed from "./components/Feed"
import Navbar from "./components/Navbar"
import RightBar from "./components/RightBar"
import SideBar from "./components/SideBar"
import { useState } from "react"

export type theme = "light" | "dark";

function App() {
  const [mode, setMode] = useState<theme>("light");
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing="2" justifyContent="space-between" divider={<Divider orientation="vertical" flexItem />} >
        <SideBar mode={mode} setMode={setMode} />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  )
}

export default App
