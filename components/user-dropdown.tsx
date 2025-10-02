'use client';

import { User, ChevronDown, Settings, Receipt, LogOut } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-neutral-900 hover:bg-gray-50 rounded-md transition-colors"
      >
        <User className="h-4 w-4" />
        <span>User</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-20">
            <div className="px-4 py-2 border-b border-gray-200">
              <p className="text-sm font-medium text-neutral-900">Account</p>
            </div>

            <Link
              href="https://app.useoctree.com/settings"
              className="flex items-center gap-2 px-4 py-2 text-sm text-neutral-700 hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>

            <Link
              href="https://app.useoctree.com/billing"
              className="flex items-center gap-2 px-4 py-2 text-sm text-neutral-700 hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Receipt className="h-4 w-4" />
              Billing History
            </Link>

            <Link
              href="https://app.useoctree.com/auth/login"
              className="flex items-center gap-2 px-4 py-2 text-sm text-neutral-700 hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <LogOut className="h-4 w-4" />
              Login
            </Link>
          </div>
        </>
      )}
    </div>
  );
} 