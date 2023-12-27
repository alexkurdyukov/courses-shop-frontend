import styles from "./Layout.module.scss";

import React, { FunctionComponent } from "react";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header} />
            <Sidebar className={styles.sidebar} />
            <div className={styles.body}>{children}</div>
            <Footer className={styles.footer} />
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown>>(
    Component: FunctionComponent<T>
) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};
