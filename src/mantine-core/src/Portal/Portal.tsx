import React, { useRef } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  /** Portal children, for example, modal or popover */
  children: React.ReactNode;

  /** Root element z-index property */
  zIndex?: number;

  /** Element where portal should be rendered, by default new div element is created and appended to document.body */
  target?: HTMLDivElement;

  /** Root element className */
  className?: string;
}

export function Portal({ children, zIndex = 1, target, className }: PortalProps) {
  if (typeof document === 'undefined') {
    return null;
  }

  let element = target;

  if (!target) {
    const container = document.createElement('div');
    document.body.appendChild(container);
    element = container;
  }

  const elementRef = useRef<HTMLDivElement>(element);

  return createPortal(
    <div className={className} style={{ position: 'relative', zIndex }} data-mantine-portal>
      {children}
    </div>,
    elementRef.current
  );
}

Portal.displayName = '@mantine/core/Portal';