import { Post } from "../models/post";

const createPost = async (req, res) => {
  const { title, content } = req.body;
  const { userId } = req.user;
  const { photoId } = req.body;

  if (title.trim() === "" || content.trim() === "") {
    return res.status(400).json({ error: "Title and content are required" });
  }

  try {
    const post = new Post({
      userId,
      photoId,
      title,
      content,
    });

    await post.save();

    res.status(201).json({ message: "Post created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const getPost = async (req, res) => {
  const { postId } = req.params;
  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const postControllers = {
  createPost,
  getPost,
};

export default postControllers;
