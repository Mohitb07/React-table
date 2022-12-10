import React, { useMemo, useState } from 'react';
import ReactDropdown from 'react-dropdown';
import { sort } from '../../utils/sort';
import { sortString } from '../../utils/sortString';

type TableHeadingProps = {
  value: string;
  setRecords: any;
  records: any;
};

const OPTIONS = ['Unsort', 'ASC', 'DESC'];

const TableHeading: React.FC<TableHeadingProps> = ({
  value,
  setRecords,
  records,
}) => {
  const [currentSelection, setCurrentSelection] = useState(OPTIONS[0]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const originalData = useMemo(() => [...records], []);

  const filterAsc = (data: any[], value: string) => {
    const copy = [...data];
    if (typeof copy[0][`${value}`] === 'string') {
      sortString(copy, value, 'ASC')
    } else {
      sort(copy, value, "ASC")
    }
    setRecords(copy);
  };

  const filterDesc = (data: any[], value: string) => {
    const copy = [...data];
    if (typeof copy[0][`${value}`] === 'string') {
      sortString(copy, value, 'DESC')
    } else {
      sort(copy, value, "DESC")
    }
    setRecords(copy);
  };

  const onValueSelect = (e: any, value: string) => {
    if (currentSelection === e.value) return;
    setCurrentSelection(e.value);
    if (e.value === 'ASC') {
      filterAsc(records, value);
    }
    if (e.value === 'DESC') {
      filterDesc(records, value);
    }
    if (e.value === 'Unsort') {
      setRecords(originalData);
    }
  };

  const hiddenClassName =
    value === 'change_background' ? 'hidden' : 'ml-[1rem]';

  return (
    <th scope="col" className="p-[2rem]">
      <div className="flex justify-center items-center">
        <p>{value}</p>
        <ReactDropdown
          className={hiddenClassName}
          options={OPTIONS}
          onChange={(e) => onValueSelect(e, value)}
          value={currentSelection}
          placeholder="Select an option"
        />
      </div>
    </th>
  );
};
export default TableHeading;
