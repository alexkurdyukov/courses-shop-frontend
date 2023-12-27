import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import ArrowIcon from "../../../public/arrow.svg";

export enum ButtonTypes {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

interface ButtonProps
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    theme: ButtonTypes;
    className?: string;
    children: React.ReactNode;
    arrow?: "down" | "right" | "none";
}

export const Button = ({
    className,
    children,
    theme,
    arrow = "none",
    ...props
}: ButtonProps) => {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.button__primary]: theme === ButtonTypes.PRIMARY,
                [styles.button__secondary]: theme === ButtonTypes.SECONDARY,
            })}
            {...props}
        >
            {children}
            {arrow !== "none" && (
                <div
                    className={cn(styles.arrow, {
                        [styles.down]: arrow === "down",
                        [styles.right]: arrow === "right",
                    })}
                >
                    <ArrowIcon />
                </div>
            )}
        </button>
    );
};
