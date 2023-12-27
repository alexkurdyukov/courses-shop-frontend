import styles from './index.module.scss';
import cn from 'classnames';

import React from "react";

interface HeaderProps {
    className?: string;
}

export const Header = ({className}: HeaderProps) => {
    return (
        <div className={cn(styles.header, className)}>
            header
        </div>);
};
