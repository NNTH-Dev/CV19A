import * as React from 'react';

export const rootNavigationRef: any = React.createRef();

export function navigate(name: string, params?: any) {
  (rootNavigationRef.current as any)?.navigate(name, params);
}

export function reset(name: string, params?: any) {
  (rootNavigationRef.current as any)?.reset({
    index: 0,
    routes: [{ name, params }],
  });
}
