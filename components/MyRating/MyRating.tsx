import {MyRatingProps} from "@/components/MyRating/MyRating.props";
import cn from "classnames";
import styles from "@/components/Rating/Rating.module.css";
import StarIcon from "@/components/Rating/star.svg";
import {useEffect, useState} from "react";


export const MyRating = ({rating, setRating, ...props}: MyRatingProps) => {

    const [displayedRating, setDisplayedRating] = useState<number>(rating)

    useEffect(() => {
        setDisplayedRating(rating)
    }, [rating]);

    const createStar = (i: number) => {
        return (
            <span key={i}
                  className={cn(styles.star, {
                      [styles.filled]: i <= displayedRating
                  })}
                  onClick={() => {
                      if (setRating) setRating(i)
                  }}
                  onMouseEnter={() => setDisplayedRating(i)}
                  onMouseLeave={() => setDisplayedRating(rating)}
            >
                <StarIcon/>
            </span>
        );
    }

    return <div {...props}>
        {[1, 2, 3, 4, 5].map(r => {
            return createStar(r)
        })}
    </div>
}