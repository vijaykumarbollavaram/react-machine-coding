export type TPostBase = {
    userId: number;
    body: string;   
    title: string;
    id: 1;
}

export type TPost = TPostBase && { comments?: TCommentBase[] }