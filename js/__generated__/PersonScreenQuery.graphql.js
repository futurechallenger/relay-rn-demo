/**
 * @flow
 * @relayHash b3ec2f013dce41a91335e16c69ab5fd1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PersonScreenQueryVariables = {|
  personId: string
|};
export type PersonScreenQueryResponse = {|
  +person: ?{|
    +friends: ?$ReadOnlyArray<?{|
      +id: string,
      +fullName: ?string,
      +email: ?string,
    |}>
  |}
|};
export type PersonScreenQuery = {|
  variables: PersonScreenQueryVariables,
  response: PersonScreenQueryResponse,
|};
*/


/*
query PersonScreenQuery(
  $personId: ID!
) {
  person(id: $personId) {
    friends {
      id
      fullName
      email
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "personId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "personId",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "friends",
  "storageKey": null,
  "args": null,
  "concreteType": "Person",
  "plural": true,
  "selections": [
    v2,
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
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PersonScreenQuery",
  "id": null,
  "text": "query PersonScreenQuery(\n  $personId: ID!\n) {\n  person(id: $personId) {\n    friends {\n      id\n      fullName\n      email\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PersonScreenQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "person",
        "storageKey": null,
        "args": v1,
        "concreteType": "Person",
        "plural": false,
        "selections": [
          v3
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PersonScreenQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "person",
        "storageKey": null,
        "args": v1,
        "concreteType": "Person",
        "plural": false,
        "selections": [
          v3,
          v2
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0e1b77d80dd49372fb49d86c87394f2e';
module.exports = node;
