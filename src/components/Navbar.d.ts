import React from 'react';
interface NavbarProps {
    theme: string;
    toggleTheme: () => void;
    isExpanded: boolean;
    toggleExpand: () => void;
}
declare const Navbar: React.FC<NavbarProps>;
export default Navbar;
