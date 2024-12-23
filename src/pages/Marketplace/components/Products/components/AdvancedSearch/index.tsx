import { useEffect, useState, memo } from "react";
import { Button, Col, Input, Popover, Row } from "antd";

import { IFormSearch } from "@/models/advancedSearch";

import SearchIcon from "@/components/Icons/SearchIcon";

import { useDebounce } from "@/hooks";

import FormAdvancedSearch from "../FormAdvancedSearch";

import styles from "./styles.module.scss";

interface IProps {
  onSearch: (values: IFormSearch) => void;
}

const AdvancedSearch = (props: IProps) => {
  const { onSearch } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchKey, setSearchKey] = useState<string>("");
  const debouncedSearchKey = useDebounce(searchKey, 400);

  useEffect(() => {
    onSearch({ name: debouncedSearchKey });
  }, [debouncedSearchKey]);

  const handleOnFinish = (values: IFormSearch) => {
    onSearch(values);

    if (isOpen) setIsOpen(false);
  };

  return (
    <div>
      <Row className="xxs:justify-end xs:justify-end sm:justify-end md:justify-end gap-10 xs:gap-6 xxs:gap-6">
        <Col xl={24}>
          <Input
            placeholder="Quick Search"
            size="large"
            prefix={<SearchIcon />}
            onChange={(e) => setSearchKey(e.target.value)}
          />
        </Col>

        <Col className="hidden sm:block md:block xs:block xxs:block">
          <Popover
            placement="bottomRight"
            overlayClassName={styles.popover}
            content={<FormAdvancedSearch onFinish={handleOnFinish} />}
            open={isOpen}
            onOpenChange={(open) => setIsOpen(open)}
            trigger={["click"]}
          >
            <Button type="primary" size="large">
              Filter
            </Button>
          </Popover>
        </Col>

        <Col span={24} className="sm:hidden md:hidden xs:hidden xxs:hidden">
          <FormAdvancedSearch onFinish={handleOnFinish} />
        </Col>
      </Row>
    </div>
  );
};

export default memo(AdvancedSearch);
