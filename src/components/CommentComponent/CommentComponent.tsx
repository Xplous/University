

export default function CommentComponent({userName, comments}: {userName: string}) {
    console.log(comments)
    return (
        <>
            { comments.map(comment => <div className='p-4'>
                    <div className='w-full min-h-[100px] bg-gray-200 rounded text-black '>
                        <h1 className='text-center py-2'>{userName}</h1>
                        <p className='px-2'>{comment.body}</p>
                    </div>
                </div>
            )}
        </>
    );
}