import { Button, Form, Input, Typography } from "antd";

const SubscribeForm = () => {
  return (
    <div className="grid gap-8 md:gap-4">
      <Typography.Title
        level={5}
        className="!text-2xl !text-white font-drone-ranger"
      >
        Subscribe to receive our latest update
      </Typography.Title>

      <Form className="flex gap-5">
        <Input size="large" placeholder="Your email address" />

        <Button
          size="large"
          type="primary"
          className="shadow-btn-shadow font-semibold px-12 text-base"
        >
          Subscribe
        </Button>
      </Form>
    </div>
  );
};

export default SubscribeForm;
