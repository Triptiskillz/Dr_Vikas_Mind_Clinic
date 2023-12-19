import { Component } from "react";
import v1 from "../video/1.mp4";
import v2 from "../video/2.1.mp4";
import v3 from "../video/3.mp4";

class Sliders extends Component {
  state = {
    data: [
      {
        id: 1,
        url: "https://www.youtube.com/embed/ILGEvOB_zvE",
        title: "Client Testimonial for Psychiatrist in West Delhi",
      },
      {
        id: 2,
        url: "https://www.youtube.com/embed/t6Qgtc2850U",
        title: "Client Testimonial for Psychiatrist in Delhi NCR",
      },
      {
        id: 3,
        url: "https://www.youtube.com/embed/qMBUjkGiL00",
        title: "Client Testimonial for Psychaitrist in Delhi",
      },
    ],
    startnum: 0,
    number: 2,
  };
  handleReadMoreAdd = () => {
    let s1 = { ...this.state };
    s1.startnum = s1.number + 1;
    s1.number += 3;
    this.setState(s1);
  };
  handleRemoveNumber = () => {
    let s1 = { ...this.state };
    s1.number -= 3;
    s1.startnum = s1.number - 3;
    this.setState(s1);
  };
  render() {
    let { data, number, startnum } = this.state;
    let startIndex = startnum;
    let endIndex = number;
    // console.log(endIndex,data.length)
    var prod1 =
      data.length > 3
        ? data.filter((lt, index) => index >= startIndex && index <= endIndex)
        : data;
    return (
      <>
        <div className="row text-center">
          {prod1.map((d) => (
            <>
              <div
                className="col-md-12 col-lg-4 pt-4"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                <div class="box-video">
                  {/* <video controls> 
                                <source src={d.url} type="video/mp4"/>
                                </video> */}
                  <iframe
                    src={d.url}
                    title={d.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </>
          ))}

          <div className="row ">
            <div className="col-1 ">
              {startnum === 0 ? (
                <>
                  <i
                    className="fa fa-long-arrow-left fs-1"
                    style={{ color: "#38a454" }}
                  ></i>
                </>
              ) : (
                <>
                  <i
                    className="fa fa-long-arrow-left fs-1"
                    style={{ color: "#38a454" }}
                    onClick={() => this.handleRemoveNumber()}
                  ></i>
                </>
              )}
            </div>
            {/* <div className="col-1"></div> */}
            <div className="col-1 ms-2 " style={{ color: "#38a454" }}>
              {data.length === number ? (
                <>
                  <i className="fa fa-long-arrow-right fs-1"></i>
                </>
              ) : (
                <>
                  <i
                    className="fa fa-long-arrow-right fs-1"
                    onClick={() => this.handleReadMoreAdd()}
                  ></i>
                </>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Sliders;
{
  /* <div class="box-area">
<div class="img-area">
    <img src={d.img} alt="" />
</div>
<p className="text-hero-regular" style={{paddingTop:"2.5rem"}}>{d.des}
    <br />
    <b className="fs-5 fw-bold mt-4 pt-4" style={{ color: "#00537b" }}>{d.title}</b>
    <br />
    <span className="fs-5 fw-bold mt-2">{d.subtitle}</span>
</p>

</div> */
}
