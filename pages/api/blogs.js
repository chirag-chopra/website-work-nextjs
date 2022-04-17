// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import BlogContent from "../../All Component/elements/blog/BlogContent"

export default function blogs(req, res) {
  const blogs = BlogContent

  res.status(200).json(blogs);
}
