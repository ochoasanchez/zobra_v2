type Item = {
    title?: string,
    description?: string,
    img?: {
        url?: string,
        alt?: string,
    },
    content: string,
}

type Product = {
    id: number,
    title: string,
    slug: string,
    year: number,
    description: string,
    img: string,
}