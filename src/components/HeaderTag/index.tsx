import styles from "./index.module.scss";
import cn from "classnames";

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
    tag: Headertags;
}

type Headertags = "h1" | "h2" | "h3";

export const HeaderTag = ({ children, tag, className }: HeaderProps) => {
    switch (tag) {
        case "h1":
            return (
                <h1 className={cn(styles.headertag, styles.h1, className)}>
                    {children}
                </h1>
            );
        case "h2":
            return (
                <h2 className={cn(styles.headertag, styles.h2, className)}>
                    {children}
                </h2>
            );
        case "h3":
            return (
                <h3 className={cn(styles.headertag, styles.h3, className)}>
                    {children}
                </h3>
            );
        default:
            break;
    }
    return <></>;
};
