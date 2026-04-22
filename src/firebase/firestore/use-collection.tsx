'use client';

import { useEffect, useState, useRef } from 'react';
import type {
  CollectionReference,
  DocumentData,
  Query,
} from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';
import { errorEmitter } from '../error-emitter';
import { FirestorePermissionError } from '../errors';

export interface UseCollectionOptions {
  // Add any options here, like `snapshotListenOptions`
}

export function useCollection<T = DocumentData>(
  query: Query<T> | CollectionReference<T> | null,
  options?: UseCollectionOptions
) {
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const queryRef = useRef(query);
  queryRef.current = query;

  useEffect(() => {
    if (!queryRef.current) {
      setData(null);
      setLoading(false);
      return;
    }

    setLoading(true);

    const unsubscribe = onSnapshot(
      queryRef.current,
      (snapshot) => {
        const docs = snapshot.docs.map(
          (doc) => ({ ...doc.data(), id: doc.id } as T)
        );
        setData(docs);
        setLoading(false);
        setError(null);
      },
      (err) => {
        const permissionError = new FirestorePermissionError({
          path: (queryRef.current as CollectionReference).path,
          operation: 'list',
        });
        errorEmitter.emit('permission-error', permissionError);
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [query?.path, query?._query?.canonicalId]); // Re-run when query path or constraints change

  return { data, loading, error };
}
