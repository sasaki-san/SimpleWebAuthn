import { ClientDataJSON } from '@webauthntine/typescript-types';

import asciiToBinary from './asciiToBinary';

/**
 * Decode an authenticator's base64-encoded clientDataJSON to JSON
 */
export default function decodeClientDataJSON(data: string): ClientDataJSON {
  const toString = asciiToBinary(data);
  return JSON.parse(toString);
}