export type Bookmark = {
    id: string
    url: string
    title: string
    createdAt: number

    description?: string
    tags: string[]
    isBookmarked: boolean //seperates saved from bookmarked
}

export type AlertType = 'success' | 'error' | 'warning' | 'info'

export type AlertData = {
    id: string,
    message: string,
    type: AlertType
}

export type AlertContextType = {
    showAlert: (message: string, type?: AlertType) => void
}