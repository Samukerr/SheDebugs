'use client';

import type { PropsWithChildren } from 'react';
import { initializeFirebase } from './index';
import { FirebaseProvider } from './provider';

// This is a singleton that will be created once and reused
const firebaseApp = initializeFirebase();

/**
 * Provides the Firebase app, auth, and firestore instances to the client side.
 * This should be used at the root of the client-side application.
 */
export function FirebaseClientProvider({ children }: PropsWithChildren) {
  return <FirebaseProvider {...firebaseApp}>{children}</FirebaseProvider>;
}
