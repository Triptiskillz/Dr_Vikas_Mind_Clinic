import { Component } from "react";

class RankList extends Component {
  render() {
    let { show } = this.props;
    return (
      <>
        <div
          className={
            show === true
              ? "row list text-center mt-4 p-4 text-white"
              : "row text-center"
          }
        >
          <div
            className="col-md-3 m-auto"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
          >
            <p
              className={
                show === true
                  ? "fs-1  text-white fw-bold"
                  : " fs-1 fw-bold blue"
              }
            >
              30 years{" "}
            </p>
            <p className={show === true ? "text-white size" : "size"}>
              of experience
            </p>
          </div>
          <div
            className="col-md-3"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
          >
            <p
              className={
                show === true ? "fs-1 text-white fw-bold" : " fs-1 fw-bold blue"
              }
            >
              100+{" "}
            </p>
            <p className={show === true ? "text-white size" : "size"}>
              patients
            </p>
          </div>
          <div
            className="col-md-3"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
          >
            <p
              className={
                show === true ? "fs-1 text-white fw-bold" : "fs-1 fw-bold blue"
              }
            >
              4k{" "}
            </p>
            <p className={show === true ? "text-white size" : "size"}>
              hours spend with patint
            </p>
          </div>
          <div
            className="col-md-3"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
          >
            <p
              className={
                show === true ? "fs-1 text-white fw-bold" : " fs-1 fw-bold blue"
              }
            >
              30 years{" "}
            </p>
            <p className={show === true ? "text-white size" : "size"}>
              of experience
            </p>
          </div>
        </div>
      </>
    );
  }
}
export default RankList;
