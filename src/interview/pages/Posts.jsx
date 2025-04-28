import { useEffect, useState } from "react";
import http from '../services/http';
import { Heading, Text, Button } from '../components';
import { USERS_POSTS } from '../config/api';

const Posts = function (){
    const [posts, setPosts] = useState([])

    const handleShowComments = async (postId, index) => {
        try {
            const resp = await http.get(`/posts/${postId}/comments`)
            const data = await resp.json();
            const arr = [...posts];
            arr.splice(index, 1, {...arr[index], comments: data })
            setPosts(arr);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        const getUserPosts = async () => {
            try {
                const resp = await http.get(USERS_POSTS);
                const data = await resp.json();
                setPosts(data);

            } catch(err) {
                console.log(err);
            }
        }
        getUserPosts();
    }, [])
    return (
        <div>
            {posts.map((post, index) => (
                <div key={post.id}>
                    <Heading>{post.title}</Heading>
                    <Text>{post.body}</Text>
                    <Button onClick={() => handleShowComments(post.id, index)}>Show comments</Button>
                    <div>
                        {post.comments && post.comments.map((comment) => (
                            <Text key={comment.id}>{comment.body}</Text>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Posts;