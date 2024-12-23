import { Row, Col, Divider, Typography } from "antd";

import Navigation from "./components/Navigation";
import ContactUs from "./components/ContactUs";
import SubscribeForm from "./components/SubscribeForm";

const Footer = () => {
  return (
    <div className="bg-black-100 pt-[60px] pb-[208px]">
      <div className="mx-[160px] xs:mx-20 xxs:mx-5 sm:mx-20">
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
            { lg: 32, md: 32, sm: 16, xs: 16 },
            { lg: 32, md: 32, sm: 16, xs: 16 },
          ]}
          align="middle"
          justify="space-between"
          className={`lg:flex-row-reverse xl:flex-row-reverse xxl:flex-row-reverse`}
        >
          <Col>
            <div
              className={`
                flex justify-end gap-[60px]
                md:flex-col md:gap-4
                sm:flex-col sm:gap-4
                xs:flex-col xs:gap-4
                xxs:flex-col xxs:gap-4
              `}
            >
              <Typography className="text-base font-medium">
                Security
              </Typography>

              <Typography className="text-base font-medium">Legal</Typography>

              <Typography className="text-base font-medium">Privacy</Typography>
            </div>
          </Col>

          <Col xs={24} sm={24} md={24} xl={12}>
            <Typography className="text-base font-medium">
              ©2023 Tyme - Edit. All Rights reserved.
            </Typography>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
