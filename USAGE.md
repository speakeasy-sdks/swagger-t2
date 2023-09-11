<!-- Start SDK Example Usage -->


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
  project: 548814,
}).then((res: NewCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->