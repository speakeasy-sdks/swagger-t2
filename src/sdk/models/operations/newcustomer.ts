/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class NewCustomerRequestBodyMetadata extends SpeakeasyBase {}

export class NewCustomerRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "custom_identifier" })
    customIdentifier?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => NewCustomerRequestBodyMetadata)
    metadata?: NewCustomerRequestBodyMetadata;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "thumb" })
    thumb?: string;
}

export class NewCustomerRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody: NewCustomerRequestBody;

    /**
     * Project id
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
    project: number;
}

export class NewCustomer200ApplicationJSONMetadata extends SpeakeasyBase {}

/**
 * Successful operation
 */
export class NewCustomer200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "address" })
    address?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "custom_identifier" })
    customIdentifier?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => NewCustomer200ApplicationJSONMetadata)
    metadata?: NewCustomer200ApplicationJSONMetadata;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "thumb" })
    thumb?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "wallet_connection" })
    walletConnection?: string;
}

export class NewCustomerResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Successful operation
     */
    @SpeakeasyMetadata()
    newCustomer200ApplicationJSONObject?: NewCustomer200ApplicationJSON;
}