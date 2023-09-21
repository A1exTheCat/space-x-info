# SpaceX Launches Information Platform 🚀

This React project is an interface to view and interact with SpaceX launches data. It integrates with the SpaceX API, provides filtering, searching, and sorting capabilities, and showcases the data in a table format. The application is designed using React-Bootstrap for the UI and Redux for state management.

## 📑 Table of Contents

- [Features](#-features)
- [File Structure](#-file-structure)
- [Setup and Configuration](#-setup-and-configuration)
- [Constants and Utilities](#-constants-and-utilities)
- [Layout and Main Application Structure](#-layout-and-main-application-structure)
- [Main Data Display and Management](#-main-data-display-and-management)
- [User Interface for Filtering and Searching](#-user-interface-for-filtering-and-searching)

## 🌟 Features

- 📊 View a table of SpaceX launches with relevant details.
- 📝 Filter launches based on status: Success, Failed, Upcoming, etc.
- 🔄 Sort data based on various parameters.
- 🔍 Search for specific launches.
- 🎡 Infinite scroll functionality to load more data as the user scrolls.
- 📱 Responsive design that adjusts to different screen sizes.

## 🗂 File Structure

- **App.js**: Application's main entry point.
- **store.js**: Redux store configuration.
- **dataSlice.js**: Redux slice for SpaceX data.
- **index.js & spacexAPI.js**: API interactions using Axios.
- **consts.js**: Application constants and default query structure.
- **dateConvertor.js**: Date conversion utility.
- **queryBuilder.js**: Utility for API query construction.
- **AppContainer.js**: Main layout container.
- **DataTable.js**: Table displaying SpaceX data.
- **ErrorBtn.js**: UI component for error handling.
- **FilterSortBtn.js**: Filtering and sorting controls.
- **Form.js**: Search input form.
- **Header.js**: Main header with image.
- **Loader.js**: Loading spinner UI.
- **InfiniteScroll.js**: Infinite scroll handler.

# Step by step

## ⚙ Setup and Configuration

- 🔨 Configure Redux store in **store.js**.
- 📦 Define state, actions, and reducers in **dataSlice.js**.
- 🌐 Set up Axios for API calls in **index.js**.
- 🎛 Use **spacexAPI.js** for data-fetching functions.

## 🛠 Constants and Utilities

- 🗄 **consts.js**: Houses constants like API's base URL, button configurations, and default API query structure.
- 📅 **dateConvertor.js**: Utility to format dates.
- 🔍 **queryBuilder.js**: Constructs API queries based on given parameters.

## 🎨 Layout and Main Application Structure

- 🖼 **App.js**: Entry point, sets the main application structure.
- 🏗 **AppContainer.js**: Container for main content.
- 📜 **Header.js**: Application title and main image.

## 📊 Main Data Display and Management

- 📋 **DataTable.js**: Table of SpaceX data, handles data fetching, loading, and error states.
- ⌛ **Loader.js**: Spinner displayed during data loading.
- ⚠ **ErrorBtn.js**: Button for network error handling.
- 📜 **InfiniteScroll.js**: Enables infinite scrolling functionality.

## 🎛 User Interface for Filtering and Searching

- 🎚 **FilterSortBtn.js**: Toggle buttons and dropdown for data filtering and sorting.
- 🖋 **Form.js**: Search input for filtering launches by text.
