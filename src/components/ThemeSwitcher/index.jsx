import { ThemeSwitcher } from "./style"
import { MdBrightnessLow, MdDarkMode } from "react-icons/md";

export default function index({cb}) {

    return (
        <ThemeSwitcher onChange={cb}>
            <input type="checkbox" id='switchInput' />
            <label htmlFor="switchInput"><MdDarkMode/><MdBrightnessLow/></label>
        </ThemeSwitcher>
    )
}