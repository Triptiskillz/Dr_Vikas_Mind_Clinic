import { Component } from "react";
import img20 from '../images/20.png'
import img21 from '../images/21.png'
import img22 from '../images/22.png'


class Footer extends Component {
    render(){
        return(
            <>
            <div className="bg-light" style={{ marginTop: "10%" }}>
                    <div className="footer-top">
                        <div className="row pt-4">
                            <div className="col text-center">
                                <div className="d-flex justify-content-center">
                                    <div className="m-2" style={{ borderRadius: "1.5rem" }}>
                                        <img src={img20} width={100} />
                                    </div>
                                </div>
                                <h2 className="text-bule">Contact us</h2>
                                <p className="para-black"> +91-000000000</p>
                            </div>
                            <div className="col text-center">
                                <div className="d-flex justify-content-center">
                                    <div className="m-2" style={{ borderRadius: "1.5rem" }}>
                                        <img src={img21} width={100} />
                                    </div>
                                </div>

                                <h2 className="text-bule">Email Us</h2>
                                <p className="para-black"> abc@gmail.com</p>
                            </div>
                            <div className="col text-center">
                                <div className="d-flex justify-content-center">
                                    <div className="m-2" style={{ borderRadius: "1.5rem" }}>
                                        <img src={img22} width={100} />
                                    </div>
                                </div>

                                <h2 className="text-bule">Address</h2>
                                <p className="para-black"> No: 58 A, East Madison<br />
                                    Street,Baltimore, MD, USA
                                    4508</p>
                            </div>

                        </div>
                    </div>

                    <div className="footer">
                        <div className="contact d-flex justify-content-center mt-4 mb-4">
                            <div className="fs-1 fw-bold text-center text-white mt-4 pt-4 mb-4 pb-4">
                                <h1 className="fs-1 fw-bold text-white mt-4 pt-4">Book an Appointment <br />Now</h1>

                                <a href="#" class="btn w-50 mt-4 mb-4 fw-bold fs-5 shadow-none btncontact1" >
                                    Contact
                                </a>
                            </div>

                        </div>
                        <div className="d-flex justify-content-around text-center mt-4 pt-4">
                            <p className="text-white fs-5 mt-1">© 2023 Dr. Vikash . All Rights Reserved. Designed By me</p>
                            <ul className="list-inline fs-2 text-white">
                                <li className="d-inline pe-2 ps-2"><i class="fa fa-facebook-square" aria-hidden="true"></i></li>
                                <li className="d-inline  pe-2 ps-2"><i class="fa fa-linkedin-square" aria-hidden="true"></i></li>
                                <li className="d-inline pe-2 ps-2"><i class="fa fa-instagram" aria-hidden="true"></i></li>
                                <li className="d-inline pe-2 ps-2"><i class="fa fa-twitter-square" aria-hidden="true"></i></li>

                            </ul>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}
export default Footer;