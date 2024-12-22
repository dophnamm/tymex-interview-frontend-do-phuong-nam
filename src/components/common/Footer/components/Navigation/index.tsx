import { Typography, Row, Col } from "antd";

import { navItems } from "@/utils/constant";

const Navigation = () => {
  const extraNav = [
    ...navItems,
    {
      id: "faqs",
      path: "",
      label: "FAQs",
    },
    {
      id: "news",
      path: "",
      label: "News",
    },
    {
      id: "community",
      path: "",
      label: "Community",
    },
  ];

  return (
    <div className="grid gap-8">
      <Typography.Title
        level={5}
        className="!text-2xl !text-white font-drone-ranger"
      >
        Navigation
      </Typography.Title>

      <Row gutter={[32, 12]} className="max-w-[366px]">
        {extraNav.map((item) => {
          return (
            <Col key={item.id} span={8}>
              <Typography.Paragraph className="text-white !text-base font-medium">
                {item.label}
              </Typography.Paragraph>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Navigation;