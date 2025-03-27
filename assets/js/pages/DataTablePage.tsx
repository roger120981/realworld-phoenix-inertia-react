import React, { useState } from "react";
import DataTable from "@/components/DataTable";
import { router } from "@inertiajs/react";

interface Props {
  items: {
    id: number;
    name: string;
    workspace: string;
    type: string;
    elements: number;
    version: number;
    lastModified: string;
    attachedTo: string;
    status: "Enabled" | "Disabled";
  }[];
  sort: {
    key:
      | "name"
      | "workspace"
      | "type"
      | "elements"
      | "version"
      | "lastModified"
      | "status";
    direction: "asc" | "desc";
  } | null;
  search: string;
}

const DatasetPage = ({ items: data, sort, search }: Props) => {
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
  const [selectedRows, setSelectedRows] = useState([]);

  // Handler for row selection
  const handleRowSelect = (id, isSelected) => {
    console.log({ id, isSelected });
    setSelectedRows((prev) =>
      isSelected ? [...prev, id] : prev.filter((rowId) => rowId !== id)
    );
  };

  // Handler for "select all" checkbox
  const handleSelectAll = (isSelected) => {
    setSelectedRows(isSelected ? data.map((row) => row.id) : []);
  };

  // Handler for sorting
  const handleSort = (key, direction) => {
    router.reload({
      only: ["items", "sort"],
      data: { sort: key, sort_dir: direction },
    });
  };

  // Handler for search
  const handleSearch = (query) => {
    router.reload({
      only: ["items", "search"],
      data: { search: query },
    });
  };

  // Handler for row actions
  const handleRowAction = (id, action) => {
    console.log(`Action: ${action} on row with ID: ${id}`);
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
        data={data}
        columns={columns}
        selectedRows={selectedRows}
        sortConfig={sort}
        searchValue={search}
        onRowSelect={handleRowSelect}
        onSelectAll={handleSelectAll}
        onSort={handleSort}
        onSearch={handleSearch}
        onRowAction={handleRowAction}
      />
    </div>
  );
};

export default DatasetPage;
