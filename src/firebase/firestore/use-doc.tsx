'use client';

import { useEffect, useState, useRef } from 'react';
import type { DocumentReference, DocumentData } from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';
import { errorEmitter } from '../error-emitter';
import { FirestorePermissionError } from '../errors';

export interface UseDocOptions {
  // Add any options here
}

export function useDoc<T = DocumentData>(
  docRef: DocumentReference<T> | null,
  options?: UseDocOptions
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const docRefRef = useRef(docRef);
  docRefRef.current = docRef;

  useEffect(() => {
    if (!docRefRef.current) {
      setData(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    const unsubscribe = onSnapshot(
      docRefRef.current,
      (doc) => {
        if (doc.exists()) {
          setData({ ...doc.data(), id: doc.id } as T);
        } else {
          setData(null);
        }
        setLoading(false);
        setError(null);
      },
      (err) => {
        const permissionError = new FirestorePermissionError({
          path: (docRefRef.current as DocumentReference).path,
          operation: 'get',
        });
        errorEmitter.emit('permission-error', permissionError);
        setError(err);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, [docRef?.path]); // Re-run effect if document path changes

  return { data, loading, error };
}
