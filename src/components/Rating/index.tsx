/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactElement, useEffect, useState, KeyboardEvent } from "react";
import styles from "./index.module.scss";
import { StarIcon } from "../../../public/icons";
import cn from "classnames";

interface RatingProps {
    isEditable?: boolean;
    rating: number;
    setRating?: (rating: number) => void;
}

export const Rating = ({
    isEditable = false,
    rating,
    setRating,
}: RatingProps) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
        new Array(5).fill(<></>)
    );

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructRating(i);
    };

    const changeRating = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
        if (e.code !== "Space" || !setRating) return;
        setRating(i);
    };

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray?.map(
            (r: JSX.Element, index: number) => {
                return (
                    <span
                        className={cn(styles.star, {
                            [styles.star__filled]: index < currentRating,
                            [styles.star__editable]: isEditable,
                        })}
                        onMouseEnter={() => changeDisplay(index + 1)}
                        onMouseLeave={() => changeDisplay(rating)}
                        onClick={() => changeRating(index + 1)}
                    >
                        <StarIcon
                            tabIndex={isEditable ? 0 : -1}
                            onKeyDown={(e) => {
                                handleSpace(index, e);
                            }}
                        />
                    </span>
                );
            }
        );
        setRatingArray(updatedArray);
    };

    return (
        <div className={styles.rating}>
            {ratingArray?.map((rating: JSX.Element, index: number) => (
                <span className={styles.star} key={index}>
                    {rating}
                </span>
            ))}
        </div>
    );
};
