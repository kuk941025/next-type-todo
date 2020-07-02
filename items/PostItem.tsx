import { Card, Button } from "antd";
import Post from "../types/Post";
import { PostTypes } from "../types/Post";

export interface Props extends Post {
    handleDelete: (id: string) => void;
}
const PostItem: React.FC<Props> = ({ content, types, handleDelete, id }) => {
    return (
        <Card
            hoverable
            onClick={() => console.log('clicked')}
            extra={<Button type="text" onClick={() => handleDelete(id)} style={{ color: 'red' }}>Delete</Button>}
            title={PostTypes[types]}
            style={{ margin: `16px 0px` }}>
            <p>
                {content}
            </p>
        </Card>
    )
}

export default PostItem;