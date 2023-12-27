import styles from './index.module.scss';
import cn from 'classnames';

import React from "react";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    return (
        <aside className={cn(styles.sidebar, className)}>
            sidebar
        </aside>);
};
