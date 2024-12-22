import { Button, Form, Slider, Typography } from "antd";

import Select from "@/components/Select";
import ClearIcon from "@/components/Icons/ClearIcon";
import { IFormSearch } from "@/models/advancedSearch";

import { tiers, theme, time, price } from "@/utils/constant";

import styles from "./styles.module.scss";

interface IProps {
  onFinish: (values: IFormSearch) => void;
}

const FormAdvancedSearch = (props: IProps) => {
  const { onFinish } = props;

  const [formInstance] = Form.useForm();

  const defaultValues: IFormSearch = {
    prices: [0.01, 200],
    tier: "",
    theme: "",
    time: "",
    price: "",
  };

  return (
    <Form
      layout="vertical"
      form={formInstance}
      initialValues={defaultValues}
      onFinish={onFinish}
    >
      <Form.Item label="Price" name="prices" className="mb-0">
        <Slider
          range
          min={0.01}
          max={200}
          className={styles.slider}
          tooltip={{
            rootClassName: styles.sliderTooltip,
            formatter: (value) => `${value} ETH`,
          }}
        />
      </Form.Item>

      <div className="flex justify-between mb-10">
        <Typography.Paragraph className="text-base !text-grey-200 font-medium">
          0.01 ETH
        </Typography.Paragraph>
        <Typography.Paragraph className="text-base !text-grey-200 font-medium">
          200 ETH
        </Typography.Paragraph>
      </div>

      <Form.Item label="Tier" name="tier">
        <Select size="large" options={tiers} />
      </Form.Item>

      <Form.Item label="Theme" name="theme">
        <Select size="large" options={theme} />
      </Form.Item>

      <Form.Item label="Time" name="time">
        <Select size="large" options={time} />
      </Form.Item>

      <Form.Item label="Price" name="price">
        <Select size="large" options={price} />
      </Form.Item>

      <div className="flex justify-between mt-[30px]">
        <Button
          type="text"
          size="large"
          icon={<ClearIcon />}
          className="!text-white !px-0 text-base font-semibold"
        >
          Reset filter
        </Button>
        <Button
          type="primary"
          size="large"
          htmlType="submit"
          className="px-14 text-base font-semibold"
        >
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default FormAdvancedSearch;
