"use client";

import { MapPin, Phone, Mail, Navigation } from "lucide-react";

export function OfficeCard({ office, isSelected, onClick }) {
  const isHeadquarters =
    office.name && office.name.toLowerCase().includes("headquarters");

  return (
    <div
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
      className={`
        group relative bg-white rounded-lg border-2 transition-all duration-300 cursor-pointer
        hover:shadow-lg hover:-translate-y-0.5
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${isSelected ? "border-blue-600 shadow-lg" : "border-gray-200"}
      `}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm">
              {office.country?.substring(0, 2).toUpperCase()}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg leading-tight">
                {office.city}
              </h3>
              <p className="text-sm text-gray-600">{office.country}</p>
            </div>
          </div>
          {isHeadquarters && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              HQ
            </span>
          )}
        </div>

        {/* Address & Contact Info */}
        <div className="space-y-2.5 mb-4">
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400" />
            <div>
              <div>{office.address_line1}</div>
              {office.address_line2 && <div>{office.address_line2}</div>}
              {office.postal_code && <div>{office.postal_code}</div>}
            </div>
          </div>

          {office.phone && (
            <a
              href={`tel:${office.phone}`}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-4 h-4 flex-shrink-0 text-gray-400" />
              <span>{office.phone}</span>
            </a>
          )}

          {office.email && (
            <a
              href={`mailto:${office.email}`}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Mail className="w-4 h-4 flex-shrink-0 text-gray-400" />
              <span className="truncate">{office.email}</span>
            </a>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          {office.maps_url && (
            <a
              href={office.maps_url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              <Navigation className="w-4 h-4" />
              Get directions
            </a>
          )}

          <button
            onClick={(e) => {
              e.stopPropagation();
              window.location.href =
                office.contact_url || `mailto:${office.email}`;
            }}
            className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Contact office
          </button>
        </div>
      </div>

      {isSelected && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full ring-2 ring-white" />
      )}
    </div>
  );
}
