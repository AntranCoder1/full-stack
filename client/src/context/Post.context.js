import React, { createContext, useContext, useReducer, useState } from 'react';
import { postReducer } from '../reducers/Post.reducer'
import { apiUrl, POSTS_LOADED_FAIL, POSTS_LOADED_SUCCESS } from './Contant'
import axios from 'axios'


export const postContext = createContext()

const PostContextProvider = ({children}) => {

    // state
    const [postState, dispatch] = useReducer(postReducer, { 
        posts: [],
        postLoading: true
    }) 

    // Get All Post
    const getPost = async () => {
        try {
            const response = await axios.get(`${apiUrl}/posts`)
            if (response.data.success) 
                dispatch({ type: POSTS_LOADED_SUCCESS, payload: response.data.posts })
        } catch (error) {
            dispatch({ type: POSTS_LOADED_FAIL })
        }
    }

    // Post context data
    const postContextData = { postState, getPost }

    return (
        <postContext.Provider value={postContextData}>
            {children}
        </postContext.Provider>
    )
}

export default PostContextProvider