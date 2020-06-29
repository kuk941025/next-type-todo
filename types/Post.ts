export enum PostTypes {
    DAILY,
    URGENT
}
type Post = {
    types: PostTypes; 
    content: string;
    id: string;
}

export default Post;