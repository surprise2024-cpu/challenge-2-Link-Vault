import { useState } from "react";
import type { Bookmark } from "../library/types";
import { getBookmarks, saveBookmark, deleteBookmark, updateBookmark } from "../library/storage";
import { useAlert } from "../Alert/AlertProvider";

export type AddInput = {
    title: string
    url: string
    description?: string
    tags?: string[]
}

export function useBookmarks() {
    const [bookmarks, setBookmarks] = useState<Bookmark[]>(getBookmarks());
    const { showAlert, confirmAction } = useAlert()

    const add = ({url, title, description = '', tags = [] }: AddInput) => {
        const bookmark: Bookmark = {
            id: crypto.randomUUID(),
            url,
            title,
            createdAt: Date.now(),

            description,
            tags, 
            isBookmarked: false
        };
        setBookmarks(saveBookmark(bookmark))
    };

    const remove = (id: string) => {
        setBookmarks(deleteBookmark(id))
        showAlert('Link successfuly unbookmarked', 'success')
    };

    const toggleBookmark = (id: string) => {
        const target = bookmarks.find(b => b.id === id)
        if (!target) return
        setBookmarks(updateBookmark(id, { isBookmarked: !target.isBookmarked }))
        showAlert('Link successfuly bookmarked', 'success')
    }

    const stats = {
        total: bookmarks.length,
        bookmarked: bookmarks.filter(b => b.isBookmarked).length,
    }

    const edit = (id: string, updates: Partial<Bookmark>) => {
        setBookmarks(updateBookmark(id, updates))
    }

    return { bookmarks, add, remove, toggleBookmark, stats, edit };

}


