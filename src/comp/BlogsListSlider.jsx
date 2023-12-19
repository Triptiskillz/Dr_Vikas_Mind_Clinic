import { Component } from "react";
import { Link } from "react-router-dom";

class BlogsListSlider extends Component {
  state = {
    data: [
      {
        id: 1,
        img: "https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png",
        des: "Lorem ipsum dolor sit amet,conse ctetur adipes iscing elit, sed do eiusmod tempor incidi dunt ut labore etdolore magna aliqua.",
        title: "Moorie Hussy",
        subtitle: "Anxiety Disorder",
      },
      {
        id: 2,
        img: "https://th.bing.com/th/id/OIP.20G4pPlkfedAJpW1UbXTOwHaEK?w=279&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        des: "Lorem ipsum dolor sit amet,conse ctetur adipes iscing elit, sed do eiusmod tempor incidi dunt ut labore etdolore magna aliqua.",
        title: "Moorie Hussy",
        subtitle: "Anxiety Disorder",
      },
      {
        id: 3,
        img: "https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png",
        des: "Lorem ipsum dolor sit amet,conse ctetur adipes iscing elit, sed do eiusmod tempor incidi dunt ut labore etdolore magna aliqua.",
        title: "Moorie Hussy",
        subtitle: "Anxiety Disorder",
      },
      {
        id: 4,
        img: "https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png",
        des: "Lorem ipsum dolor sit amet,conse ctetur adipes iscing elit, sed do eiusmod tempor incidi dunt ut labore etdolore magna aliqua.",
        title: "Moorie Hussy",
        subtitle: "Anxiety Disorder",
      },
      {
        id: 5,
        img: "https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png",
        des: "Lorem ipsum dolor sit amet,conse ctetur adipes iscing elit, sed do eiusmod tempor incidi dunt ut labore etdolore magna aliqua.",
        title: "Moorie Hussy",
        subtitle: "Anxiety Disorder",
      },
    ],
  };

  render() {
    let { data } = this.state;

    return (
      <>
        <div className="row">
          {data.map((d) => (
            <>
              <div className="col-md-4">
                <div class="box-area" style={{ padding: "0px" }}>
                  <div class="pb-4">
                    <img
                      src={d.img}
                      alt=""
                      style={{ height: "13rem", width: "100%" }}
                    />
                  </div>
                  <b
                    className="fs-5 fw-bold mt-4 pt-4 ps-4"
                    style={{ color: "#00537b" }}
                  >
                    {d.title}
                  </b>

                  <p className="fs-6 ps-4 pe-4 pb-4 pt-2">
                    {d.des}
                    <br />
                    <Link
                      to="/blog"
                      className="mt-4 fw-bold text-decoration-none text-dark"
                    >
                      {" "}
                      Read More..
                    </Link>
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </>
    );
  }
}
export default BlogsListSlider;
