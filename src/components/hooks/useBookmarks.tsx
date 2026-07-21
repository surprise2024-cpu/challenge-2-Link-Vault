import { useState } from "react";
import type { Bookmark } from "../library/types";
import { getBookmarks, saveBookmark, deleteBookmark, updateBookmark } from "../library/storage";

interface AddInput {
    title: string
    url: string
    description?: string
    tags?: string[]
}

export function useBookmarks() {
    const [bookmarks, setBookmarks] = useState<Bookmark[]>(getBookmarks());

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

    const remove = (id: string) => setBookmarks(deleteBookmark(id));

    const toggleBookmark = (id: string) => {
        const target = bookmarks.find(b => b.id === id)
        if (!target) return
        setBookmarks(updateBookmark(id, { isBookmarked: !target.isBookmarked }))
    }

    const stats = {
        total: bookmarks.length,
        bookmarked: bookmarks.filter(b => b.isBookmarked).length,
    }

    return { bookmarks, add, remove, toggleBookmark, stats };

}