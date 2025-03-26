import React, { useState, useEffect } from "react";
import DataTable from "@/components/DataTable";

const DatasetPage = () => {
  // Sample data matching the screenshot
  const initialData = [
    {
      id: 1,
      name: "Contact properties",
      workspace: "Workspace 1, Workspace 2",
      type: "System",
      elements: 12,
      version: 1,
      lastModified: "2023-04-15",
      attachedTo: "Programs",
      status: "Enabled",
    },
    {
      id: 2,
      name: "Regional questions",
      workspace: "Workspace 1",
      type: "System",
      elements: 45,
      version: 5,
      lastModified: "2022-11-30",
      attachedTo: "Contacts",
      status: "Enabled",
    },
    {
      id: 3,
      name: "Skills",
      workspace: "Workspace 2",
      type: "System",
      elements: 45,
      version: 5,
      lastModified: "2022-11-30",
      attachedTo: "Contacts",
      status: "Enabled",
    },
    {
      id: 4,
      name: "Delegation properties",
      workspace: "Workspace 1, Workspace 2",
      type: "System",
      elements: 31,
      version: 1,
      lastModified: "2021-07-22",
      attachedTo: "Users",
      status: "Enabled",
    },
    {
      id: 5,
      name: "Automatic scoring",
      workspace: "Workspace 2",
      type: "System",
      elements: 4,
      version: 5,
      lastModified: "2020-03-11",
      attachedTo: "Project",
      status: "Disabled",
    },
    {
      id: 6,
      name: "Organization information",
      workspace: "Workspace 2",
      type: "Custom",
      elements: 4,
      version: 5,
      lastModified: "2020-03-11",
      attachedTo: "Project",
      status: "Enabled",
    },
    {
      id: 7,
      name: "Budget info",
      workspace: "Workspace 2",
      type: "Custom",
      elements: 4,
      version: 5,
      lastModified: "2020-03-11",
      attachedTo: "Project",
      status: "Disabled",
    },
  ];

  // Define table columns
  const columns = [
    { key: "name", label: "NAME", sortable: true },
    { key: "workspace", label: "WORKSPACE", sortable: true },
    { key: "type", label: "TYPE", sortable: true },
    { key: "elements", label: "ELEMENTS", sortable: true },
    { key: "version", label: "VERSION", sortable: true },
    { key: "lastModified", label: "LAST MODIFIED", sortable: true },
    { key: "attachedTo", label: "ATTACHED TO", sortable: false },
    { key: "status", label: "STATUS", sortable: true },
  ];

  // State for data management
  const [data, setData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(initialData);
  const [selectedRows, setSelectedRows] = useState([]);
  const [filterParams, setFilterParams] = useState({});
  const [sortParams, setSortParams] = useState({ key: null, direction: "asc" });
  const [searchQuery, setSearchQuery] = useState("");

  // Apply filters, sorting, and search to the data
  useEffect(() => {
    let result = [...data];

    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.workspace.toLowerCase().includes(query) ||
          item.type.toLowerCase().includes(query) ||
          item.attachedTo.toLowerCase().includes(query)
      );
    }

    // Apply filters
    Object.entries(filterParams).forEach(([key, value]) => {
      if (value) {
        result = result.filter((item) => String(item[key]) === String(value));
      }
    });

    // Apply sorting
    if (sortParams.key) {
      result.sort((a, b) => {
        const aValue = a[sortParams.key];
        const bValue = b[sortParams.key];

        if (typeof aValue === "string") {
          return sortParams.direction === "asc"
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        } else {
          return sortParams.direction === "asc"
            ? aValue - bValue
            : bValue - aValue;
        }
      });
    }

    setFilteredData(result);
  }, [data, filterParams, sortParams, searchQuery]);

  // Handler for row selection
  const handleRowSelect = (id, isSelected) => {
    setSelectedRows((prev) =>
      isSelected ? [...prev, id] : prev.filter((rowId) => rowId !== id)
    );
  };

  // Handler for "select all" checkbox
  const handleSelectAll = (isSelected) => {
    setSelectedRows(isSelected ? filteredData.map((row) => row.id) : []);
  };

  // Handler for sorting
  const handleSort = (key, direction) => {
    setSortParams({ key, direction });
  };

  // Handler for filtering
  const handleFilter = (filters) => {
    setFilterParams(filters);
  };

  // Handler for search
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Handler for row actions
  const handleRowAction = (id, action) => {
    console.log(`Action: ${action} on row with ID: ${id}`);

    // Example implementation for some actions
    switch (action) {
      case "enable":
        setData((prev) =>
          prev.map((row) =>
            row.id === id ? { ...row, status: "Enabled" } : row
          )
        );
        break;
      case "delete":
        setData((prev) => prev.filter((row) => row.id !== id));
        setSelectedRows((prev) => prev.filter((rowId) => rowId !== id));
        break;
      default:
        // For other actions like 'edit', 'viewVersions', etc.
        // You would typically navigate to another page or open a modal
        break;
    }
  };

  // Create dataset handler
  const handleCreateDataset = () => {
    console.log("Opening create dataset form");
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Datasets</h1>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center"
          onClick={handleCreateDataset}
        >
          <span className="mr-1">+</span> Create dataset
        </button>
      </div>

      <DataTable
        data={filteredData}
        columns={columns}
        selectedRows={selectedRows}
        onRowSelect={handleRowSelect}
        onSelectAll={handleSelectAll}
        onSort={handleSort}
        onFilter={handleFilter}
        onSearch={handleSearch}
        onRowAction={handleRowAction}
      />
    </div>
  );
};

export default DatasetPage;
