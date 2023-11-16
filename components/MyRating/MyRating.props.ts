import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface MyRatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    rating: number,
    setRating?: (i:number) => void
}