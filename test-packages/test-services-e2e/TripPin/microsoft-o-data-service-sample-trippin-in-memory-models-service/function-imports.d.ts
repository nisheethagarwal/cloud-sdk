import { FunctionImportRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { People } from './People';
import { Airports } from './Airports';
/**
 * Type of the parameters to be passed to [[getPersonWithMostFriends]].
 */
export interface GetPersonWithMostFriendsParameters {
}
/**
 * Get Person With Most Friends.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export declare function getPersonWithMostFriends(parameters: GetPersonWithMostFriendsParameters): FunctionImportRequestBuilder<GetPersonWithMostFriendsParameters, People>;
/**
 * Type of the parameters to be passed to [[getNearestAirport]].
 */
export interface GetNearestAirportParameters {
    /**
     * Lat.
     */
    lat: number;
    /**
     * Lon.
     */
    lon: number;
}
/**
 * Get Nearest Airport.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export declare function getNearestAirport(parameters: GetNearestAirportParameters): FunctionImportRequestBuilder<GetNearestAirportParameters, Airports>;
export declare const functionImports: {
    getPersonWithMostFriends: typeof getPersonWithMostFriends;
    getNearestAirport: typeof getNearestAirport;
};
//# sourceMappingURL=function-imports.d.ts.map