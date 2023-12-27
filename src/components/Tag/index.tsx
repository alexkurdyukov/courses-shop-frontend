import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./index.module.scss";

interface TagProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    href?: string;
    size: TagSize;
    color: TagColor;
}

export enum TagSize {
    S = "s",
    M = "m",
}

export enum TagColor {
    GHOST = "ghost",
    RED = "red",
    GREEN = "green",
    GREY = "grey",
    PRIMARY = "primary",
}

export const Tag = ({
    children,
    className,
    size,
    color = TagColor.GHOST,
    href,
    ...props
}: TagProps) => {
    return (
        <div
            className={cn(styles.tag, className, {
                [styles.s]: size === TagSize.S,
                [styles.m]: size === TagSize.M,
                [styles.ghost]: color === TagColor.GHOST,
                [styles.red]: color === TagColor.RED,
                [styles.green]: color === TagColor.GREEN,
                [styles.grey]: color === TagColor.GREY,
                [styles.primary]: color === TagColor.PRIMARY,
            })}
            {...props}
        >
            {href ? <a href={href}>{children}</a> : <>{children}</>}
        </div>
    );
};
