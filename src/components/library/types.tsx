export interface Bookmark {
    id: string
    url: string
    title: string
    createdAt: number

    description?: string
    tags: string[]
    isBookmarked: boolean //seperates saved from bookmarked
}