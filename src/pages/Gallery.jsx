import { PureComponent, Fragment } from "react";
import img4 from "../images/23.png";
import { Helmet } from "react-helmet";

class Gallery extends PureComponent {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>A Glimpse of Various Programs & Events</title>
          <meta
            name="description"
            content="Here are some of the images related to various events in which Dr Vikas was involved."
          />
        </Helmet>
        <div className="Service-hero d-flex justify-content-center mb-4">
          <div className="blue text-center  mt-4 pt-4 mb-4 pb-4 container">
            <h1 className=" mt-4 pt-4">Gallery</h1>
          </div>
        </div>
        <div className="container">
          <div class="row">
            <div class="col-md-6">
              <img src={img4} className="img-fluid" />
            </div>
            <div class="col-md-6">
              <img src={img4} className="img-fluid" />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-4">
              <img src={img4} className="img-fluid" />
            </div>
            <div class="col-md-4">
              <img src={img4} className="img-fluid" />
            </div>
            <div class="col-md-4">
              <img src={img4} className="img-fluid" />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-12">
              <img src={img4} className="img-fluid" />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-6">
              <img src={img4} className="img-fluid" />
            </div>
            <div class="col-md-6">
              <img src={img4} className="img-fluid" />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Gallery;
