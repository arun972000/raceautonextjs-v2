"use client";

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="mt-3">
      <p>Current Theme: {theme}</p>
      <Button variant="secondary" onClick={() => setTheme('light')}>
        Light Mode
      </Button>{' '}
      <Button variant="dark" onClick={() => setTheme('dark')}>
        Dark Mode
      </Button>{' '}
      <Button variant="outline-primary" onClick={() => setTheme('system')}>
        System Mode
      </Button>
    </div>
  );
}
