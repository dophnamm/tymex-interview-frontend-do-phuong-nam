import { Typography } from "antd";

import MessagesIcon from "@/components/Icons/MessagesIcon";
import PhoneIcon from "@/components/Icons/PhoneIcon";

const ContactUs = () => {
  return (
    <div className="grid gap-8 md:gap-4">
      <Typography.Title
        level={5}
        className="!text-2xl !text-white font-drone-ranger"
      >
        Contact Us
      </Typography.Title>

      <div className="grid gap-8 md:gap-2">
        <div className="flex items-center gap-2">
          <PhoneIcon />

          <Typography.Paragraph className="text-white !text-base font-medium">
            01234568910
          </Typography.Paragraph>
        </div>

        <div className="flex items-center gap-2">
          <MessagesIcon />

          <Typography.Paragraph className="text-white !text-base font-medium">
            tymex-talent@tyme.com
          </Typography.Paragraph>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
