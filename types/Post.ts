export enum PostTypes {
    DAILY,
    URGENT
}
type Post = {
    types: PostTypes, 
    content: string,
}

export default Post;