import React, { useState, useEffect } from "react";
import { AlertCircle, AlertTriangle, CheckCircle, Info } from "lucide-react";

interface FlashProps {
  info?: string;
  success?: string;
  warning?: string;
  error?: string;
}

const FlashMessage: React.FC<FlashProps> = ({
  info,
  success,
  warning,
  error,
}) => {
  const [visible, setVisible] = useState(true);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  // Reset visibility when flash message changes
  useEffect(() => {
    if (info || success || warning || error) {
      setVisible(true);

      // Clear any existing timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // Auto-dismiss after 5 seconds
      const id = setTimeout(() => {
        setVisible(false);
      }, 5000);

      setTimeoutId(id);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [info, success, warning, error]);

  const getFlashType = () => {
    if (error) return "error";
    if (warning) return "warning";
    if (success) return "success";
    if (info) return "info";
    return null;
  };

  const getMessage = () => {
    if (error) return error;
    if (warning) return warning;
    if (success) return success;
    if (info) return info;
    return "";
  };

  const getClassAndIcon = () => {
    const type = getFlashType();

    switch (type) {
      case "error":
        return {
          bgClass: "bg-red-100 border-red-400 text-red-700",
          iconColor: "text-red-500",
        };
      case "warning":
        return {
          bgClass: "bg-yellow-100 border-yellow-400 text-yellow-700",
          iconColor: "text-yellow-500",
        };
      case "success":
        return {
          bgClass: "bg-green-100 border-green-400 text-green-700",
          iconColor: "text-green-500",
        };
      case "info":
        return {
          bgClass: "bg-blue-100 border-blue-400 text-blue-700",
          iconColor: "text-blue-500",
        };
      default:
        return {
          bgClass: "",
          iconColor: "",
        };
    }
  };

  const closeFlash = () => {
    setVisible(false);
  };

  const flashType = getFlashType();

  if (!flashType || !visible) {
    return null;
  }

  const { bgClass, iconColor } = getClassAndIcon();
  const message = getMessage();

  // Render the appropriate Lucide icon based on flash type
  const renderIcon = () => {
    const iconProps = {
      className: iconColor,
      size: 20,
    };

    switch (flashType) {
      case "error":
        return <AlertCircle {...iconProps} />;
      case "warning":
        return <AlertTriangle {...iconProps} />;
      case "success":
        return <CheckCircle {...iconProps} />;
      case "info":
        return <Info {...iconProps} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`border px-4 py-3 rounded relative ${bgClass}`}
      role="alert"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center">
          <span className="mr-2">{renderIcon()}</span>
          <span className="block sm:inline">{message}</span>
          <button
            type="button"
            className="ml-auto"
            onClick={closeFlash}
            aria-label="Close"
          >
            <span className="text-xl font-semibold">&times;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashMessage;
