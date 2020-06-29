import { Layout, Menu, Typography, Input, Select, Space, Button } from "antd";
import "../styles/styles.less";

import { useState, ChangeEvent } from "react";
import Post, { PostTypes } from "../types/Post";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

const selectBefore = (value: PostTypes, handleChange: (value: PostTypes) => void) => {

  return (
    <Select defaultValue={value} className="select-before" onChange={handleChange}> 
      <Select.Option value={PostTypes.DAILY}>Daily</Select.Option>
      <Select.Option value={PostTypes.URGENT}>Urgent</Select.Option>
    </Select>
  )
}

const Home: React.FC = () => {
  const [post, setPost] = useState<Post>({
    types: PostTypes.DAILY,
    content: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPost({ 
      ...post,
      content: e.target.value
    });
  };

  const handleType = (value: PostTypes) => {
    setPost({
      ...post, 
      types: value
    });
  }
  const handleSubmit = (): void => {
    console.log(post);
  }

  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" >
          <Menu.Item>Items</Menu.Item>
          <Menu.Item>About</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', display: 'flex' }}>
        <div className="site-layout-content" style={{ flex: 1 }}>
          <Typography>
            <Title>Add todo list</Title>
            <Paragraph>
              <Text>Enter title and content</Text>
            </Paragraph>
            <div style={{ display: 'flex' }}>
              <Input
                value={post.content}
                onChange={handleChange}
                style={{ flex: 5, marginRight: 8 }}
                addonBefore={selectBefore(post.types, handleType)} />
              <Button type="primary" onClick={handleSubmit}>
                Add
              </Button>
            </div>


          </Typography>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Footer
      </Footer>
    </Layout>
  )
}

export default Home;

