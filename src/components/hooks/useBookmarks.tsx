import { useState } from "react";
import type { Bookmark } from "../library/types";
import { 
    getBookmarks,
    saveBookmark, 
    deleteBookmark, 
    updateBookmark 
} from "../library/storage";
import { useAlert } from "../Alert/AlertProvider";

// describes the data needed when creating a new bookmark
export type AddInputProps = {
    title: string
    url: string
    description?: string
    tags?: string[]
}

// creating the custom hook
export function useBookmarks() {

    // creates book mark state
    // bookmarks, contains current list of bookmarks
    // setbookmarks, changes the bookmark list
    const [bookmarks, setBookmarks] = useState<Bookmark[]>(getBookmarks());

    // retrieves two function from the alert system
    const { showAlert} = useAlert()

    // function creates a new bookmark
    const add = ({

        url, 
        title, 
        description = '', 
        tags = [] 

    }: AddInputProps) => {

        // creaes a book mark object
        const bookmark: Bookmark = {
            id: crypto.randomUUID(), //  creates a unique ID
            url,
            title,
            createdAt: Date.now(), // time at which the bookmark was created

            description,
            tags, 
            isBookmarked: false // new links are yet to be bookmarked nor favoured
        };

        // saves the new bookmark in storage
        // returns updated list
        setBookmarks(saveBookmark(bookmark))
    };

    // function that removes/deletes a bookmark link via its id
    const remove = (id: string) => {
        setBookmarks(deleteBookmark(id))
        showAlert('Link successfuly unbookmarked', 'success')
    };

    // function that switches an ordinary link between being bookmarked or unbookmarked
    const toggleBookmark = (id: string) => {

        const target = bookmarks.find(b => b.id === id)

        const newStatus = !target?.isBookmarked

        setBookmarks(
            updateBookmark( 
                id, 
                { isBookmarked: newStatus }
            )
        )
        
        showAlert(
            newStatus
                ? 'Link successfuly bookmarked'
                : 'Link successfuly unbookmarked',
            'success'
        )

    } // find the bookmark and flip its status

    // object that contains bookmark statistics
    const stats = {
        total: bookmarks.length,
        bookmarked: bookmarks.filter(b => b.isBookmarked).length,
    }

    // function for editing an existing bookmark
    // Partial<Bookmark>, means only provide the fields that are wanted for changing
    const edit = (id: string, updates: Partial<Bookmark>) => {
        setBookmarks(updateBookmark(id, updates))
    }

    // what other components might need to use
    return { 
        bookmarks, 
        add, 
        remove, 
        toggleBookmark, 
        stats, 
        edit 
    };

}


