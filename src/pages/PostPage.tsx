import '../App.css'
import {HeaderComponent} from "../components/HeaderComponent/HeaderComponent.tsx";
import {useState} from "react";
import GetComment from "../utils/GetComment.ts";
import { useSearchParams } from "react-router-dom";
import CommentComponent from "../components/CommentComponent/CommentComponent.tsx";

function PostPage() {
    const [isLoading, toggleLoading] = useState(false)
    const comments = GetComment({toggleLoading});
    const [searchParams, setSearchParams] = useSearchParams();
    const userName = searchParams.get('userName')
    if (isLoading) {
        return (
            <div className='w-full h-[100vh] flex flex-col'>
                <HeaderComponent/>
                <div className='h-full flex justify-center items-center'>
                    <span className='loader'/>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className='w-full h-full flex flex-col'>
                <HeaderComponent/>
                <CommentComponent userName={userName} comments={comments}/>
            </div>
        </>
    )
}

export default PostPage
