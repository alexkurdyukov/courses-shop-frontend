import styles from "./index.module.scss";
import cn from "classnames";

import React from "react";
import { format } from "date-fns";

interface FooterProps {
    className?: string;
}

export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={cn(styles.footer, className)}>
            <p className={styles.footer__element}>
                OwlTop © {format(new Date(), "yyyy")} Все права защищены
            </p>
            <a
                className={cn(styles.footer__link, styles.footer__element)}
                href={""}
                target={"_blank"}
            >
                Пользовательское соглашение
            </a>
            <a
                className={cn(styles.footer__link, styles.footer__element)}
                href={""}
                target={"_blank"}
            >
                Политика конфиденциальности
            </a>
        </div>
    );
};
