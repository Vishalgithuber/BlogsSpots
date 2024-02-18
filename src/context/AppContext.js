import { createContext, useState } from "react"; // Importing createContext and useState from React
import { baseUrl } from "../baseUrl"; // Importing baseUrl from another file

// Create a new context named AppContext
export const AppContext = createContext();

// AppContextProvider component acts as a wrapper to provide context to its children
function AppContextProvider({ children }) {
    // State variables to manage data within the context
    const [loading, setLoading] = useState(false); // State for loading status
    const [posts, setPosts] = useState([]); // State for blog post data
    const [page, setPage] = useState(1); // State for current page
    const [totalPages, setTotalPages] = useState(null); // State for total number of pages

    // Function to fetch blog posts from an API
    async function fetchingBlogPosts(page = 1) {
        setLoading(true); // Set loading to true before fetching data
        let url = `${baseUrl}?page=${page}`; // Construct API URL
        try {
            const result = await fetch(url); // Fetch data from the API
            const data = await result.json(); // Convert response to JSON format
            console.log(data); // Log the data to the console (for demonstration)
            // Here you would typically update the state variables (posts, totalPages, etc.) based on the fetched data
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        } catch (error) {
            // Handle any errors that occur during the fetch operation
            console.error("Error fetching blog posts:", error);
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false); // Set loading back to false after fetching data
    }

    // Function to handle page change
    function handlerPageChange(page) {
        setPage(page); // Set the page state
        fetchingBlogPosts(page); // Fetch blog posts for the new page
    }

    // Object containing all the required data and functions to be provided to consumers of the context
    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchingBlogPosts,
        handlerPageChange
    };

    // Return the AppContext.Provider component with the provided value and render children components
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider; // Export the context provider component for use in other parts of the application
