import { Typography, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

import { navItems } from "@/utils/constant";

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

const Navigation = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="grid gap-8 md:gap-4">
      <Typography.Title
        level={5}
        className="!text-2xl !text-white font-drone-ranger"
      >
        Navigation
      </Typography.Title>

      <Row
        gutter={[
          { xl: 32, md: 28, sm: 8, xs: 8 },
          { xl: 12, md: 8, sm: 8, xs: 8 },
        ]}
        className="max-w-[366px]"
      >
        {extraNav.map((item) => {
          return (
            <Col key={item.id} span={8}>
              <Typography.Paragraph
                className="text-white !text-base font-medium cursor-pointer"
                onClick={() => handleNavigate(item.path)}
              >
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
