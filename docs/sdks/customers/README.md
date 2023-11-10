# Customers
(*customers*)

### Available Operations

* [newCustomer](#newcustomer) - New Customer

## newCustomer

Add a new customer to the project

### Example Usage

```typescript
import { SwaggerT2 } from "swagger-t2";

(async() => {
  const sdk = new SwaggerT2();

  const res = await sdk.customers.newCustomer({
    requestBody: {
      customIdentifier: "The Custom Identifier of the customer in the organization",
      email: "The Email of the customer.",
      metadata: {},
      name: "The Name of the customer.",
      thumb: "The Avatar of the customer.",
    },
    token: "string",
    projectId: 182571,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.NewCustomerRequest](../../sdk/models/operations/newcustomerrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.NewCustomerResponse](../../sdk/models/operations/newcustomerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
