import { Component } from "react";
import Accordion from "react-bootstrap/Accordion";

class FAQ extends Component {
  render() {
    let { list } = this.props;
    // console.log(list)
    return (
      <>
        <div className="landingFAQ">
          <h3 class="text-center blue">
            Frequently Asked <span className="green"> Question </span>
          </h3>
          <div className="container pspace">
            <Accordion className="multi-column">
              {list !== undefined && (
                <>
                  {list.map((e, index) => (
                    <>
                      <div key={index}>
                        <Accordion.Item
                          eventKey={index}
                          className="border rounded-0 mt-2 p-1"
                        >
                          <Accordion.Header>
                            <p>{e.q}</p>
                          </Accordion.Header>
                          <Accordion.Body
                            style={{ backgroundColor: "#38a454" }}
                            className="p-4 rounded-bottom border-0 "
                          >
                            <p className="white">{e.ans}</p>
                          </Accordion.Body>
                        </Accordion.Item>
                      </div>
                    </>
                  ))}
                </>
              )}
            </Accordion>
          </div>
        </div>
      </>
    );
  }
}

export default FAQ;
