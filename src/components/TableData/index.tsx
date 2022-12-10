import React from 'react';

type TableDataProps = {
  value: string;
};

const TableData: React.FC<TableDataProps> = ({ value }) => {
    
  return (
    <>
      <td className="p-[2rem]">{value}</td>
    </>
  );
};
export default TableData;
