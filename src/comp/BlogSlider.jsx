import { Component } from "react";

class BlogSlider extends Component {
    state = {
        data: [
            {
                id: 1,
                img: "https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png",
                des: "Lorem ipsum dolor sit amet,conse ctetur adipes iscing elit, sed do eiusmod tempor incidi dunt ut labore etdolore magna aliqua.",
                title: "Moorie Hussy",
                subtitle: "Anxiety Disorder"
            },
            {
                id: 2,
                img: "https://th.bing.com/th/id/OIP.20G4pPlkfedAJpW1UbXTOwHaEK?w=279&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                des: "Lorem ipsum dolor sit amet,conse ctetur adipes iscing elit, sed do eiusmod tempor incidi dunt ut labore etdolore magna aliqua.",
                title: "Moorie Hussy",
                subtitle: "Anxiety Disorder"
            },
            {
                id: 3,
                img: "https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png",
                des: "Lorem ipsum dolor sit amet,conse ctetur adipes iscing elit, sed do eiusmod tempor incidi dunt ut labore etdolore magna aliqua.",
                title: "Moorie Hussy",
                subtitle: "Anxiety Disorder"
            }, {
                id: 4,
                img: "https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png",
                des: "Lorem ipsum dolor sit amet,conse ctetur adipes iscing elit, sed do eiusmod tempor incidi dunt ut labore etdolore magna aliqua.",
                title: "Moorie Hussy",
                subtitle: "Anxiety Disorder"
            }, {
                id: 5,
                img: "https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png",
                des: "Lorem ipsum dolor sit amet,conse ctetur adipes iscing elit, sed do eiusmod tempor incidi dunt ut labore etdolore magna aliqua.",
                title: "Moorie Hussy",
                subtitle: "Anxiety Disorder"
            }
        ],
        startnum: 0,
        number: 2
    }
    handleReadMoreAdd = () => {
        let s1 = { ...this.state }
        s1.startnum = s1.number + 1
        s1.number += 3
        this.setState(s1)
    }
    handleRemoveNumber = () => {
        let s1 = { ...this.state }
        s1.number -= 3
        s1.startnum = s1.number - 2
        this.setState(s1)
    }
    render() {
        let { data, number, startnum } = this.state
        let startIndex = startnum;
        let endIndex = number
        // console.log(endIndex,data.length)
        var prod1 = data.length > 3 ? data.filter((lt, index) => index >= startIndex && index <= endIndex)
            : data
        return (
            <>
                <div className="me-2 ms-2">
                    <div className="row">
                        {prod1.map((d) => (
                            <>
                                <div className="col-md-4 mb-4" data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="300"
                                    data-aos-offset="18">
                                    <div class="box-area">
                                        <div class="img-area1 mb-4">
                                            <img src={d.img} alt="" />
                                        </div>
                                        <b className="fs-3 fw-bold" style={{ color: "#00537b" }}>{d.title}</b>

                                        <p className="fs-5">{d.des}

                                        </p>

                                    </div>
                                </div>
                            </>
                        ))}

                        <div className="row">
                            <div className="col-1 text-white fs-1" >
                                {startnum === 0 ? (<>
                                    <i className="fas fa-long-arrow-alt-left"></i>

                                </>) : (<>
                                    <i className="fas fa-long-arrow-alt-left" onClick={() => this.handleRemoveNumber()}></i>

                                </>)}
                            </div>
                            {/* <div className="col-1"></div> */}
                            <div className="col-1 text-white fs-1 ms-2">
                                {data.length === number ? (<>
                                    <i className="fas fa-long-arrow-alt-right"></i>

                                </>) : (<>
                                    <i className="fas fa-long-arrow-alt-right" onClick={() => this.handleReadMoreAdd()}></i>

                                </>)}
                            </div>

                        </div>
                    </div>

                </div>
            </>

        );
    }
}
export default BlogSlider;
