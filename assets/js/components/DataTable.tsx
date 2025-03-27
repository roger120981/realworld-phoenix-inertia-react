import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  Filter,
  Search,
  MoreVertical,
} from "lucide-react";

// Utility function to format date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toISOString().split("T")[0];
};

// Column header component
const ColumnHeader = ({ title, sortable, sorted, sortDirection, onSort }) => {
  const handleSort = () => {
    if (sortable) {
      onSort(
        title.toLowerCase(),
        sorted ? (sortDirection === "asc" ? "desc" : "asc") : "asc"
      );
    }
  };

  return (
    <th
      className={`p-3 text-sm font-medium text-gray-600 ${
        sortable ? "cursor-pointer" : ""
      }`}
      onClick={handleSort}
    >
      <div className="flex items-center">
        {title}
        {sortable && (
          <span className="ml-1">
            {sorted ? (
              sortDirection === "asc" ? (
                <ChevronUp size={14} />
              ) : (
                <ChevronDown size={14} />
              )
            ) : (
              <span className="text-gray-300 flex">
                <ChevronUp size={14} className="opacity-50" />
              </span>
            )}
          </span>
        )}
      </div>
    </th>
  );
};

// Status pill component
const StatusPill = ({ status }) => {
  const getStatusStyle = () => {
    switch (status.toLowerCase()) {
      case "enabled":
        return "bg-green-100 text-green-800";
      case "disabled":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <span
      className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusStyle()}`}
    >
      {status}
    </span>
  );
};

// Action menu component
const ActionMenu = ({
  rowId,
  isEnabled,
  onEdit,
  onViewVersions,
  onEnable,
  onDelete,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  const handleAction = (action, e) => {
    e.stopPropagation();
    setMenuOpen(false);

    switch (action) {
      case "edit":
        onEdit(rowId, action);
        break;
      case "viewVersions":
        onViewVersions(rowId, action);
        break;
      case "enable":
        onEnable(rowId, action);
        break;
      case "delete":
        onDelete(rowId, action);
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="p-1 text-gray-500 hover:text-gray-700"
      >
        <MoreVertical size={16} />
      </button>

      {menuOpen && (
        <div className="absolute right-0 z-10 w-40 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
          <div className="py-1">
            <button
              onClick={(e) => handleAction("edit", e)}
              className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
            >
              Edit
            </button>
            <button
              onClick={(e) => handleAction("viewVersions", e)}
              className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 border-t border-gray-100"
            >
              View versions
            </button>
            {!isEnabled && (
              <button
                onClick={(e) => handleAction("enable", e)}
                className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 border-t border-gray-100"
              >
                Enable
              </button>
            )}
            <button
              onClick={(e) => handleAction("delete", e)}
              className="block w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-gray-100 border-t border-gray-100"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Main DataTable component
const DataTable = ({
  data,
  columns,
  sortConfig,
  searchValue,
  onRowSelect,
  onSelectAll,
  onSort,
  onSearch,
  onRowAction,
  selectedRows = [],
}) => {
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Handle search
  const handleSearch = (e) => {
    const value = e.target.value;
    onSearch(value)
  };

  // Handle select all
  const handleSelectAll = (e) => {
    onSelectAll(e.target.checked);
  };

  // Handle row selection
  const handleRowSelect = (e) => {
    const rowId = Number(e.target.dataset.rowId)
    onRowSelect(rowId, e.target.checked);
  };

  return (
    <div className="w-full bg-white rounded-md shadow-sm">
      {/* Search and filters */}
      <div className="flex justify-between p-3 border-b">
        <div className="relative w-64">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search size={16} className="text-gray-400" />
          </div>
          <input
            type="text"
            className="w-full pl-10 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search"
            value={searchValue}
            onChange={handleSearch}
          />
        </div>

        <div className="flex space-x-2">
          <button
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            onClick={() => setFiltersOpen(!filtersOpen)}
          >
            <Filter size={16} className="mr-1" />
            Filters
          </button>
          {/* Export button would go here */}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-12 p-3">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                  onChange={handleSelectAll}
                  checked={
                    selectedRows.length > 0 &&
                    selectedRows.length === data.length
                  }
                />
              </th>

              {columns.map((column) => (
                <ColumnHeader
                  key={column.key}
                  title={column.label}
                  sortable={column.sortable}
                  sorted={sortConfig?.key === column.key}
                  sortDirection={sortConfig?.direction}
                  onSort={onSort}
                />
              ))}

              <th className="w-12 p-3"></th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row) => {
              const isSelected = selectedRows.includes(row.id);

              return (
                <tr
                  key={row.id}
                  className={`hover:bg-gray-50 ${
                    isSelected ? "bg-blue-50" : ""
                  }`}
                >
                  <td className="w-12 p-3">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                      checked={isSelected}
                      data-row-id={row.id}
                      onChange={handleRowSelect}
                    />
                  </td>

                  {columns.map((column) => (
                    <td
                      key={`${row.id}-${column.key}`}
                      className="p-3 whitespace-nowrap"
                    >
                      {column.key === "status" ? (
                        <StatusPill status={row[column.key]} />
                      ) : column.key === "lastModified" ? (
                        formatDate(row[column.key])
                      ) : (
                        <span className="text-sm text-gray-600">
                          {row[column.key]}
                        </span>
                      )}
                    </td>
                  ))}

                  <td className="p-3 text-right">
                    <ActionMenu
                      isEnabled={row.status === "Enabled"}
                      rowId={row.id}
                      onEdit={onRowAction}
                      onViewVersions={onRowAction}
                      onEnable={onRowAction}
                      onDelete={onRowAction}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
