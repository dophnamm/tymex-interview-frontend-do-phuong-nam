import { Row, Col, Divider, Typography } from "antd";

import Navigation from "./components/Navigation";
import ContactUs from "./components/ContactUs";
import SubscribeForm from "./components/SubscribeForm";

const Footer = () => {
  return (
    <div className="bg-black-100 pt-[60px] pb-[208px]">
      <div className="mx-[160px]">
        <Row gutter={[24, 40]}>
          <Col md={24} xs={24} xl={9}>
            <Navigation />
          </Col>

          <Col md={24} xs={24} xl={6}>
            <ContactUs />
          </Col>

          <Col md={24} xs={24} xl={9}>
            <SubscribeForm />
          </Col>
        </Row>

        <Divider className="mt-[60px] mb-10 bg-black-200" />

        <Row
          gutter={[
            { sm: 16, xs: 16 },
            { sm: 16, xs: 16 },
          ]}
          align="middle"
          justify="space-between"
        >
          <Col xs={24} sm={24} md={24} xl={12}>
            <Typography className="text-base font-medium">
              ©2023 Tyme - Edit. All Rights reserved.
            </Typography>
          </Col>

          <Col xs={24} sm={24} md={24} xl={12}>
            <div
              className={`
                flex gap-[60px] justify-end
                sm:flex-col sm:gap-3
                xs:flex-col xxs:flex-col
                xs:gap-3 xxs:gap-3
                xs:justify-start xxs:justify-start
              `}
            >
              <Typography className="text-base font-medium">
                Security
              </Typography>

              <Typography className="text-base font-medium">Legal</Typography>

              <Typography className="text-base font-medium">Privacy</Typography>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
