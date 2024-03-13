import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


export default function GetComment({toggleLoading}: {toggleLoading: (arg: boolean) => void}) {
    const [comments,setComments] = useState([]);
    const { postId } = useParams();
    useEffect(() => {
        toggleLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(comment => comment.json())
            .then(comment => setComments(comment))
            .finally(() => toggleLoading(false))
    }, []);
    return comments
}