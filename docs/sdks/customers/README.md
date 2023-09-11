# customers

### Available Operations

* [newCustomer](#newcustomer) - New Customer

## newCustomer

Add a new customer to the project

### Example Usage

```typescript
import { SwaggerT2 } from "swagger-t2";
import { NewCustomerResponse } from "swagger-t2/dist/sdk/models/operations";

const sdk = new SwaggerT2();

sdk.customers.newCustomer({
  requestBody: {
    customIdentifier: "The Custom Identifier of the customer in the organization",
    email: "The Email of the customer.",
    metadata: {},
    name: "The Name of the customer.",
    thumb: "The Avatar of the customer.",
  },
  token: "distinctio",
  projectId: 844266,
}).then((res: NewCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.NewCustomerRequest](../../models/operations/newcustomerrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.NewCustomerResponse](../../models/operations/newcustomerresponse.md)>**

