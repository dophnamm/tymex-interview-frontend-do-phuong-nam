import { Select as AntSelect, SelectProps } from "antd";

import ChevronDownIcon from "../Icons/ChevronDownIcon";

import styles from "./styles.module.scss";

const Select = (props: SelectProps) => {
  return (
    <AntSelect
      suffixIcon={<ChevronDownIcon />}
      {...props}
      popupClassName={styles.select}
    />
  );
};

export default Select;
