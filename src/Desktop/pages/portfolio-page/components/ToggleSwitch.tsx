import React from "react";

export default function ToggleSwitch() {
  return (
    <div className="container pt-10">
      <label className="relative inline-flex items-center mb-4 cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="w-20 h-6 bg-[#2B2F2B]/[0.8] rounded-full peer peer-checked:ring-1 peer-checked:ring-[#DDA44F] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Checked toggle
        </span>
      </label>
    </div>
  );
}
