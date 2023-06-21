import { ReactNode } from "react";
import { IconContainer, IconVariant } from "./styles";

interface IconProps {
    variant?: IconVariant
    children: ReactNode
}

export function IconHolder({variant = 'purple', children}: IconProps	) {
    return(
        <IconContainer variant={variant}>
            {children}
        </IconContainer>
    )
}