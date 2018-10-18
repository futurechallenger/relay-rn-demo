/**
 * @flow
 * @relayHash 768af4080b8294981bb6defb891cd6ed
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RelayDemoScreenQueryVariables = {||};
export type RelayDemoScreenQueryResponse = {|
  +allPeople: ?$ReadOnlyArray<?{|
    +id: string,
    +fullName: ?string,
    +email: ?string,
  |}>
|};
export type RelayDemoScreenQuery = {|
  variables: RelayDemoScreenQueryVariables,
  response: RelayDemoScreenQueryResponse,
|};
*/


/*
query RelayDemoScreenQuery {
  allPeople {
    id
    fullName
    email
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "allPeople",
    "storageKey": null,
    "args": null,
    "concreteType": "Person",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "fullName",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "email",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "RelayDemoScreenQuery",
  "id": null,
  "text": "query RelayDemoScreenQuery {\n  allPeople {\n    id\n    fullName\n    email\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RelayDemoScreenQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "RelayDemoScreenQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'afd053d491e5f78c8d63cf4f7307ff6b';
module.exports = node;
