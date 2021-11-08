import React, {FC} from 'react'
import NextHead from 'next/head'

const Head: FC<{title: string}> = ({title}) => {

    const meta = {
        title: "Thyra Racing",
        description: "Sidan är om föraren Thyra Larsson Svensli",
        keywords: "go-kart,kart,racing,race,junior-förare,förare,sverige,svensk",
        robots: "index, follow",
        contentType: "UTF8",
    }

    return (
        <NextHead>
            <title>{title}</title>
            <meta name="title" content={meta.title} />
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords} />
            <meta name="robots" content={meta.robots} />
            <meta httpEquiv="Content-Type" content="text/html" charSet={meta.contentType} />
            <link rel="icon" href="/favicon.ico" />
        </NextHead>
    )
}

export default Head