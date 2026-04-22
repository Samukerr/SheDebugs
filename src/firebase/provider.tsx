'use client';

import type { FirebaseApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore';
import { createContext, useContext, type PropsWithChildren } from 'react';

// Define the shape of the context
interface FirebaseContextValue {
  firebaseApp: FirebaseApp | null;
  auth: Auth | null;
  firestore: Firestore | null;
}

// Create the context
const FirebaseContext = createContext<FirebaseContextValue>({
  firebaseApp: null,
  auth: null,
  firestore: null,
});

/**
 * Provides the Firebase app, auth, and firestore instances to its children.
 */
export function FirebaseProvider({
  children,
  firebaseApp,
  auth,
  firestore,
}: PropsWithChildren<FirebaseContextValue>) {
  return (
    <FirebaseContext.Provider value={{ firebaseApp, auth, firestore }}>
      {children}
    </FirebaseContext.Provider>
  );
}

// Custom hooks to easily access the Firebase instances
export const useFirebase = () => useContext(FirebaseContext);
export const useFirebaseApp = () => useContext(FirebaseContext).firebaseApp;
export const useAuth = () => {
    const context = useContext(FirebaseContext);
    if (!context) {
        throw new Error('useAuth must be used within a FirebaseProvider');
    }
    return { auth: context.auth };
};
export const useFirestore = () => {
    const context = useContext(FirebaseContext);
    if (!context) {
        throw new Error('useFirestore must be used within a FirebaseProvider');
    }
    return { firestore: context.firestore };
};
