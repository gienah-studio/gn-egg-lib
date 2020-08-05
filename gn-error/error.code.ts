import GNEnum from '../gn-enum';

export default class GN_ERROR_CODE extends GNEnum<[string, string]> {
  public static SUCCESS = new GN_ERROR_CODE(['00000', 'ok']);
  public static UNKNOWN_ERROR = new GN_ERROR_CODE(['00001', 'unknown error']);
  public static NETWORK_ERROR = new GN_ERROR_CODE(['00002', 'network error']);
  public static INTERNAL_SERVER_ERROR = new GN_ERROR_CODE(['00003', 'internal server error']);
  public static CACHE_ERROR = new GN_ERROR_CODE(['00004', 'cache error']);
  public static DATABASE_ERROR = new GN_ERROR_CODE(['00005', 'database error']);
  public static TRANSACTION_ERROR = new GN_ERROR_CODE(['00006', 'transaction error']);
  public static HTTP_REQUEST_ERROR = new GN_ERROR_CODE(['00007', 'http request error']);
  public static JWT_GENERATION_ERROR = new GN_ERROR_CODE(['00008', 'jwt generation error']);
  public static JWT_VERIFICATION_ERROR = new GN_ERROR_CODE(['00009', 'jwt verification error']);
  public static UNAUTHORIZED = new GN_ERROR_CODE(['00010', 'unauthorized']);
  public static UNPROCESSABLE_ENTITY = new GN_ERROR_CODE(['00011', 'api param invalid']);
}
