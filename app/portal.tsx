'use client';
import { createContext, ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';

const PortalContext = createContext<HTMLDivElement | null>(null);

interface PortalProviderProps {
  children: ReactNode;
}

const PortalProvider = ({ children }: PortalProviderProps) => {
  const [portalContainerRef, setPortalContainerRef] = useState<HTMLDivElement | null>(
    null
  );
  return (
    <PortalContext.Provider value={portalContainerRef}>
      {children}
      <div
        id="portal"
        ref={(element) => {
          if (portalContainerRef !== null || element === null) {
            return;
          }
          setPortalContainerRef(element);
        }}
      />
    </PortalContext.Provider>
  );
};

interface PortalConsumerProps {
  children: ReactNode;
}

const PortalConsumer = ({ children }: PortalConsumerProps) => {
  return (
    <PortalContext.Consumer>
      {(portalContainerRef) => {
        if (portalContainerRef === null) {
          return null;
        }
        return createPortal(children, portalContainerRef);
      }}
    </PortalContext.Consumer>
  );
};

export const Portal = {
  Provider: PortalProvider,
  Consumer: PortalConsumer
};
