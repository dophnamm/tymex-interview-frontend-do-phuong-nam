import { Button, Tabs } from "antd";

import MoreIcon from "@/components/Icons/MoreIcon";

import { categories } from "@/utils/constant";

import styles from "./styles.module.scss";
import { IParameters } from "@/pages/Marketplace/api";

interface IProps {
  onSearch: (params: IParameters) => void;
}

const Categories = (props: IProps) => {
  const { onSearch } = props;

  const handleOnChange = (activeKey: string) => {
    onSearch({ category: activeKey });
  };

  return (
    <div>
      <Tabs
        defaultActiveKey="all"
        items={categories.map((category) => {
          return {
            key: category.id,
            label: <Button size="large">{category.name}</Button>,
            children: null,
          };
        })}
        more={{
          icon: <MoreIcon />,
        }}
        tabBarGutter={24}
        className={styles.categories}
        popupClassName={styles.moreCategories}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Categories;
