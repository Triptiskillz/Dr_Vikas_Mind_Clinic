import { PureComponent,Fragment } from "react";
import img4 from '../images/23.png'
import { Link } from "react-router-dom";
import {Helmet} from 'react-helmet';
import BlogSlider from '../comp/BlogSlider'

class Blog extends PureComponent {

    render() {
        return (
            <Fragment>
                <Helmet>
                <title>Best Psychiatrist in Delhi | Dr Vikas Mind Clinic</title>
                <meta name="description" content="Dr Vikas Moun is MD in Psychiatry. He is the Best Psychiatrist in Delhi NCR with more than 10 years of experience." />
            </Helmet>
                <div className="Service-hero d-flex justify-content-center mb-4">
                    <div className="fs-1 fw-bold text-center text-white mt-4 pt-4 mb-4 pb-4 container">
                        <h1 className="fs-1 fw-bold text-hero-bold mt-4 pt-4">Anxiety</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row pt-4">
                        <div className="col-md-9">
                            <h1 style={{ color: "#38a454" }} className="fw-bold"> You can reach out to us for professional
                                assistance ranging from suspicion to
                                advanced cases of
                            </h1>
                            <p className="fs-5 text-hero-regular">
                                Lorem ipsum dolor sit amet, conse ctetur adipes iscing elit, sed do
                                eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Lorem
                                ipsum dolor sit amet, conse ctetur adipes iscing elit, sed do eiusmod
                                tempor incidi dunt ut labore et dolore magna aliqua. Lorem ipsum dolor
                                sit amet, conse ctetur adipes iscing elit, sed do eiusmod tempor incidi
                                dunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, conse
                                ctetur adipes iscing elit, sed do eiusmod tempor incidi dunt ut labore et
                                dolore magna aliqua.

                            </p>
                            <img src={img4} class="img-fluid" alt="image" />

                            <p className="fs-5 text-hero-regular">
                                Lorem ipsum dolor sit amet, conse ctetur adipes iscing elit, sed do
                                eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Lorem
                                ipsum dolor sit amet, conse ctetur adipes iscing elit, sed do eiusmod
                                tempor incidi dunt ut labore et dolore magna aliqua. Lorem ipsum dolor
                                sit amet, conse ctetur adipes iscing elit, sed do eiusmod tempor incidi
                                dunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, conse
                                ctetur adipes iscing elit, sed do eiusmod tempor incidi dunt ut labore et
                                dolore magna aliqua.<br />
                                Lorem ipsum dolor sit amet, conse ctetur adipes iscing elit, sed do
                                eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Lorem
                                ipsum dolor sit amet, conse ctetur adipes iscing elit, sed do eiusmod
                                tempor incidi dunt ut labore et dolore magna aliqua. Lorem ipsum dolor
                                sit amet, conse ctetur adipes iscing elit, sed do eiusmod tempor incidi
                                dunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, conse
                                ctetur adipes iscing elit, sed do eiusmod tempor incidi dunt ut labore et
                                dolore magna aliqua.
                            </p>
                        </div>
                        <div className="col-md-3 " style={{ backgroundColor: "#005279" }}>
                            <div className=" row mt-4 ">
                                <div className="col-md-10">
                                    <input type="text" style={{
                                        backgroundColor: "#ffffff00", width:
                                            "19rem", border: "1px solid #fff"
                                    }} />
                                </div>
                                <div className="col-md-2">
                                    <i class="fa fa-search text-white" aria-hidden="true"></i>
                                </div>
                            </div>
                            <h5 className="text-white ps-2 fs-2 mt-3">Our Top Blogs</h5>
                            <div className="d-flex justify-content-center pb-4 pt-2">
                                <img src={img4} width={120} className="img-fluid" />
                                <p className="fs-5 text-white ps-3">Lorem ipsum dolorsitamet,conse
                                    <br />
                                    <Link to="/blog" className="mt-5 fw-bold text-decoration-none text-white"> Read More..</Link>
                                </p>
                            </div>

                        </div>
                    </div>

                    
                </div>
 <div className="landBlog " style={{ marginTop: "10%" }}>
                    <div className="container">
                        <div class="fw-bold text-white mb-4 mt-4 pt-4 " style={{ fontSize: "34px" }}>
                       Recent Blogs
                    </div>
                    </div>
                    
                    <div className="container">
                        <BlogSlider />
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Blog