export type TCommentBase = {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
}

export type TPost = TCommentBase