import { Avatar } from "../components"
import { useState } from "react"
import { Switch, SwitchMode } from "../ui"

export const TopBar = () => {
    const [mode, setMode] = useState(SwitchMode.first)
    return (
        <div className="flex justify-end items-center children-except-first:ml-10" style={{gridArea: 'topbar'}}>
            <div>Blog</div>
            <div>Useful Resources</div>
            <Switch mode={mode} onChange={setMode} />
            <Avatar />
        </div>
    )
}