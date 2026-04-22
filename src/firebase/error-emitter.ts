import { EventEmitter } from 'events';
import type { FirestorePermissionError } from './errors';

type ErrorEvents = {
  'permission-error': (error: FirestorePermissionError) => void;
};

// This is a typed event emitter.
class TypedEventEmitter<T extends Record<string, (...args: any[]) => void>> {
  private emitter = new EventEmitter();

  on<K extends keyof T>(event: K, listener: T[K]) {
    this.emitter.on(event as string, listener);
  }

  off<K extends keyof T>(event: K, listener: T[K]) {
    this.emitter.off(event as string, listener);
  }

  emit<K extends keyof T>(event: K, ...args: Parameters<T[K]>) {
    this.emitter.emit(event as string, ...args);
  }
}

// Create a singleton instance of the event emitter.
export const errorEmitter = new TypedEventEmitter<ErrorEvents>();
