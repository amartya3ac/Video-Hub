import React, { createContext, useContext, useState, ReactNode } from 'react';
import { users } from '../data/videos';

interface AuthContextType {
  isAuthenticated: boolean;
  user: typeof users[0] | null;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<typeof users[0] | null>(null);

  const login = () => {
    // For demo purposes, always log in as the first user
    setIsAuthenticated(true);
    setUser(users[0]);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};