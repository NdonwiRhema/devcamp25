'use client';

import React, { useState } from 'react';
import {
  Users,
  BookOpen,
  CreditCard,
  GraduationCap,
  Subscript as Subscription,
  BarChart3,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  Sun,
  Moon,
  ChevronLeft,
  ChevronRight,
  Power,
} from 'lucide-react';
import { signOutFromPortal } from '../portalActions';
import { redirect } from 'next/navigation';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [theme, toggleTheme]  = useState('dark');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'instructors', label: 'Instructors', icon: GraduationCap },
    { id: 'transactions', label: 'Transactions', icon: CreditCard },
    { id: 'subscriptions', label: 'Subscriptions', icon: Subscription },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

const signOut = async()=>{
  const {error} = await signOutFromPortal();
  if(error){
    console.error(error);
  }
  else{
    redirect('../../Portal');
  }
}

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      theme === 'dark' ? 'bg-dark-bg text-dark-text' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${
          isSidebarCollapsed ? 'w-20' : 'w-64'
        } ${
          theme === 'dark' 
            ? 'bg-dark-card border-dark-border' 
            : 'bg-white border-gray-200'
        } border-r`}
      >
        <div className={`flex items-center justify-between p-4 border-b ${
          theme === 'dark' ? 'border-dark-border' : 'border-gray-200'
        }`}>
          <h1 className={`text-xl font-bold text-orange-300 transition-opacity duration-200 ${
            isSidebarCollapsed ? 'opacity-0 hidden' : 'opacity-100'
          }`}>DevCamp25</h1>
          <div className="flex items-center">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <X size={20} />
            </button>
            <button
              onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
              className="hidden lg:block text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 ml-2"
            >
              {isSidebarCollapsed ? (
                <ChevronRight size={20} />
              ) : (
                <ChevronLeft size={20} />
              )}
            </button>
          </div>
        </div>
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors ${
                activeTab === item.id
                  ? 'bg-orange-500 text-gray-900 text-lg font-semibold'
                  : `text-gray-600 hover:bg-orange-300 
                     dark:text-gray-300 dark:hover:bg-dark-border`
              }`}
              title={isSidebarCollapsed ? item.label : undefined}
            >
              <item.icon size={activeTab === item.id?24:20} />
              <span className={`transition-opacity duration-200 ${
                isSidebarCollapsed ? 'opacity-0 hidden' : 'opacity-100'
              }`}>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${
        isSidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'
      }`}>
        {/* Header */}
        <header className={`${
          theme === 'dark' 
            ? 'bg-dark-card border-dark-border' 
            : 'bg-white border-gray-200'
        } border-b sticky top-0 z-30`}>
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                <Menu size={24} />
              </button>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search..."
                  className={`pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                    theme === 'dark'
                      ? 'bg-gray-900 border-dark-border text-dark-text'
                      : 'bg-white border-gray-200 text-gray-900'
                  } border`}
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={()=>toggleTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-border"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="text-gray-400" size={20} />
                ) : (
                  <Moon className="text-gray-600" size={20} />
                )}
              </button>
              <button className="relative text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </button>
              <div className="flex items-center space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <button className="flex items-center space-x-3 text-sm" onClick={()=>signOut()}>
                  <span>John Doe</span>
                  <Power size={16} />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
            {/* Stats Cards */}
            <div className={`${
              theme === 'dark'
                ? 'bg-dark-card border-dark-border'
                : 'bg-white border-gray-200'
            } p-6 rounded-xl shadow-sm border`}>
              <div className="flex items-center justify-between">
                <h3 className={theme === 'dark' ? 'text-dark-text-secondary' : 'text-gray-500'}>
                  Total Users
                </h3>
                <Users className="text-blue-500" size={24} />
              </div>
              <p className="text-2xl font-semibold mt-2">2,543</p>
              <p className="text-green-500 text-sm mt-2">+12.5% from last month</p>
            </div>
            <div className={`${
              theme === 'dark'
                ? 'bg-dark-card border-dark-border'
                : 'bg-white border-gray-200'
            } p-6 rounded-xl shadow-sm border`}>
              <div className="flex items-center justify-between">
                <h3 className={theme === 'dark' ? 'text-dark-text-secondary' : 'text-gray-500'}>
                  Active Courses
                </h3>
                <BookOpen className="text-purple-500" size={24} />
              </div>
              <p className="text-2xl font-semibold mt-2">128</p>
              <p className="text-green-500 text-sm mt-2">+4.2% from last month</p>
            </div>
            <div className={`${
              theme === 'dark'
                ? 'bg-dark-card border-dark-border'
                : 'bg-white border-gray-200'
            } p-6 rounded-xl shadow-sm border`}>
              <div className="flex items-center justify-between">
                <h3 className={theme === 'dark' ? 'text-dark-text-secondary' : 'text-gray-500'}>
                  Total Revenue
                </h3>
                <CreditCard className="text-green-500" size={24} />
              </div>
              <p className="text-2xl font-semibold mt-2">$48,295</p>
              <p className="text-green-500 text-sm mt-2">+18.3% from last month</p>
            </div>
            <div className={`${
              theme === 'dark'
                ? 'bg-dark-card border-dark-border'
                : 'bg-white border-gray-200'
            } p-6 rounded-xl shadow-sm border`}>
              <div className="flex items-center justify-between">
                <h3 className={theme === 'dark' ? 'text-dark-text-secondary' : 'text-gray-500'}>
                  Active Instructors
                </h3>
                <GraduationCap className="text-orange-500" size={24} />
              </div>
              <p className="text-2xl font-semibold mt-2">48</p>
              <p className="text-green-500 text-sm mt-2">+2.4% from last month</p>
            </div>
          </div>

          {/* Recent Activity Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <div className={`${
              theme === 'dark'
                ? 'bg-dark-card border-dark-border'
                : 'bg-white border-gray-200'
            } p-6 rounded-xl shadow-sm border`}>
              <h2 className="text-lg font-semibold mb-4">Recent Enrollments</h2>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <img
                      src={`https://images.unsplash.com/photo-${1500000000000 + i}?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80`}
                      alt="Student"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium">Student Name {i}</p>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-dark-text-secondary' : 'text-gray-500'
                      }`}>
                        Enrolled in Course {i}
                      </p>
                    </div>
                    <span className={`ml-auto text-sm ${
                      theme === 'dark' ? 'text-dark-text-secondary' : 'text-gray-500'
                    }`}>
                      2h ago
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${
              theme === 'dark'
                ? 'bg-dark-card border-dark-border'
                : 'bg-white border-gray-200'
            } p-6 rounded-xl shadow-sm border`}>
              <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full ${
                        theme === 'dark' ? 'bg-blue-900/50' : 'bg-blue-100'
                      } flex items-center justify-center`}>
                        <CreditCard className="text-blue-500" size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Payment #{1000 + i}</p>
                        <p className={`text-sm ${
                          theme === 'dark' ? 'text-dark-text-secondary' : 'text-gray-500'
                        }`}>
                          Course Purchase
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">$99.00</p>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-dark-text-secondary' : 'text-gray-500'
                      }`}>
                        1d ago
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;