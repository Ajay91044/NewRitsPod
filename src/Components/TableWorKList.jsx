import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { MyContext } from './Context/MyProvider';

function TableWorkList() {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const { selectedRows, setSelectedRows, allSelected, setAllSelected } = useContext(MyContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('/Op1TableData.json'); // Adjust the path if needed
        setColumns(data.columns);
        setRows(data.rows);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSelectRow = (id, name) => {
    setSelectedRows(prevState => ({
      ...prevState,
      [id]: { selected: !prevState[id]?.selected, name }
    }));
  };

  const handleSelectAll = () => {
    const newSelectedRows = {};
    rows.forEach(row => {
      newSelectedRows[row.ID] = { selected: !allSelected, name: row.Name };
    });
    setSelectedRows(newSelectedRows);
    setAllSelected(!allSelected);
  };
console.log(selectedRows,allSelected);
  return (
    <section style={{ marginTop: '20px', marginBottom: '5px', paddingBottom: '20px', borderBottom: '2px solid #F7F7F7' }}>
      <div className='DynamicTableContainer' style={{ width: '90%' }}>
        <form>
          <div className='DynamicTableInputContainer'>
            <table className='DynamicTable'>
              <thead>
                <tr>
                  <th style={{ width: '2px' }}>
                    <input
                      type="checkbox"
                      checked={allSelected}
                      onChange={handleSelectAll}
                    />
                  </th>
                  {columns.map((column, index) => (
                    <th key={index}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td>
                      <input
                        type="checkbox"
                        checked={!!selectedRows[row.ID]?.selected}
                        onChange={() => handleSelectRow(row.ID, row.Name)}
                      />
                    </td>
                    {columns.map((column, colIndex) => (
                      <td key={colIndex}>{row[column]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </section>
  );
}

export default TableWorkList;
