import React, { useState } from "react";
import { Table, DatePicker, Button } from "antd";

const dataSource = [
  {
    key: "1",
    name: "John",
    age: 32,
    address: "New York",
    date: "2023-06-01",
  },
  {
    key: "2",
    name: "Jane",
    age: 28,
    address: "California",
    date: "2023-06-04",
  },
  {
    key: "2",
    name: "Jane",
    age: 28,
    address: "California",
    date: "2023-06-20",
  },
  {
    key: "2",
    name: "Jane",
    age: 28,
    address: "California",
    date: "2023-06-22",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    filters: [
      {
        text: "Last 7 Days",
        value: "last7days",
      },
      {
        text: "Last Month",
        value: "lastmonth",
      },
      {
        text: "Custom Range",
        value: "custom",
      },
    ],
    onFilter: (value, record) => {
      let currentDate = new Date();

      if (value === "last7days") {
        let lastWeekDate = new Date();
        lastWeekDate.setDate(lastWeekDate.getDate() - 7);
        return (
          new Date(record.date) > lastWeekDate &&
          new Date(record.date) <= currentDate
        );
      }

      if (value === "lastmonth") {
        let lastMonthDate = new Date();
        lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
        return (
          new Date(record.date) > lastMonthDate &&
          new Date(record.date) <= currentDate
        );
      }

      return true;
    },
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => {
      const [dates, setDates] = useState([]);

      const handleApply = () => {
        setSelectedKeys(dates);
        confirm();
      };

      const handleReset = () => {
        setDates([]);
        clearFilters();
      };

      return (
        <div style={{ padding: 8 }}>
          <DatePicker.RangePicker
            value={dates}
            onChange={setDates}
            style={{ marginBottom: 8, display: "block" }}
            allowClear={false}
          />
          <Button onClick={handleReset} style={{ marginRight: 8 }}>
            Reset
          </Button>
          <Button type="primary" onClick={handleApply}>
            Apply
          </Button>
        </div>
      );
    },
    render: (text, record) => new Date(record.date).toLocaleDateString(),
  },
];

const FilterTable = () => {
  const [filteredInfo, setFilteredInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
  };

  const filteredDataSource = dataSource.filter((record) => {
    let dateFilter = filteredInfo.date || [];
    return (
      (!dateFilter.length ||
        (new Date(record.date) >= new Date(dateFilter[0]) &&
          new Date(record.date) <= new Date(dateFilter[1]))) &&
      (!filteredInfo.name || record.name.includes(filteredInfo.name[0]))
    );
  });

  return (
    <Table
      dataSource={filteredDataSource}
      columns={columns}
      onChange={handleChange}
      pagination={{ pageSize: 10 }}
    />
  );
};

export default FilterTable;
