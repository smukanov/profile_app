import { ChangeEvent, ComponentProps, FC } from "react"
import { Colors } from "../res/colors"

type InputProps = ComponentProps<'input'> & {
    label: string
}

export const Input: FC<InputProps> = ({label, ...inputProps}) => {
    return (
        <label className="block">
            {label}
            <input 
                {...inputProps}
                className="px-4 mt-1" 
                style={{height: 56, backgroundColor: Colors.secondaryColor, borderRadius: 12, width: '100%'}}
            />
        </label>
    )
}