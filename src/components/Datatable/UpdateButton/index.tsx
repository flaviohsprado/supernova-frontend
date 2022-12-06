import { cloneElement, ReactNode } from "react";

export interface IUpdateButtonProps {
    id: string,
    children?: ReactNode
}

export default function UpdateButton({ id, children }: IUpdateButtonProps) {
    const childrenProps = { id }

    return (
        <>            
            {children && cloneElement(children as React.ReactElement, childrenProps)}
        </>
    )
}