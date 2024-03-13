import {PostDataDto} from "../../type/interfaces.ts";
import {Link} from "react-router-dom";

export const BodyComponent = ({PostsData, newPost} : {PostsData: PostDataDto[],newPost: PostDataDto[]}) => {
    return (
        <div className='flex justify-center items-center flex-col text-black'>
            {newPost?.map((post) =>
                <div key={post.id} className='w-[500px] bg-gray-200 min-h-[500px] mt-8 rounded-[8px]'>
                    <Link to={`/post/${post.id}?userName=${post.userName}`}>
                        <div className='p-4 space-y-2 flex justify-between flex-col min-h-[500px]'>
                            <h3 className='text-center border-b border-b-gray-400 pb-2'>{post.title}</h3>
                            <h2>{post.body}</h2>
                            <h4 className='text-center border-t border-t-gray-400 pt-2'>{post.userName}</h4>
                        </div>
                    </Link>
                </div>
            )}
            {PostsData.map((post) =>
                <div key={post.id} className='w-[500px] bg-gray-200 min-h-[500px] mt-8 rounded-[8px]'>
                    <Link to={`/post/${post.id}?userName=${post.userName}`}>
                        <div className='p-4 space-y-2 flex justify-between flex-col min-h-[500px]'>
                            <h3 className='text-center border-b border-b-gray-400 pb-2'>{post.title}</h3>
                            <h2>{post.body}</h2>
                            <h4 className='text-center border-t border-t-gray-400 pt-2'>{post.userName}</h4>
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
};