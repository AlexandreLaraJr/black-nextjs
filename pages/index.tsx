import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <h1>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Odit a amet debitis sequi eos cumque eius, provident non
                    mollitia. Quisquam?
                </p>
            </main>
        </>
    );
}
