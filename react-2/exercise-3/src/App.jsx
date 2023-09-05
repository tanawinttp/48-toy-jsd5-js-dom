import usePost from "./hook/usePost";
import "./App.css";

function App() {
  const { get, remove } = usePost();

  return (
    <div id="app">
      <h1>Enter Data</h1>
      <PostContainer />
      <FeedSection getData={get()} removeData={remove} />
    </div>
  );
}

const PostContainer = () => {
  return (
    <div class="post-container">
      <div class="post-header">
        <img class="post-avatar" src="avatar.jpg" alt="Your Avatar" />
        <div class="post-author">You</div>
      </div>
      <div class="post-content">
        <textarea
          class="post-input"
          placeholder="What's on your mind?"
        ></textarea>
      </div>
      <div class="post-actions">
        <button class="post-button">Post</button>
      </div>
    </div>
  );
};

const FeedSection = (item) => {
  const post = item.getData;
  const remove = item.removeData;
  return (
    <div class="feed">
      {post.map((item) => (
        <Post
          id={item.id}
          remove={remove}
          author={item.author}
          avatar={item.avatar}
          time={item.time}
          content={item.content}
          image={item.image}
        />
      ))}
    </div>
  );
};

const Post = (props) => {
  const { id, author, avatar, time, content, image, remove } = props;
  return (
    <div class="post">
      <div class="post-header">
        <img class="post-avatar" src={avatar} alt="User 1" />
        <div>
          <div class="post-author">{author}</div>
          <div class="post-time">{time}</div>
        </div>
      </div>
      <div class="post-content">{content}</div>
      <img class="post-image" src={image} alt="Post 1" />
      <button onClick={() => remove(id)}>del</button>
    </div>
  );
};

export default App;
