<!-- Start SDK Example Usage [usage] -->
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
<!-- End SDK Example Usage [usage] -->