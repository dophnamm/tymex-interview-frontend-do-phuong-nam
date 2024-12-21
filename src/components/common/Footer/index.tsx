import { Row, Col, Divider, Typography } from "antd";

import Navigation from "./components/Navigation";
import ContactUs from "./components/ContactUs";
import SubscribeForm from "./components/SubscribeForm";

const Footer = () => {
  return (
    <div className="bg-black-100 pt-[60px] pb-[208px]">
      <div className="mx-[160px]">
        <Row>
          <Col span={9}>
            <Navigation />
          </Col>

          <Col span={6}>
            <ContactUs />
          </Col>

          <Col span={9}>
            <SubscribeForm />
          </Col>
        </Row>

        <Divider className="mt-[60px] mb-10 bg-black-200" />

        <Row align="middle" justify="space-between">
          <Col>
            <Typography className="text-base font-medium">
              ©2023 Tyme - Edit. All Rights reserved.
            </Typography>
          </Col>

          <Col>
            <Row gutter={60} align="middle" justify="end">
              <Col>
                <Typography className="text-base font-medium">
                  Security
                </Typography>
              </Col>

              <Col>
                <Typography className="text-base font-medium">Legal</Typography>
              </Col>

              <Col>
                <Typography className="text-base font-medium">
                  Privacy
                </Typography>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
