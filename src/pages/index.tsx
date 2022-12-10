import { useState } from 'react';

import { Meta } from '../layouts/Meta';
import { Main } from '../templates/Main';
import data from '../../public/assets/data.json';
import TableHeading from '../components/TableHeading';

const firstRow = data[0];
let GENERATED_COLUMNS = Object.keys(firstRow);
GENERATED_COLUMNS = GENERATED_COLUMNS.concat(['change_background']);

const changeTextColor = (isTruthy: boolean) => {
  return `${isTruthy ? 'text-green-500' : 'text-red-500'} p-2`;
};

export default function Home() {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [records, setRecords] = useState(data);

  const changeBackground = (id: number) => {
    if (selectedRow && selectedRow === id) {
      setSelectedRow(null);
    } else {
      setSelectedRow(id);
    }
  };
  
  return (
    <Main meta={<Meta title="React Table" description="" />}>
      <div className="p-4 table-responsive-sm">
        <table className="border-slate-500 table text-white">
          <thead className="text-center">
            <tr className="bg-slate-800">
              {GENERATED_COLUMNS.map((col) => (
                <TableHeading
                  key={col}
                  value={col}
                  setRecords={setRecords}
                  records={records}
                />
              ))}
            </tr>
          </thead>
          <tbody className="text-center">
            {records.map((item) => (
              <tr
                key={item.id}
                className={`${
                  selectedRow && item.id === selectedRow && 'bg-violet-700'
                }`}
              >
                <td className="p-2">{item.id}</td>
                <td className="p-2">{item.first_name}</td>
                <td className="p-2">{item.last_name}</td>
                <td className="p-2">{item.email}</td>
                <td className="p-2">{item.gender}</td>
                <td className="p-2">{item.ip_address}</td>
                <td className="p-2">{item['airport code']}</td>
                <td className="p-2">{item.time}</td>
                <td className={changeTextColor(item.status)}>
                  {item.status.toString()}
                </td>
                <td className="p-2">{item.mobile}</td>
                <td className="p-2">{item.area}</td>
                <td className={changeTextColor(item.show)}>
                  {item.show.toString()}
                </td>
                <td className={changeTextColor(item.edit)}>
                  {item.edit.toString()}
                </td>
                <td className="p-2">
                  <button
                    onClick={() => changeBackground(item.id)}
                    className="bg-violet-500 rounded-full px-5 py-2"
                  >
                    {selectedRow && item.id === selectedRow
                      ? 'Remove'
                      : 'Select'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Main>
  );
}
