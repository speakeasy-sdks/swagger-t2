# Projects
(*projects*)

## Overview

API Endpoints of Projects

### Available Operations

* [updateProject](#updateproject) - Update existing project

## updateProject

Returns updated project data

### Example Usage

```typescript
import { SwaggerT2 } from "swagger-t2";

async function run() {
  const sdk = new SwaggerT2();

  const res = await sdk.projects.updateProject({
    requestBody: {
      customIdentifier: "The Custom Identifier of the customer in the organization",
      email: "The Email of the customer.",
      metadata: {},
      name: "The Name of the customer.",
      thumb: "The Avatar of the customer.",
    },
    id: 648223,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.UpdateProjectRequest](../../sdk/models/operations/updateprojectrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateProjectResponse](../../sdk/models/operations/updateprojectresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
