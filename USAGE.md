<!-- Start SDK Example Usage -->
```typescript
import { SwaggerT2 } from "swagger-t2";

(async () => {
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
})();

```
<!-- End SDK Example Usage -->