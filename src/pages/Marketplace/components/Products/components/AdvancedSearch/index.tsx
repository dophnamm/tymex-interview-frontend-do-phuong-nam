import { useEffect, useState, memo } from "react";
import { Input } from "antd";

import { IFormSearch } from "@/models/advancedSearch";

import SearchIcon from "@/components/Icons/SearchIcon";

import { useDebounce } from "@/hooks";

import FormAdvancedSearch from "../FormAdvancedSearch";

interface IProps {
  onSearch: (values: IFormSearch) => void;
}

const AdvancedSearch = (props: IProps) => {
  const { onSearch } = props;

  const [searchKey, setSearchKey] = useState<string>("");
  const debouncedSearchKey = useDebounce(searchKey, 400);

  useEffect(() => {
    onSearch({ name: debouncedSearchKey });
  }, [debouncedSearchKey]);

  const handleOnFinish = (values: IFormSearch) => {
    onSearch(values);
  };

  return (
    <div>
      <div className="flex flex-col gap-10">
        <Input
          placeholder="Quick Search"
          size="large"
          prefix={<SearchIcon />}
          onChange={(e) => setSearchKey(e.target.value)}
        />

        <FormAdvancedSearch onFinish={handleOnFinish} />
      </div>
    </div>
  );
};

export default memo(AdvancedSearch);
