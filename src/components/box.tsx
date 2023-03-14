import { ComponentProps, FC } from "react"
import { Colors } from "../res/colors"

type BoxProps = ComponentProps<'div'> & {
    width: number
}

export const Box: FC<BoxProps> = ({children, width, ...divProps}) => {
    return (
        <div {...divProps} style={{width, borderWidth: 2, borderColor: Colors.secondaryColor, borderRadius: 24, padding: 40}}>
             {children}
        </div>
    )
}