import { ReactNode } from "react"

type Props = {
    legend: string;
    children: ReactNode;
}

export const Photo = ({ children, legend }: Props) => {
    return (
        // <>: Fragment
        <>
            {children}
            <p>{legend}</p>
        </>
    )
}
/* // Props children
import { ReactNode } from "react"

type Props = {
    legend: string;
    children: ReactNode;
}

export const Photo = ({ children, legend }: Props) => {
    return (
        // <>: Fragment
        <>
            {children}
            <p>{legend}</p>
        </>
    )
}
/* //Props padrão
type Props = {
    url: string;
    legend: string;
}

export const Photo = ({ url, legend }: Props) => {
    return (
        <>
            <img src={url} />
            <p>{legend}</p>
        </>
    )
}
*/