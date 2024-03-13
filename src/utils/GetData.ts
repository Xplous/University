import {useEffect, useState} from "react";
import {Post, User} from "../type/interfaces.ts";

export default function GetData({toggleLoading}: {toggleLoading: (arg: boolean) => void}) {
    const [posts, setPosts] = useState<Post[] | []>([]);
    const [users, setUsers] = useState<User[] | []>([]);
    useEffect(() => {
        toggleLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(users => users.json())
            .then(usersJson => setUsers(usersJson))
    },[]);
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(users => users.json())
            .then(usersJson => setPosts(usersJson))
            .finally(toggleLoading(false))
    },[])
    const PostsData = posts.map(function (todo) {
        const user = users?.find(function (user) {
            return user.id === todo.userId;
        });
        return {
            id: todo.id,
            userName: user?.name,
            title: todo.title,
            body: todo.body
        };
    });

    return PostsData
}