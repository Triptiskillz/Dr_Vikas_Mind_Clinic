import { Component } from "react";
import { Link } from "react-router-dom";

class Footer1 extends Component {
    render() {
        return (
            <div className="footerimg">
                <div className="me-2 ms-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <h4 className="mb-1 mt-4 blue">
                                    About
                                </h4>
                                <p>
                                    Dr. Vikas Mind Clinic is a clinic for treating mental health disorders efficiently under the aegis of trusted doctor and therapist.
                                </p>
                            </div>
                            <div className="col-md-4">
                                <h4 className="mb-1 mt-4 blue">
                                    Quick Link
                                </h4>
                                <p>
                                    <Link to='/about' className="text-decoration-none text-dark"> About Us</Link><br />
                                    <Link to='/service' className="text-decoration-none text-dark">Services</Link><br />
                                    {/* <Link to=''> Blogs</Link><br/> */}
                                    <Link to='/contact' className="text-decoration-none text-dark">Contact</Link><br />
                                </p>
                            </div>
                            <div className="col-md-4">
                                <h4 className="mb-1 mt-4 blue">
                                    Contact
                                </h4>
                                <div class="d-flex justify-content-start mt-2">
                                    <i class="fa fa-phone-square fs-3  me-3" style={{ color: "#38a454" }} aria-hidden="true"></i>
                                    <p className="">  +91-9588310945</p>
                                </div>
                                <div class="d-flex justify-content-start mt-2">
                                    <i class="fa fa-envelope fs-3 me-3" style={{ color: "#38a454" }} aria-hidden="true"></i>
                                    <p>  hello@drvikasmindclinic.com</p>
                                </div>
                                <div class="d-flex justify-content-start mt-2">
                                    <i class="fa fa-home fs-2 me-3 " style={{ color: "#38a454" }} aria-hidden="true"></i>
                                    <p> First floor, near Sankalp hospital,Najafgarh road, Nangloi, 110041</p>
                                </div>




                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="me-2 ms-2">
                        <div className="d-flex justify-content-around text-center mt-4 pt-4">
                            <h5 className="text-white mt-1">© 2023 Cube InfoTech Inc. 2023. All rights reserved. </h5>
                            <ul className="list-inline fs-2 text-white">
                                <li className="d-inline pe-2 ps-2"><i class="fa fa-facebook-square" aria-hidden="true"></i></li>
                                <li className="d-inline  pe-2 ps-2"><i class="fa fa-linkedin-square" aria-hidden="true"></i></li>
                                <li className="d-inline pe-2 ps-2"><i class="fa fa-instagram" aria-hidden="true"></i></li>
                                <li className="d-inline pe-2 ps-2"><i class="fa fa-twitter-square" aria-hidden="true"></i></li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}
export default Footer1;