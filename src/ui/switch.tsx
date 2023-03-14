import { FC } from "react"
import { Colors } from "../res/colors"

export enum SwitchMode {
    first = 1,
    second = 2
}

type SwitchProps = {
    mode: SwitchMode,
    onChange: (value: SwitchMode) => void
}

const CheckMark = () => {
    return (
        <span className="checkmark">
            <div className="checkmark_stem"></div>
            <div className="checkmark_kick"></div>
        </span>
    )
}

export const Switch: FC<SwitchProps> = ({mode, onChange}) => {
    return (
        <div className="flex bg-yellow-500 justify-between items-center rounded-3xl relative w-32">
            <div className="flex h-10 justify-center items-center w-20 rounded-3xl absolute left-0" 
                style={mode === SwitchMode.first ? {
                    zIndex: 2,
                    borderWidth: 1,
                    borderColor: Colors.secondaryColor,
                    backgroundColor: Colors.primaryColor
                } : {backgroundColor: Colors.secondaryColor}
                }
                onClick={() => onChange(SwitchMode.first)}
            >
                {mode === SwitchMode.first && <CheckMark />}
                <span className={mode === SwitchMode.first ? 'ml-2.5' : ''}>Eng</span>
            </div>
            <div className="flex h-10 justify-center items-center w-20 rounded-3xl absolute right-0"
                style={mode === SwitchMode.second ? {
                    zIndex: 2,
                    borderWidth: 1,
                    borderColor: Colors.secondaryColor,
                    backgroundColor: Colors.primaryColor
                } : {backgroundColor: Colors.secondaryColor}
                }
                onClick={() => onChange(SwitchMode.second)}
            >
                <CheckMark />
                <span className="ml-2.5">Rus</span>
            </div>
        </div>  
    )
}