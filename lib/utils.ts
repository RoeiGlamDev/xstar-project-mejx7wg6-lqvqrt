import React from 'react';

export const formatCurrency = (amount: number): string => {
    return `$${amount.toFixed(2)}`; // Format amount to currency
};

export const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1); // Capitalize first letter
};

export const truncateText = (text: string, maxLength: number): string => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text; // Truncate text
};

export const isValidEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email validation regex
    return regex.test(email); // Check if email is valid
};

export const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout; // Timeout ID for debounce
    return (...args: any[]) => {
        if (timeoutId) clearTimeout(timeoutId); // Clear previous timeout
        timeoutId = setTimeout(() => {
            func(...args); // Call the function after delay
        }, delay);
    };
};

export default {
    formatCurrency,
    capitalizeFirstLetter,
    truncateText,
    isValidEmail,
    debounce,
};