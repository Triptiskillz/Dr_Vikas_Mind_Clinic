import { lazy, Suspense } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

// import './bootstrap-5.1.3-dist/css/bootstrap.min.css';
// import './bootstrap-5.1.3-dist/js/bootstrap.min.js'

import "./css/service.css";
import './css/Navbar.css';
import "./css/App.css";

import Navbar from "./comp/Navbar";
import Footer1 from "./comp/Footer1";
import Landing from "./pages/Landing";
import Service from "./pages/Service";
import About from "./pages/About";
import DetailService from "./pages/DetailService";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Loading from "./pages/Loading";
import Footer from "./comp/Footer";

// const Navbar = lazy(() => import("./comp/Navbar"));
// const Footer1 = lazy(() => import("./comp/Footer1"));
// const Landing = lazy(() => import("./pages/Landing"))
// const Service = lazy(() => import("./pages/Service"))
// const About = lazy(() => import("./pages/About"))
// const DetailService = lazy(() => import("./pages/DetailService"))
// const Contact = lazy(() => import("./pages/Contact"))
// const Gallery = lazy(() => import("./pages/Gallery"))
// const Blogs = lazy(() => import("./pages/Blogs"))
// const Blog = lazy(() => import("./pages/Blog"))
// const Loading = lazy(()=>import("./pages/Loading"))


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/blog" render={(props) => <Blog {...props} />} />
            <Route path="/blogs" render={(props) => <Blogs {...props} />} />
            <Route path="/gallery" render={(props) => <Gallery {...props} />} />
            <Route path="/about" render={(props) => <About {...props} />} />
            <Route path="/contact" render={(props) => <Contact {...props} />} />
            <Route path="/service" render={(props) => <Service {...props} />} />
            <Route path="/:name" render={(props) => <DetailService {...props} />} />
            <Route path="/" render={(props) => <Landing {...props} />} />
          </Switch>
        </Suspense>
        <Footer1 />
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
