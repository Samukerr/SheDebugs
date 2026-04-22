// Defines custom error types for the application.

/**
 * Represents the context of a Firestore security rule denial.
 * This is used to create rich, contextual errors for debugging.
 */
export type SecurityRuleContext = {
  path: string;
  operation: 'get' | 'list' | 'create' | 'update' | 'delete';
  requestResourceData?: any;
};

/**
 * A custom error for Firestore permission issues that includes
 * the security rule context. This is useful for debugging security rules.
 */
export class FirestorePermissionError extends Error {
  public context: SecurityRuleContext;

  constructor(context: SecurityRuleContext) {
    const message = `FirestoreError: Missing or insufficient permissions.`;
    super(message);
    this.name = 'FirestorePermissionError';
    this.context = context;
    // You can format the full message with context for logging if needed.
    this.message = `${message}\n${JSON.stringify(context, null, 2)}`;
  }
}
