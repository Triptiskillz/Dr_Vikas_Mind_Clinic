import { PureComponent, Fragment } from "react";
import img4 from "../images/23.png";
import { Helmet } from "react-helmet";
import BlogsListSlider from "../comp/BlogsListSlider";
import { Link } from "react-router-dom";

class Blogs extends PureComponent {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Various Blogs Related to Mental Health</title>
          <meta
            name="description"
            content="Let us gain some knowledge about various types of mental disorders and some interesting facts about them."
          />
        </Helmet>
        <div className="Service-hero d-flex justify-content-center mb-4">
          <div className="fs-1 fw-bold text-center text-white mt-4 pt-4 mb-4 pb-4 container">
            <h1 className="fs-1 fw-bold text-hero-bold mt-4 pt-4">Blog</h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <BlogsListSlider />
            </div>
            <div
              className="col-md-2 mt-4  "
              style={{ backgroundColor: "#005279" }}
            >
              <div className=" row mt-4 ">
                <div className="col-md-9">
                  <input
                    type="text"
                    style={{
                      backgroundColor: "#ffffff00",
                      border: "1px solid #fff",
                    }}
                  />
                </div>
                <div className="col-md-2">
                  <i class="fa fa-search text-white" aria-hidden="true"></i>
                </div>
              </div>
              <h5 className="text-white text-center fs-4 mt-3">
                Filter by Category
              </h5>
              <div className="fs-5  mt-3 fw-bold">
                <Link className="mt-3 text-decoration-none text-white">
                  Depression <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
                <Link className="mt-3 text-decoration-none text-white">
                  Anxiety <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
                <Link className="mt-3 text-decoration-none text-white">
                  Dependence <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
                <Link className="mt-3 text-decoration-none text-white">
                  Schizophrenia <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
                <Link className="mt-3 text-decoration-none text-white">
                  Supervision <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
                <Link className="mt-3 text-decoration-none text-white">
                  Depression <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
                <Link className="mt-3 text-decoration-none text-white">
                  Anxiety <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
                <Link className="mt-3 text-decoration-none text-white">
                  Dependence <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
                <Link className="mt-3 text-decoration-none text-white">
                  Schizophrenia <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
                <Link className="mt-3 text-decoration-none text-white">
                  Supervision <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Blogs;
