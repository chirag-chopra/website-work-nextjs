import Link from "next/link";

const BLogList = (props) => {
  const PostList = props.blog;
  return (
    <div className="row">
      {PostList.map((value, i) => (
        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
          <div className="blog blog-style--1">
            <div className="thumbnail">
              <a href="/blog-details">
                <img
                  className="w-100"
                  src={`/assets/images/blog/blog-${value.frontMatter.thumbnailUrl}.jpg`}
                  alt="Blog Images"
                />
              </a>
            </div>
            <div className="content">
              <p className="blogtype">{value.frontMatter.date}</p>
              <h4 className="title">
                <a href="/blog-details">{value.frontMatter.title}</a>
              </h4>
              <div className="blog-btn">
                <button className="btn btn-light">
                  <Link
                    className="rn-btn text-white"
                    href={"/blog/" + value.slug}
                  >
                    Read More
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BLogList;
