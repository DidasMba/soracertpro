

export type TBlog = {
    id: number,
    slug: string,
    title: string,
    content: string,
    thumbnail: string,
    createAt: string,
    updateAt: string,
    authorId: number,
    eventId: null | number,
    categoryId: number,
    author: {
        id: number,
        lastname: string,
        firstname: string,
        avatar: string,
    }
    category: {
        id: number,
        name: string,

    }

}