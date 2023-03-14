import { ComponentProps, FC } from "react"
import { Colors } from "../res/colors"

type TextAreaProps = ComponentProps<'textarea'> & {
    label: string
}

export const TextArea: FC<TextAreaProps> = ({label, ...textareaProps}) => {
    return (
        <label className="block">
            {label}
            <textarea 
                {...textareaProps}
                className="p-4 mt-1" 
                style={{height: 150, backgroundColor: Colors.secondaryColor, borderRadius: 12, width: '100%'}}
            />
        </label>
    )
}