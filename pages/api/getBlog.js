// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import BlogContent from "../../All Component/elements/blog/BlogContent"

export default function getBlog(req, res) {

    console.log(req.query.slug)
    const blogs = BlogContent

    const oneBlog = blogs.find(d => d.title == req.query.slug)

    res.status(200).json(oneBlog)
}
